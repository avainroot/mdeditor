import EditorContext from "@context";
import { useContext } from "react";

const useEditor = () => {
  return useContext(EditorContext);
};

export default useEditor;
