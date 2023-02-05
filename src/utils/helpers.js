import { winConditions } from "./constants";
import { X } from "./constants";
export function checkWinner(gameBoard, turn) {
  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c] &&
      (turn ? turn : true)
    )
      return gameBoard[a];
  }
  return null;
}

export function directWin(gameBoard, turn) {
  const gameBoardCopy = [...gameBoard];
  for (let i in gameBoardCopy) {
    if (gameBoardCopy[i] === 0) {
      gameBoardCopy[i] = turn === X ? 1 : -1;
      if (checkWinner(gameBoardCopy, turn)) return i;
      gameBoardCopy[i] = 0;
    }
  }
  return null;
}
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
