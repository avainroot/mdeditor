import codeBlock from "./codeBlock";
import inlineLink from "./inlineLink";
import prependLine from "./prependLine";
import wrapSelection from "./wrapSelection";

const editorTool = {
  selection: wrapSelection,
  prepend: prependLine,
  code: codeBlock,
  link: inlineLink,
};

export default editorTool;
