import { EditorSelection } from "@codemirror/state";
import type { EditorView } from "@codemirror/view";

const codeBlock = (view: EditorView, lang = "") => {
  const { state, dispatch } = view;
  const changes = state.changeByRange((range) => {
    const selected = state.sliceDoc(range.from, range.to).trim();
    const insert = selected
      ? `\`\`\`${lang}\n${selected}\n\`\`\``
      : `\`\`\`${lang}\n\n\`\`\``;

    const cursorPos = range.from + 3 + lang.length + 1;

    return {
      changes: { from: range.from, to: range.to, insert },
      range: selected
        ? EditorSelection.range(cursorPos, cursorPos + selected.length)
        : EditorSelection.cursor(cursorPos),
    };
  });
  dispatch(state.update(changes, { scrollIntoView: true, userEvent: "input" }));
  view.focus();
};

export default codeBlock;
