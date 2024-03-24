import { useEffect, useRef } from "react";

const useIntersection = (cdn, fc, time) => {
  const ref = useRef();
  useEffect(() => {
    if (cdn) {
      ref.current = setInterval(fc, time);
    } else if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
    return () => {
      if (ref.current) {
        clearInterval(ref.current);
      }
    };
  }, [cdn, fc, time]);
};

export default useIntersection;
