import { markdown } from "@codemirror/lang-markdown";
import { EditorView, keymap, placeholder } from "@codemirror/view";
import { useEffect, useRef } from "react";
import useEditor from "@hooks/useEditor";
import "@fontsource-variable/geist-mono";
import styles from "./Code.module.scss";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags } from "@lezer/highlight";
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from "@codemirror/commands";

const markdownHighlight = HighlightStyle.define([
  { tag: tags.heading1, color: "#e06c75", fontWeight: "bold" },
  { tag: tags.heading2, color: "#e5c07b", fontWeight: "bold" },
  { tag: tags.heading3, color: "#e5c07b" },
  { tag: tags.strong, color: "#e5c07b", fontWeight: "bold" },
  { tag: tags.emphasis, color: "#c678dd", fontStyle: "italic" },
  { tag: tags.monospace, color: "#98c379" },
  { tag: tags.link, color: "#61afef" },
  { tag: tags.url, color: "#56b6c2" },
  { tag: tags.quote, color: "#5c6370", fontStyle: "italic" },
  // маркеры — #, >, ```, * — приглушены чтобы не мешали
  { tag: tags.processingInstruction, color: "#717377" },
  { tag: tags.punctuation, color: "#4b5263" },
]);

const Code = () => {
  const { value, onChange, viewRef, options } = useEditor();
  const parent = useRef<HTMLDivElement>(null);

  const baseTheme = EditorView.theme({
    "&": {
      width: "100%",
    },
    ".cm-scroller": {
      overflow: "auto",
      fontFamily: "inherit",
      scrollbarColor: "var(--md-scrollbar-thumb) transparent",
      scrollbarWidth: "thin",
    },
    ".cm-content": {
      caretColor: "var(--md-color-caret)",
      padding: "16px",
    },
    ".cm-line": {
      // lineHeight: "1.2",
      fontSize: "14px",
      padding: 0,
    },
    ".cm-cursor": {
      borderLeftWidth: "9px",
      borderLeftColor: "var(--md-color-caret)",
      opacity: 0.8,
    },
    "&.cm-focused": {
      outline: "none",
    },
    // ".cm-activeLine": {
    //   backgroundColor: "var(--md-editor-active-line, rgba(0,0,0,0.04))",
    // },
    ".cm-gutters": {
      backgroundColor: "transparent",
      border: "none",
      color: "var(--md-editor-gutter-color, #bbb)",
    },

    ".cm-content, .cm-gutter": { minHeight: options?.minHeight || "200px" },
  });

  useEffect(() => {
    if (!parent.current) return;

    const updateListener = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        onChange(update.state.doc.toString());
      }
    });

    const view = new EditorView({
      parent: parent.current as Element,
      doc: value,
      extensions: [
        markdown(),
        baseTheme,
        // drawSelection(),
        // highlightActiveLine(),
        history(),
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        syntaxHighlighting(markdownHighlight),
        updateListener,
        EditorView.lineWrapping,
        placeholder(options?.placeholder || "Начните вводить текст..."),
      ],
    });

    if (viewRef) viewRef.current = view;

    return () => {
      view.destroy();
      parent.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={parent} className={styles.code} />;
};

export default Code;
