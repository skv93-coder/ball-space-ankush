import { useRef } from "react";

export const useSpecialButton = (fc, time, eventPipe) => {
  const ref = useRef();
  console.log("200", 200);
  const onMouseDown = () => {
    if (!ref.current) {
      if (eventPipe) {
        eventPipe("START");
      }
      fc();
      ref.current = setInterval(fc, time);
    }
  };
  const onMouseUp = () => {
    if (ref.current >= 0) {
      clearInterval(ref.current);
      if (eventPipe) {
        eventPipe("STOP");
      }
      ref.current = null;
    }
  };
  const onTouchStart = () => {
    if (!ref.current) {
      if (eventPipe) {
        eventPipe("START");
      }
      fc();

      ref.current = setInterval(fc, time);
    }
  };
  const onTouchEnd = () => {
    if (ref.current) {
      clearInterval(ref.current);
      if (eventPipe) {
        eventPipe("STOP");
      }
      ref.current = null;
    }
  };
  const onTouchCancel = () => {
    if (ref.current) {
      clearInterval(ref.current);
      if (eventPipe) {
        eventPipe("STOP");
      }
      ref.current = null;
    }
  };
  return {
    onMouseDown,
    onMouseUp,
    onTouchStart,
    onTouchEnd,
    onTouchCancel,
  };
};
// what should happen?
// hours should be in control of task assigner?
// 