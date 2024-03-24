const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
export const ballDimension = { height: 5, width: screenWidth > 700 ? 1 : 4 };
export const squareDimension = {
  height: 15,
  width: screenWidth > 700 ? 5 : 15,
};
export const increment = 3;
