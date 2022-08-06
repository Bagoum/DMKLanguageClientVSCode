import * as vscode from 'vscode';
import * as path from "path";
import { LanguageClient, LanguageClientOptions, SettingMonitor, ServerOptions, TransportKind, InitializeParams } from 'vscode-languageclient/node';
import { Trace } from 'vscode-jsonrpc';

let client: LanguageClient;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	
    let serverExe = 'dotnet';
	//let serverFile = 'C:\\bex\\mnt\\e\\Workspace\\LanguageServer.NET\\DemoLanguageServer\\bin\\Debug\\net6.0\\DemoLanguageServer.dll';
	let serverFile = 'C:\\bex\\mnt\\e\\Workspace\\DMKLanguageServer\\DMKLanguageServer\\bin\\Debug\\net6.0\\DMKLanguageServer.dll';
	let workPath = path.dirname(serverFile);
	let serverOptions: ServerOptions = {
        run: { command: serverExe, args: [serverFile], options: { cwd: workPath } },
        debug: { command: serverExe, args: [serverFile, "--debug"], options: { cwd: workPath } }
    };

	console.log(`DMK Language Extension activated at ${workPath}`);
		let clientOptions: LanguageClientOptions = {
			documentSelector: [{pattern: '**/*.bdsl'}],
			synchronize: {
				configurationSection: 'DMKLanguageServer',
				fileEvents: vscode.workspace.createFileSystemWatcher('**/*.bdsl')
			},
		};

	
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
