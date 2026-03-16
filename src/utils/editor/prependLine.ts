import { EditorSelection } from "@codemirror/state";
import type { EditorView } from "@codemirror/view";

const prependLine = (view: EditorView, prefix: string) => {
  const { state, dispatch } = view;
  const changes = state.changeByRange((range) => {
    const line = state.doc.lineAt(range.from);
    const lineText = line.text;

    const headingPrefix = /^#{1,6} /;
    const existingPrefix = lineText.match(headingPrefix)?.[0] ?? "";

    const from = line.from;
    const to = line.from + existingPrefix.length;

    const insert = existingPrefix === prefix ? "" : prefix;

    const delta = insert.length - existingPrefix.length;

    return {
      changes: { from, to, insert },
      range: EditorSelection.range(range.from + delta, range.to + delta),
    };
  });
  dispatch(state.update(changes, { scrollIntoView: true, userEvent: "input" }));
  view.focus();
};

export default prependLine;
