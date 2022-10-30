# DMK Scripting Language Extension

This is a language extension for [Danmokou](https://github.com/Bagoum/danmokou)'s scripting language. It operates over `.bdsl` files.

This extension provides the following features:

- Syntax highlighting
- Type-sensitive autocomplete
- Method signature helpers
- Method documentation on hover
- Live error detection
- Warnings
- Inlay hints



Some syntax highlighting must be configured in settings.json. You can use the following color definitions as a base: 

```
{
    "editor.tokenColorCustomizations": {
        "textMateRules": [
          {
            "scope": "phaseproperty",
            "settings": {
                "foreground": "#83e0fc"
            }
          },
          {
            "scope": "macroinvoke",
            "settings": {
              "foreground": "#cccccc",
              "fontStyle": "bold italic"
            }
          },
          {
            "scope": "macro",
            "settings": {
                "foreground": "#aaaaaa",
                "fontStyle": "italic"
            }
          }
        ]
      },
      
    "editor.semanticTokenColorCustomizations": {
        "rules": {
            "dmkOperator": {
                "foreground": "#c0c0c0"
            },
            "dmkEnumMember": {
                "foreground": "#d67b3b"
            },
            "method.deprecated": {
                "fontStyle": "strikethrough"
            },
            "method.dmksm": {
                "foreground": "#5bd2e4"
            },
            "method.dmkasyncpattern": {
                "foreground": "#f24848"
            },
            "method.dmksyncpattern": {
                "foreground": "#d8c020"
            },
            "method.dmksyncpattern.dmkatomic": {
                "foreground": "#e2a624"
            },
            "method.dmkcontrols": {
                "foreground": "#2773dd"
            },
            "method.dmkproperties": {
                "foreground": "#44b4ff"
            },
            "method.dmkbpy": {
                "foreground": "#8181cb"
            },
            "method.dmkbpy.dmkatomic": {
                "foreground": "#a276b8"
            },
            "method.dmktp4": {
                "foreground": "#8AB0FF"
            },
            "method.dmktp3": {
                "foreground": "#ff6e42"
            },
            "method.dmktp": {
                "foreground": "#c656d5"
            },
            "method.dmkvtp": {
                "foreground": "#ed4c9f"
            },
            "method.dmkpred": {
                "foreground": "#1ad0bb"
            }
        }
    }
}
```

## Extension Settings

There are three options you can find under "DMK Language Server" in the extensions settings. After changing any of these options, you will need to restart the language server. You can do this by pressing ctrl+shift+P to bring up the command palette, then pressing "Restart DMK language server".

- **DLL Path**: If you add new reflectable functions to your repository, by default they will not be visible to the extension, and the extension will give you errors saying that the function could not be found. To resolve this, you can build your Unity project (eg. to a folder `C:\MyUnityProjects\Danmokou\Builds\dllsrc`), and then set the value of this setting to the path of the built DLLs, eg. `C:\MyUnityProjects\Danmokou\Builds\dllsrc\Danmokou_Data\Managed`.
- **YAML Path**: If you change documentation for any reflectable functions in your repository, including if you add new reflectable functions, by default the documentation will not be visible to the extension **even if you set the DLL path.** This is because the documentation is sourced from docfx yaml files. To update custom documentation, run `docfx` in the `docs` directory of your DMK project, and then set the value of this setting to eg. `C:\MyUnityProjects\Danmokou\docs\api`.

- **Inlay Hints**: set this to true to enable inlay hints for function calls. Note that you also have to enable editor-wide inlay hints as Editor › Inlay Hints: Enabled. Note that you may also want to add VSCode settings configurations for inlay hint styling, such as the following:

  ```
  "editor.inlayHints.fontSize": 12,
  "editor.inlayHints.padding": true,
  "workbench.colorCustomizations": {
  	"editorInlayHint.background": "#2a2a2a",
  	"editorInlayHint.foreground": "#bbb"
  },
  ```

## Source

 The source code for this project is on Github at [Bagoum/DMKLanguageServerVSCode](https://github.com/Bagoum/DMKLanguageClientVSCode). 

This project can be packaged by running `vsce package`, and then installed as a VSCode extension.

