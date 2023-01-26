import { checkWinner } from "./functions";
export function AiTurn(gameBoard, turn) {
  const move = miniMax(gameBoard, turn)[1];
  const gameBoardCopy = [...gameBoard];
  gameBoardCopy[move] = turn === "X" ? 1 : -1;
  return gameBoardCopy;
}

function miniMax(gameBoard, turn) {
  const gameBoardCopy = [...gameBoard];
  if (checkWinner(gameBoardCopy) === 1) return [1];
  if (checkWinner(gameBoardCopy) === -1) return [-1];
  if (gameBoardCopy.every((cell) => cell !== 0)) return [0];
  if (turn === "X") {
    let bestScore = [-10, -1];
    for (let i in gameBoardCopy) {
      if (gameBoardCopy[i] === 0) {
        gameBoardCopy[i] = 1;
        const score = miniMax(gameBoardCopy, "O")[0];
        gameBoardCopy[i] = 0;
        bestScore =
          Math.max(score, bestScore[0]) === score ? [score, i] : bestScore;
      }
    }
    return bestScore;
  } else {
    let bestScore = [10, -1];
    for (let i in gameBoardCopy) {
      if (gameBoardCopy[i] === 0) {
        gameBoardCopy[i] = -1;
        const score = miniMax(gameBoardCopy, "X")[0];
        gameBoardCopy[i] = 0;
        bestScore =
          Math.min(score, bestScore[0]) === score ? [score, i] : bestScore;
      }
    }
    return bestScore;
  }
}

console.log(miniMax([1, 0, -1, 0, -1, 0, 0, 0, 1], "X"));
