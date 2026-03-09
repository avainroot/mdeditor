import EditorProvider from "@provider";
import type { EditorProps } from "src/types";
import type { PropsWithChildren } from "react";
import styles from "./Editor.module.scss";

const Editor = ({ children, ...props }: PropsWithChildren<EditorProps>) => {
  return (
    <EditorProvider {...props}>
      <div className={styles.editor}>{children}</div>
    </EditorProvider>
  );
};

export default Editor;
