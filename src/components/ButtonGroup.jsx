import React from "react";
import Button from "./Button";

const keyboard = ["up", "right", "down", "left"];
export default function ButtonGroup({ idx }) {
  return (
    <>
      <Button k={keyboard[0]} key={keyboard[0]} top={65} left={50} idx={idx} />

      <Button k={keyboard[1]} key={keyboard[1]} left={58} top={80} idx={idx} />
      <Button k={keyboard[3]} top={80} key={keyboard[3]} left={42} idx={idx} />

      <Button k={keyboard[2]} top={88} left={50} key={keyboard[2]} idx={idx} />
    </>
  );
}
