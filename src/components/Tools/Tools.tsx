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
          <TextHTwoIcon size={24} weight="bold" />
        </Button>
        <Button>
          <TextHThreeIcon size={24} weight="bold" />
        </Button>
      </div>
      <div className={styles.sep} />
      <div className={styles.group}>
        <Button onClick={() => exec((v) => editorTool.selection(v, "**"))}>
          <TextBIcon size={24} weight="bold" />
        </Button>
        <Button onClick={() => exec((v) => editorTool.selection(v, "*"))}>
          <TextItalicIcon size={24} weight="bold" />
        </Button>
        <Button onClick={() => exec((v) => editorTool.selection(v, "~~"))}>
          <TextStrikethroughIcon size={24} weight="bold" />
        </Button>
      </div>
      <div className={styles.sep} />
      <div className={styles.group}>
        <Button onClick={() => exec((v) => editorTool.link(v))}>
          <LinkIcon size={24} weight="bold" />
        </Button>
        <Button onClick={() => exec((v) => editorTool.selection(v, "`"))}>
          <CodeIcon size={24} weight="bold" />
        </Button>
      </div>
      <div className={styles.sep} />
      <div className={styles.group}>
        <Button onClick={() => exec((v) => editorTool.code(v))}>
          <FileCodeIcon size={24} weight="bold" />
        </Button>
        <Button onClick={() => exec((v) => editorTool.code(v, "typescript"))}>
          <FileTsIcon size={24} weight="bold" />
        </Button>
        <Button onClick={() => exec((v) => editorTool.code(v, "javascript"))}>
          <FileJsIcon size={24} weight="bold" />
        </Button>
      </div>
    </div>
  );
};

export default Tools;
