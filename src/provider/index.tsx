import EditorContext from "@context";
import type { EditorProps } from "src/types";
import type { PropsWithChildren } from "react";

const EditorProvider = ({
  children,
  ...params
}: PropsWithChildren<EditorProps>) => {
  return (
    <EditorContext.Provider value={{ ...params }}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
