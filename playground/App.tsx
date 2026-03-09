import { useState } from "react";
import { MDEditor } from "@lib";
import testMd from "./assets/test.md?raw";

export default function App() {
  const [value, setValue] = useState(testMd);
  return (
    <div className="container h-screen mx-auto py-6 flex *:flex-1 px-4">
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-medium">MDEditor Playground</h1>
          <div>
            Development playground for @rootflow/mdeditor — markdown editor with
            live preview:
          </div>
        </div>
        <MDEditor value={value} onChange={setValue} />
      </div>
    </div>
  );
}
