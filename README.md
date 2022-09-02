# DMK Scripting Language Extension

This is a language extension for [Danmokou](https://github.com/Bagoum/danmokou)'s scripting language.

This extension provides the following features:

- Syntax highlighting
- Type-sensitive autocomplete
- Method signature helpers
- Method documentation on hover
- Live error detection
- Warnings 



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



 The source code for this project is on Github at [Bagoum/DMKLanguageServerVSCode](https://github.com/Bagoum/DMKLanguageClientVSCode). 

This project can be packaged by running `vsce package`, and then installed as a VSCode extension.