import type { EditorProps } from "src/types";
import { createContext } from "react";

const EditorContext = createContext<EditorProps>({
  value: "",
  onChange: () => {},
});

export default EditorContext;
