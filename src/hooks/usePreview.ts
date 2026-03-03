import { marked } from "marked";
import useEditor from "./useEditor";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import bash from "highlight.js/lib/languages/bash";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/tokyo-night-dark.css";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("xml", xml);

interface PreviewProps {
  styles: Record<string, string>;
}

const createRenderer = ({ styles }: PreviewProps) => {
  const renderer = new marked.Renderer();

  renderer.heading = ({ text, depth }) =>
    `<h${depth} class="${styles[`heading-${depth}`]}">${text}</h${depth}>`;

  renderer.paragraph = ({ text }) =>
    `<p class="${styles.paragraph}">${marked.parseInline(text)}</p>`;

  renderer.codespan = ({ text }) =>
    `<code class="${styles.codespan}">${text}</code>`;

  renderer.code = ({ text, lang }) => {
    const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";
    const highlighted =
      language === "plaintext"
        ? text
        : hljs.highlight(text, { language }).value;
    return `<pre class="${styles.code}"><code class="hljs language-${language}">${highlighted}</code></pre>`;
  };

  renderer.image = ({ href, text, title }) =>
    `<div class="${styles.image}"><img src="${href}" alt="${text}"><span>${title}</span></div>`;

  return renderer;
};

const usePreview = ({ styles }: PreviewProps) => {
  const { value } = useEditor();
  const renderer = createRenderer({ styles });
  return marked.parse(value, { renderer, gfm: true, breaks: true }) as string;
};

export default usePreview;
