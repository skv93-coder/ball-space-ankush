import React, { useContext, useReducer } from "react";
import { increment } from "./constants";
const context = React.createContext(null);

const handleReduced = (prev, action) => {
  let { ball, square } = prev;
  ball = [...ball];
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "LEFT":
      ball[action.payload] = {
        ...ball[action.payload],
        x: Math.max(ball[action.payload].x - increment, 0),
      };
      break;
    case "RIGHT":
      ball[action.payload] = {
        ...ball[action.payload],
        x: Math.min(100, ball[action.payload].x + increment),
      };
      break;
    case "UP":
      ball[action.payload] = {
        ...ball[action.payload],
        y: Math.max(0, ball[action.payload].y - increment),
      };
      break;
    case "DOWN":
      ball[action.payload] = {
        ...ball[action.payload],
        y: Math.min(100, ball[action.payload].y + increment),
      };
      break;
  }
  return { ...prev, ball, square };
};
const initialStore = {
  ball: [
    { x: 1, y: 1 },
    { x: 1, y: 1 },
    { x: 1, y: 1 },
  ],
  square: { x: 80, y: 10 },
};
export const useBall = (idx) => {
  const { ball } = useContext(context);
  if (Number.isInteger(idx)) {
    return ball[idx];
  }
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
