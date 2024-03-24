import React, { useCallback, useState } from "react";
import { useBall, useDispatch } from "../store";
import { useSpecialButton } from "../useSpecialButton";
import useIntersection from "../useIntersection";

export default function Button({ k, idx, top, left }) {
  const [isBeingPressed, setIsBeingPressed] = useState("");
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    console.log("k", k);
    dispatch({ type: k.toUpperCase(), payload: idx - 1 });
  }, [k, dispatch, idx]);
  const handleClickStart = useCallback((ev) => {
    setIsBeingPressed(ev);
  }, []);
  const evListener = useSpecialButton(handleClick, 1000, handleClickStart);
  const ball = useBall(idx);
  console.log(
    "qwerty"
    // ball,
    // left,
    // top,
    // ball.x >= left,
    // ball.x <= left + 5,
    // ball.y >= top,
    // ball.y <= top + 5
  );
  useIntersection(
    ball &&
      ball.x >= left &&
      ball.x <= left + 5 &&
      ball.y >= top &&
      ball.y <= top + 12,
    handleClick,
    1000
  );
  return (
    <>
      <button
        style={{
          background: isBeingPressed === "START" ? "gray" : "white",
          // padding: "1% 3%",
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
        {k.slice(1)},{ball && ball.x},{ball && ball.y}
      </button>
    </>
  );
}
