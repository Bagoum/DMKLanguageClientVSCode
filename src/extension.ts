import * as vscode from 'vscode';
import * as path from "path";
import { LanguageClient, LanguageClientOptions, SettingMonitor, ServerOptions, TransportKind, InitializeParams } from 'vscode-languageclient/node';
import { Trace } from 'vscode-jsonrpc';

let client: LanguageClient;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	let serverExe = context.asAbsolutePath("out\\dll\\DMKLanguageServer.exe");
	let serverOptions: ServerOptions = {
        run: { command: serverExe, args: [], options: { cwd: path.dirname(serverExe) } },
        debug: { command: serverExe, args: ["--debug"], options: { cwd: path.dirname(serverExe) } }
    };

	console.log(process.cwd());
	console.log(serverExe);
	console.log(`DMK Language Extension activated`);
		let clientOptions: LanguageClientOptions = {
			documentSelector: [{pattern: '**/*.bdsl'}],
			synchronize: {
				configurationSection: 'DMKLanguageServer',
				fileEvents: vscode.workspace.createFileSystemWatcher('**/*.bdsl')
			},
		};
	
	context.subscriptions.push(vscode.commands.registerCommand("bdsl.activate", () => {
        vscode.window.showInformationMessage("Starting the DMK language server...");
    }));

	
	const client = new LanguageClient("DMKLanguageServer", "DMK Language Server", serverOptions, clientOptions);
    client.setTrace(Trace.Verbose);
	await client.start();
}

// this method is called when your extension is deactivated
export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
