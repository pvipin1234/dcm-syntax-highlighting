# DCM Calibration Data Support

ASAM DCM [.dcm] file formattig, syntax highlighting, diagnostics, and intellisense.

## Features

* Syntax Highlighting
* Formatter
* Code Folding
* Syntax diagnostic

## Extension Settings

| Setting | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `dcm.validation.enable` | `bool` | `true` | Syntax checking and linter diagnostics enable/disable |
| `dcm.formatter.indentStyle` | `string` | `inherit` | Block indentation behavior. Options: `"inherit"` , `"spaces"`, or `"tabs"`. |
| `dcm.formatter.inlineSpacerType` | `string` | `spaces` | Space or Tab between inline parameters and strings.  Options: `"spaces"`, or `"tabs"`.|
| `dcm.formatter.indentSize` | `integer` | `4` | Number of spaces per indent level when `indentStyle` is configured to `"spaces"`. (Min: 1, Max: 8) |
| `dcm.formatter.inlineSpaceCount` | `integer` | `4` | Number of spaces between inline parameters when `inlineSpacerType` is configured to `"spaces"`. (Min: 1, Max: 8) |
| `dcm.formatter.blankLinesBetweenBlocks` | `integer` | `1` | Number of blank lines between blocks. (Min: 0) |



### Example Workspace Setup (`.vscode/settings.json`)

```json
{
    "[dcm]": {
        "editor.defaultFormatter": "dcm",
        "editor.formatOnSave": true
    },
    "editor.validation.enable": true,
    "dcm.formatter.indentStyle": "spaces",
    "dcm.formatter.inlineSpacerType": "spaces",
    "dcm.formatter.indentSize": 2,
    "dcm.formatter.inlineSpaceCount": 3,
    "dcm.formatter.blankLinesBetweenBlocks": 1

}
```

### Usage

* Command Palette: Press Ctrl + Shift + P (or Cmd + Shift + P on macOS), type "Format Document"
* Keyboard Shortcut: Press Shift + Alt + F (or Shift + Option + F on macOS).
