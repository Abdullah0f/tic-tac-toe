export const X = "X";
export const O = "O";
export const delay = 250;
export const initalState = {
  gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  turn: X,
  gameState: ["playing"],
  label: "Reset",
  gameMode: "singleplayer",
  difficulty: 2,
};
export const difficulties = {
  0: "easy",
  1: "medium",
  2: "hard",
};
export const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export const difficultiesScore = {
  0: 0.5,
  1: 0.7,
  2: 1,
};
