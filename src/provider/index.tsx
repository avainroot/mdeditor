import EditorContext from "@context";
import type { EditorProps } from "src/types";
import { useRef, type PropsWithChildren } from "react";
import type { EditorView } from "@codemirror/view";

const EditorProvider = ({
  children,
  ...params
}: PropsWithChildren<EditorProps>) => {
  const viewRef = useRef<EditorView | null>(null);
  return (
    <EditorContext.Provider value={{ ...params, viewRef }}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
