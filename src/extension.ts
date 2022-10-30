import * as vscode from 'vscode';
import * as path from "path";
import { LanguageClient, LanguageClientOptions, SettingMonitor, ServerOptions, TransportKind, InitializeParams } from 'vscode-languageclient/node';
import { Trace } from 'vscode-jsonrpc';
import { start } from 'repl';

let client: LanguageClient;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	async function startClient() {
		let serverExe = context.asAbsolutePath("out\\dll\\DMKLanguageServer.exe");
		let settings = vscode.workspace.getConfiguration('danmokou');
		let runOptions = ["--dllpath", settings['DLL Path'], "--ymlpath", settings['YAML Path']];
		if (settings['Inlay Hints']) {
			runOptions.push("--inlayHints");
		}
		let serverOptions: ServerOptions = {
			run: { command: serverExe, args: runOptions, options: { cwd: path.dirname(serverExe) } },
			debug: { command: serverExe, args: ["--debug"].concat(runOptions), options: { cwd: path.dirname(serverExe) } }
		};
	
		console.log(process.cwd());
		console.log(serverExe);
		console.log(runOptions);
		console.log(`DMK Language Extension activated`);
		let clientOptions: LanguageClientOptions = {
			documentSelector: [{pattern: '**/*.bdsl'}],
			synchronize: {
				configurationSection: 'DMKLanguageServer',
				fileEvents: vscode.workspace.createFileSystemWatcher('**/*.bdsl')
			},
		};
		
		client = new LanguageClient("DMKLanguageServer", "DMK Language Server", serverOptions, clientOptions);
		client.setTrace(Trace.Verbose);
		await client.start();
	}
	await startClient();
	
	context.subscriptions.push(vscode.commands.registerCommand("bdsl.restart", async () => {
		if (!client) {
			vscode.window.showErrorMessage("The DMK language server has not started yet.");
		} else {
			vscode.window.showInformationMessage("Restarting the DMK language server...");
			await deactivate();
			await startClient();
		}
    }));
}

// this method is called when your extension is deactivated
export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
