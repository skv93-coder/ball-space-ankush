import React, { useContext, useReducer } from "react";
import { increment } from "./constants";
const context = React.createContext(null);

const createXPoint = (x) => {
  return Math.max(x, 100);
};

const handleReduced = (prev, action) => {
  let { ball, square } = prev;

  // eslint-disable-next-line default-case
  switch (action.type) {
    case "LEFT":
      ball = { ...ball, x: ball.x - increment };
      break;
    case "RIGHT":
      ball = { ...ball, x: ball.x + increment };
      break;
    case "UP":
      ball = { ...ball, y: ball.y - increment };
      break;
    case "DOWN":
      ball = { ...ball, y: ball.y + increment };
      break;
  }
  return { ...prev, ball, square };
};
const initialStore = {
  ball: { x: 1, y: 1 },
  square: { x: 80, y: 10 },
};
export const useBall = () => {
  const { ball } = useContext(context);
  return ball;
};
export const useSquare = () => {
  const { square } = useContext(context);
  return square;
};
export const useDispatch = () => {
  const { dispatch } = useContext(context);
  return dispatch;
};

const { Provider } = context;
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(handleReduced, initialStore);
  return (
    <Provider
      value={{
        ball: state.ball,
        square: state.square,
        dispatch,
      }}
    >
      {children}
    </Provider>
  );
};
export default ContextProvider;