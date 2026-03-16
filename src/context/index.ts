import type { EditorContextProps } from "src/types";
import { createContext, createRef } from "react";
import type { EditorView } from "@codemirror/view";

const EditorContext = createContext<EditorContextProps>({
  value: "",
  onChange: () => {},
  viewRef: createRef<EditorView | null>(),
});

export default EditorContext;
