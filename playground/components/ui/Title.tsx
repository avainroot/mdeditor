import { useEffect, useRef, useState } from "react";

const CHAR_INTERVAL = 60;

const Title = ({ children: text }: { children: string }) => {
  const [index, setIndex] = useState(0);
  const lastTime = useRef<number>(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (index >= text.length) return;

    const tick = (time: number) => {
      if (time - lastTime.current >= CHAR_INTERVAL) {
        lastTime.current = time;
        setIndex((i) => i + 1);
      }
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [index, text.length]);

  const done = index >= text.length;

  return (
    <h1 className="text-2xl font-medium flex items-center">
      {`> ${text.slice(0, index)}`}
      <span
        className={`inline-block w-2 h-[1em] bg-(--md-color-caret) ml-1 ${done ? "animate-[ping_1s_step-end_infinite]" : ""}`}
      />
    </h1>
  );
};

export default Title;
