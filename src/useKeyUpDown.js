import { useEffect, useRef } from "react";

export default function useKeyUpDown({ keyArr, fc, time }) {
  const ref = useRef();

  useEffect(() => {
    const handleKeyDown = (ev) => {
      if (keyArr.includes(ev.code)) {
        if (!ref.current) {
          ref.current = setInterval(() => {
            fc(ev.code);
          }, time);
          fc(ev.code);
        }
      }
    };
    const handleKeyUp = (ev) => {
      if (keyArr.includes(ev.code)) {
        if (ref.current) {
          clearInterval(ref.current);
        }
        ref.current = null;
      }
    };
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [fc, keyArr, time]);
}
