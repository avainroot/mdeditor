import { Code, Preview, Editor } from "@components";
import type { EditorProps } from "src/types";
import "./index.css";

const MDEditor = (props: EditorProps) => {
  return (
    <Editor {...props}>
      <Code />
      <Preview />
    </Editor>
  );
};

export default MDEditor;
