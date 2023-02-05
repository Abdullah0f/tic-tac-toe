import { checkWinner, directWin } from "./functions";
import { X, O, difficultiesScore } from "./constants";
export function AiTurn(gameBoard, difficulty, turn = O) {
  let move;
  move = directWin(gameBoard, turn);
  if (!move) {
    if (Math.random() > difficultiesScore[difficulty]) {
      move = randomMove(gameBoard, turn);
    } else {
      move = miniMax(gameBoard, turn)[1];
    }
  }
  const gameBoardCopy = [...gameBoard];
  gameBoardCopy[move] = turn === X ? 1 : -1;
  return gameBoardCopy;
}

function miniMax(gameBoard, turn, alpha = -99, beta = 99) {
  const gameBoardCopy = [...gameBoard];
  if (checkWinner(gameBoardCopy) === 1) return [1];
  if (checkWinner(gameBoardCopy) === -1) return [-1];
  if (gameBoardCopy.every((cell) => cell !== 0)) return [0];
  if (turn === X) {
    let bestScore = [-99, null]; //[score, move]
    for (let i in gameBoardCopy) {
      if (gameBoardCopy[i] === 0) {
        gameBoardCopy[i] = 1;
        const score = miniMax(gameBoardCopy, O, alpha, beta)[0];
        gameBoardCopy[i] = 0;
        bestScore =
          Math.max(score, bestScore[0]) === score ? [score, i] : bestScore;
        alpha = Math.max(alpha, score[0]);
        if (beta <= alpha) break;
      }
    }
    return bestScore;
  } else {
    let bestScore = [99, null];
    for (let i in gameBoardCopy) {
      if (gameBoardCopy[i] === 0) {
        gameBoardCopy[i] = -1;
        const score = miniMax(gameBoardCopy, X, alpha, beta)[0];
        gameBoardCopy[i] = 0;
        bestScore =
          Math.min(score, bestScore[0]) === score ? [score, i] : bestScore;
        beta = Math.min(beta, score[0]);
        if (beta <= alpha) break;
      }
    }
    return bestScore;
  }
}
function randomMove(gameBoard) {
  const moves = [];
  const gameBoardCopy = [...gameBoard];
  for (let i in gameBoardCopy) if (gameBoardCopy[i] === 0) moves.push(i);

  return moves[Math.floor(Math.random() * moves.length)];
}
