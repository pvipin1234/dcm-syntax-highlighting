import {
    createConnection,
    TextDocuments,
    Diagnostic,
    DiagnosticSeverity,
    ProposedFeatures,
    InitializeParams,
    TextDocumentSyncKind,
    InitializeResult,
    Range,
    HoverParams,
    Hover
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { TextEdit, DocumentFormattingParams } from 'vscode-languageserver/node';

// --- ANTLR & Generated Parser Imports ---
import { CharStreams, CommonTokenStream, ANTLRErrorListener, Recognizer, RecognitionException } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { dcmLexer } from './dcmLexer';
import { dcmParser } from './dcmParser';

// Import your listener interface if you want strong typing on the walker methods
import { dcmParserListener } from './dcmParserListener';

import { dcmFormatter } from './formatter';
import { defaultSettings } from './formatter';

import { hoverDocumentation } from './keywords';

const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);


connection.onInitialize((params: InitializeParams): InitializeResult => {
    return {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            documentFormattingProvider: true,
            hoverProvider: true,
        }
    };
});

// --- 1. Custom Syntax Error Listener ---
class LanguageServerErrorListener implements ANTLRErrorListener<any> {
    public diagnostics: Diagnostic[] = [];

    syntaxError<T>(
        recognizer: Recognizer<T, any>,
        offendingSymbol: T | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | undefined
    ): void {
        const startLine = line - 1;
        const startChar = charPositionInLine;
        let endChar = charPositionInLine + 1;

        if (offendingSymbol && (offendingSymbol as any).text) {
            endChar = startChar + (offendingSymbol as any).text.length;
        }

        this.diagnostics.push({
            severity: DiagnosticSeverity.Error,
            range: Range.create(startLine, startChar, startLine, endChar),
            message: `DCM Syntax Error: ${msg}`,
            source: 'DCM Syntax Checker'
        });
    }
}

// This class walks the parse tree to enforce structural rules like array dimension constraints
class DcmSemanticValidator {
    public diagnostics: Diagnostic[] = [];

    /**
     * Example size check for a fixed-value block (FESTWERTEBLOCK).
     * Adjust method names and properties according to your exact dcmParser context structures.
     */
    public enterFestwerteblock?(ctx: any): void {
        // Find the declared dimensions (e.g., parsing an integer from a size parameter token)
        const sizeToken = ctx.festwerteblock_size?.();
        const expectedSize = sizeToken ? parseInt(sizeToken.text, 10) : NaN;

        // Count how many WERT items exist inside this block context
        const wertItems = ctx.wert_exp?.() || [];
        const actualSize = wertItems.length;

        if (!isNaN(expectedSize) && actualSize !== expectedSize) {
            // Highlight the entire definition line of the current block
            const startLine = ctx.start.line - 1;
            const startChar = ctx.start.charPositionInLine;
            const endChar = ctx.stop ? ctx.stop.charPositionInLine + (ctx.stop.text?.length || 0) : startChar + 10;

            this.diagnostics.push({
                severity: DiagnosticSeverity.Error,
                range: Range.create(startLine, startChar, startLine, endChar),
                message: `DCM Dimension Error: Block expected ${expectedSize} WERT values, but found ${actualSize}.`,
                source: 'DCM Matrix Validator'
            });
        }
    }

    /**
     * Example size check for a 2D grid matrix (KENNFELD).
     * Validates that rows and columns match sizeX * sizeY multiplication constraints.
     */
    public enterKennfeld?(ctx: any): void {
        const sizeXToken = ctx.size_x?.();
        const sizeYToken = ctx.size_y?.();

        const expectedX = sizeXToken ? parseInt(sizeXToken.text, 10) : 1;
        const expectedY = sizeYToken ? parseInt(sizeYToken.text, 10) : 1;
        const totalExpectedElements = expectedX * expectedY;

        const actualElements = (ctx.wert_exp?.() || []).length;

        if (actualElements !== totalExpectedElements) {
            const startLine = ctx.start.line - 1;

            this.diagnostics.push({
                severity: DiagnosticSeverity.Error,
                range: Range.create(startLine, ctx.start.charPositionInLine, startLine, ctx.start.charPositionInLine + 8),
                message: `DCM Array Layout Mismatch: KENNFELD dimensions [${expectedX}x${expectedY}] require ${totalExpectedElements} total items, but context contains ${actualElements}.`,
                source: 'DCM Matrix Validator'
            });
        }
    }
}

