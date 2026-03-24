# @rootflow/mdeditor

A minimal markdown text editor for simple content editing. Built with CodeMirror 6 and React.

## Technologies

- [CodeMirror 6](https://codemirror.net/) — editor core
- [marked](https://marked.js.org/) — markdown to HTML rendering
- [highlight.js](https://highlightjs.org/) — code syntax highlighting in preview
- [Phosphor Icons](https://phosphoricons.com/) — toolbar icons

## Installation

```bash
npm install @rootflow/mdeditor
# or
pnpm add @rootflow/mdeditor
```

Requires React 18 or 19.

## Usage

```tsx
import { useState } from "react";
import { MDEditor } from "@rootflow/mdeditor";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <MDEditor
      value={value}
      onChange={setValue}
      options={{
        placeholder: "Start typing...",
        minHeight: 300,
      }}
    />
  );
}
```

## Props

| Prop       | Type                              | Required | Description                     |
| ---------- | --------------------------------- | -------- | ------------------------------- |
| `value`    | `string`                          | ✓        | Markdown content                |
| `onChange` | `(value: string) => void`         | ✓        | Called on every change          |
| `options`  | [`EditorOptions`](#editoroptions) | ✗        | Additional editor configuration |

## EditorOptions

| Option        | Type               | Default | Description                           |
| ------------- | ------------------ | ------- | ------------------------------------- |
| `placeholder` | `string`           | `""`    | Placeholder text when editor is empty |
| `minHeight`   | `string \| number` | `200px` | Minimum height of the editor          |
| `maxHeight`   | `string \| number` | `480px` | Maximum height of the editor          |

## License

MIT
