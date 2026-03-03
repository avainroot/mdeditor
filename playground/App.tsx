import { useState } from "react";
import { MDEditor } from "@lib";
import testMd from "./assets/test.md?raw";

export default function App() {
  const [value, setValue] = useState(testMd);
  return (
    <div className="container h-screen mx-auto py-6 flex *:flex-1">
      <MDEditor value={value} onChange={setValue} />
    </div>
  );
}
