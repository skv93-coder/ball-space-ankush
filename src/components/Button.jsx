import React, { useCallback, useState } from "react";
import { useBall, useDispatch } from "../store";
import { useSpecialButton } from "../useSpecialButton";
import useIntersection from "../useIntersection";

export default function Button({ k, idx, top, left }) {
  const [isBeingPressed, setIsBeingPressed] = useState("");
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch({ type: k.toUpperCase(), payload: idx - 1 });
  }, [k, dispatch, idx]);
  const handleClickStart = useCallback((ev) => {
    setIsBeingPressed(ev);
  }, []);
  const evListener = useSpecialButton(handleClick, 1000, handleClickStart);
  const ball = useBall(idx);

  useIntersection(
    ball &&
      ball.x > left &&
      ball.x < left + 5 &&
      ball.y > top &&
      ball.y < top + 12,
    handleClick,
    1000
  );
  return (
    <>
      <button
        style={{
          background: isBeingPressed === "START" ? "gray" : "white",
          top: top + "%",
          left: left + "%",
          position: "absolute",
          width: "5%",
          height: "12%",
          textAlign: "center",
        }}
        {...evListener}
      >
        {k[0].toUpperCase()}
        {k.slice(1)}
      </button>
    </>
  );
}
