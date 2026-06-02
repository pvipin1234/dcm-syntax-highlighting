import { blockStartKeywords } from "./keywords";

export interface DcmFormatterSettings {
    blankLinesBetweenBlocks: number;
    indentStyle: 'inherit' | 'spaces' | 'tabs';
    indentSize: number;
    inlineSpacerType: 'spaces' | 'tabs';
    inlineSpaceCount: number;
}

// Default settings fallback
export const defaultSettings: DcmFormatterSettings = {
    blankLinesBetweenBlocks: 1,
    indentStyle: 'inherit',
    indentSize: 4,
    inlineSpacerType: 'spaces',
    inlineSpaceCount: 4
};


/**
 * DCM code layout formatter
 */
export function dcmFormatter(
    text: string,
    settings: DcmFormatterSettings,
    indentString: string,
    inlineSpacer: string
): string {
    const lines = text.split(/\r?\n/);
    const formattedLines: string[] = [];
    let indentLevel = 0;

    for (const line of lines) {
        let trimmed = line.trim();
        if (!trimmed) continue; // Skip chaotic raw blank lines

        // Deduce if line contains a block starting token
        const firstWord = trimmed.split(/[\s\t]+/)[0];
        const startsBlock = blockStartKeywords.has(firstWord);

        // Dedent closing blocks immediately
        if (trimmed.startsWith('}') || trimmed.startsWith('END')) {
            indentLevel = Math.max(0, indentLevel - 1);
        }

        // Add blank padding lines cleanly before starting a brand new block structure
        if (formattedLines.length > 0 && startsBlock) {
            let currentBlanks = 0;
            while (formattedLines.length > currentBlanks && formattedLines[formattedLines.length - 1 - currentBlanks] === '') {
                currentBlanks++;
            }
            const linesToAdd = settings.blankLinesBetweenBlocks - currentBlanks;
            if (linesToAdd > 0) formattedLines.push(...Array(linesToAdd).fill(''));
        }

        // Matches an entire quoted string OR whitespace groups. 
        // If it matches a quoted string, it returns it untouched. 
        // If it matches a whitespace group outside quotes, it replaces it with inlineSpacer.
        trimmed = trimmed.replace(/"[^"]*"|([\s\t]+)/g, (match, whitespaceGroup) => {
            if (whitespaceGroup) {
                return inlineSpacer; // Only modify spaces that are OUTSIDE of quotes
            }
            return match; // Return quoted string completely untouched
        });

        // Save line with target indent level prefix
        formattedLines.push(indentString.repeat(indentLevel) + trimmed);

        // Indent subsequent child structures
        if (startsBlock) indentLevel++;
    }

    return formattedLines.join('\n');
}