// Triggered on every keystroke/file update
documents.onDidChangeContent(change => {
    validateDcmDocument(change.document);
});

async function validateDcmDocument(textDocument: TextDocument): Promise<void> {
    const text = textDocument.getText();
    const chars = CharStreams.fromString(text);
    const lexer = new dcmLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new dcmParser(tokens);

    // Wire up syntax tracking error structures
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    const syntaxErrorListener = new LanguageServerErrorListener();
    lexer.addErrorListener(syntaxErrorListener);
    parser.addErrorListener(syntaxErrorListener);

    let parseTree;
    try {
        // Build structural abstract syntax tree
        parseTree = parser.dcm_file();
    } catch (e) {
        // Let structural errors route automatically down via syntaxErrorListener
    }

    // Collect all calculated syntax diagnostics
    let combinedDiagnostics: Diagnostic[] = [...syntaxErrorListener.diagnostics];

    // --- Execute Size/Semantic Check Only if the AST parsed cleanly ---
    if (parseTree && combinedDiagnostics.length === 0) {
        const semanticValidator = new DcmSemanticValidator();

        // Walk the tree nodes using the ParseTreeWalker engine
        ParseTreeWalker.DEFAULT.walk(semanticValidator as dcmParserListener, parseTree);

        // Append dimension/size validation warnings or errors to the pipeline
        combinedDiagnostics = [...combinedDiagnostics, ...semanticValidator.diagnostics];
    }

    // Pushes errors/warnings back to VS Code to draw squiggly lines instantly
    connection.sendDiagnostics({
        uri: textDocument.uri,
        diagnostics: combinedDiagnostics
    });
}

connection.onDocumentFormatting(async (params: DocumentFormattingParams): Promise<TextEdit[]> => {
    const { textDocument, options } = params;
    const document = documents.get(textDocument.uri);

    if (!document) return [];

    // 1. Fetch user extension settings cleanly
    let settings = defaultSettings;
    try {
        const config = await connection.workspace.getConfiguration({
            scopeUri: textDocument.uri,
            section: 'dcm.formatter'
        });
        if (config) settings = { ...defaultSettings, ...config };
    } catch (err) {
        connection.console.log(`Failed to fetch workspace configuration: ${err}`);
    }

    // 2. Resolve formatting styles efficiently
    const isTab = settings.indentStyle === 'tabs' || (settings.indentStyle === 'inherit' && !options.insertSpaces);
    const indentString = isTab ? "\t" : " ".repeat(settings.indentStyle === 'spaces' ? settings.indentSize : options.tabSize);
    const inlineSpacer = settings.inlineSpacerType === 'tabs' ? "\t" : " ".repeat(settings.inlineSpaceCount);

    try {
        const text = document.getText();
        return [
            TextEdit.replace(
                { start: { line: 0, character: 0 }, end: document.positionAt(text.length) },
                dcmFormatter(text, settings, indentString, inlineSpacer)
            )
        ];
    } catch (formatError) {
        connection.console.log(`Formatting execution error: ${formatError}`);
        return [];
    }
});


connection.onHover((params: HoverParams) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return null;

    const text = document.getText();
    const offset = document.offsetAt(params.position);

    // Find word boundaries using regex pattern
    let start = offset;
    let end = offset;
    while (start > 0 && /[^\s"=@:]/.test(text[start - 1])) start--;
    while (end < text.length && /[^\s"=@:]/.test(text[end])) end++;

    const word = text.substring(start, end);
    if (word && hoverDocumentation.hasOwnProperty(word)) {
        return {
            contents: {
                kind: 'markdown',
                value: hoverDocumentation[word]
            }
        };
    }
    return null;
});


documents.listen(connection);
connection.listen();