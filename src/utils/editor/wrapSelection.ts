import type { EditorView } from "@codemirror/view";
import { EditorSelection } from "@codemirror/state";

const wrapSelection = (view: EditorView, marker: string) => {
  const { state, dispatch } = view;
  const changes = state.changeByRange((range) => {
    const selected = state.sliceDoc(range.from, range.to);

    const trimmed = selected.trim();
    const leadingSpaces = selected.length - selected.trimStart().length;
    const trailingSpaces = selected.length - selected.trimEnd().length;

    const innerFrom = range.from + leadingSpaces;
    const innerTo = range.to - trailingSpaces;

    const before = state.sliceDoc(innerFrom - marker.length, innerFrom);
    const after = state.sliceDoc(innerTo, innerTo + marker.length);
    if (before === marker && after === marker) {
      return {
        changes: [
          { from: innerFrom - marker.length, to: innerFrom, insert: "" },
          { from: innerTo, to: innerTo + marker.length, insert: "" },
        ],
        range: EditorSelection.range(
          range.from - marker.length,
          range.to - marker.length - (trailingSpaces > 0 ? marker.length : 0),
        ),
      };
    }

    const insert = `${marker}${trimmed}${marker}`;
    // пробелы остаются снаружи тега
    const delta = marker.length;

    return {
      changes: { from: innerFrom, to: innerTo, insert },
      range: EditorSelection.range(
        innerFrom + delta,
        innerFrom + delta + trimmed.length,
      ),
    };
  });
  dispatch(state.update(changes, { scrollIntoView: true, userEvent: "input" }));
  view.focus();
};

export default wrapSelection;
