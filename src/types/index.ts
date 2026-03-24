import type { EditorView } from "@codemirror/view";
import type { RefObject } from "react";

export interface EditorOptions {
  options?: {
    placeholder?: string;
    minHeight?: string | number;
    maxHeight?: string | number;
  };
}

export interface EditorProps extends EditorOptions {
  value: string;
  onChange: (value: string) => void;
}

export interface EditorContextProps extends EditorProps {
  viewRef: RefObject<EditorView | null>;
}
