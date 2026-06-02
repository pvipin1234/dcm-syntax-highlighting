import * as path from 'path';
import { ExtensionContext, workspace } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
    const serverModule = context.asAbsolutePath(path.join('server', 'out', 'server.js'));
    
    // Debug enforcement options
    const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

    const serverOptions: ServerOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions }
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'dcm' }],
        synchronize: {
            fileEvents: workspace.createFileSystemWatcher('**/*.dcm')
        }
    };

    client = new LanguageClient('dcmLanguageServer', 'DCM Language Server', serverOptions, clientOptions);
    client.start();
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) { return undefined; }
    return client.stop();
}