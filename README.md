# DMK Scripting Language Extension

This is a language extension for [Danmokou](https://github.com/Bagoum/danmokou)'s scripting language. It operates over `.bdsl` files.

Version 1.2 of this extension, released in February 2024, is designed for DMK v11. It supports both the legacy BDSL1 syntax (if the script starts with `<#> bdsl1`) and the new BDSL2 syntax (by default). You should also update the syntax highlighting in settings.json (see the reference color definitions below).



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
            "variable.dmkdynamicvar": {
                "foreground": "#7daef3"
            },
            "dmkOperator": {
                "foreground": "#c0c0c0"
            },
            "dmkEnumMember": {
                "foreground": "#e5813b"
            },
            "function": {
                "foreground": "#ff87bd"
            },
            "method.deprecated": {
                "fontStyle": "strikethrough"
            },
            "variable.const": {
                "foreground": "#b5cea8"
            },
            "method.dmksm": {
                "foreground": "#7b8be6"
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
                "foreground": "#3f7ce5"
            },
            "method.dmkproperties": {
                "foreground": "#44b4ff"
            },
            "method.dmkbpy": {
                "foreground": "#9c6df5"
            },
            "method.dmkbpy.dmkatomic": {
                "foreground": "#afb4e5"
            },
            "method.dmktp4": {
                "foreground": "#c64b42"
            },
            "method.dmkbprv2": {
                "foreground": "#c64b42"
            },
            "method.dmktp3": {
                "foreground": "#ff6e42"
            },
            "method.dmktp": {
                "foreground": "#c656d5"
            },
            "method.dmkvtp": {
                "foreground": "#ed4c8f"
            },
            "method.dmkpred": {
                "foreground": "#7ade7f"
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

