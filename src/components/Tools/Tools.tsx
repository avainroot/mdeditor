import { Button } from "@components";
import styles from "./Tools.module.scss";
import {
  CodeIcon,
  FileCodeIcon,
  FileJsIcon,
  FileTsIcon,
  LinkIcon,
  TextBIcon,
  TextHThreeIcon,
  TextHTwoIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
} from "@phosphor-icons/react";
import useEditor from "@hooks/useEditor";
import type { EditorView } from "@codemirror/view";
import editorTool from "@utils/editor";

const Tools = () => {
  const { viewRef } = useEditor();

  const exec = (fn: (view: EditorView) => void) => {
    if (viewRef?.current) fn(viewRef.current);
  };

  return (
    <div className={styles.tools}>
      <div className={styles.group}>
        <Button onClick={() => exec((v) => editorTool.prepend(v, "## "))}>
          <TextHTwoIcon />
        </Button>
        <Button>
          <TextHThreeIcon />
        </Button>
      </div>
      <div className={styles.sep} />
      <div className={styles.group}>
        <Button onClick={() => exec((v) => editorTool.selection(v, "**"))}>
          <TextBIcon />
        </Button>
        <Button onClick={() => exec((v) => editorTool.selection(v, "*"))}>
          <TextItalicIcon />
        </Button>
        <Button onClick={() => exec((v) => editorTool.selection(v, "~~"))}>
          <TextStrikethroughIcon />
        </Button>
      </div>
      <div className={styles.sep} />
      <div className={styles.group}>
        <Button onClick={() => exec((v) => editorTool.link(v))}>
          <LinkIcon />
        </Button>
        <Button onClick={() => exec((v) => editorTool.selection(v, "`"))}>
          <CodeIcon />
        </Button>
      </div>
      <div className={styles.sep} />
      <div className={styles.group}>
        <Button onClick={() => exec((v) => editorTool.code(v))}>
          <FileCodeIcon />
        </Button>
        <Button onClick={() => exec((v) => editorTool.code(v, "typescript"))}>
          <FileTsIcon />
        </Button>
        <Button onClick={() => exec((v) => editorTool.code(v, "javascript"))}>
          <FileJsIcon />
        </Button>
      </div>
    </div>
  );
};

export default Tools;
