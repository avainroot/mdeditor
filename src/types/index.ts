import type { EditorView } from "@codemirror/view";
import type { RefObject } from "react";

export interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export interface EditorContextProps extends EditorProps {
  viewRef: RefObject<EditorView | null>;
}
