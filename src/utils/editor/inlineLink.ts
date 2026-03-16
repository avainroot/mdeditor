import { EditorSelection } from "@codemirror/state";
import type { EditorView } from "@codemirror/view";

const inlineLink = (view: EditorView) => {
  const { state, dispatch } = view;
  const changes = state.changeByRange((range) => {
    const selected = state.sliceDoc(range.from, range.to).trim();
    const insert = selected ? `[${selected}](url)` : `[text](url)`;
    const urlFrom = range.from + insert.indexOf("url");
    return {
      changes: { from: range.from, to: range.to, insert },
      range: EditorSelection.range(urlFrom, urlFrom + 3),
    };
  });
  dispatch(state.update(changes, { scrollIntoView: true, userEvent: "input" }));
  view.focus();
};

export default inlineLink;
