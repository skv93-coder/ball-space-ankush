import React, { useCallback, useState } from "react";
import { useDispatch } from "../store";
import { useSpecialButton } from "../useSpecialButton";

export default function Button({ k }) {
  const [isBeingPressed, setIsBeingPressed] = useState("");
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch({ type: k.toUpperCase() });
  }, [k, dispatch]);
  const handleClickStart = useCallback((ev) => {
    setIsBeingPressed(ev);
  }, []);
  const evListener = useSpecialButton(handleClick, 1000, handleClickStart);
  return (
    <button
      style={{
        background: isBeingPressed === "START" ? "gray" : "white",
        padding: "8px 16px",
      }}
      {...evListener}
    >
      {k[0].toUpperCase()}{k.slice(1)}
    </button>
  );
}
