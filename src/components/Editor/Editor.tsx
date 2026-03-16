import EditorProvider from "@provider";
import type { EditorProps } from "src/types";
import type { PropsWithChildren } from "react";
import styles from "./Editor.module.scss";
import { Tools } from "@components";

const Editor = ({ children, ...props }: PropsWithChildren<EditorProps>) => {
  return (
    <EditorProvider {...props}>
      <div className={styles.wrap}>
        <Tools />
        <div className={styles.editor}>{children}</div>
      </div>
    </EditorProvider>
  );
};

export default Editor;
