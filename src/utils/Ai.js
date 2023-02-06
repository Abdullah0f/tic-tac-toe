import { checkWinner, directWin } from "./helpers";
import { X, O, difficultiesScore } from "./constants";
export function AiTurn(gameBoard, difficulty, turn = O, difficultyScore) {
  let move;
  if (gameBoard.every((cell) => cell === 0)) move = chooseMove([0, 2, 6, 8]);
  else {
    difficultyScore = difficultyScore || difficultiesScore[difficulty];
    move = directWin(gameBoard, turn);
    if (!move) {
      if (Math.random() > difficultyScore) {
        move = randomMove(gameBoard, turn);
      } else {
        move = chooseMove(miniMax(gameBoard, turn)[1]);
      }
    }
  }
  const gameBoardCopy = [...gameBoard];
  gameBoardCopy[move] = turn === X ? 1 : -1;
  return gameBoardCopy;
}

function miniMax(gameBoard, turn) {
  const gameBoardCopy = [...gameBoard];
  if (checkWinner(gameBoardCopy) === 1) return [1];
  if (checkWinner(gameBoardCopy) === -1) return [-1];
  if (gameBoardCopy.every((cell) => cell !== 0)) return [0];
  if (turn === X) {
    let bestScore = [-99, []]; //[score, move]
    for (let i in gameBoardCopy) {
      if (gameBoardCopy[i] === 0) {
        gameBoardCopy[i] = 1;
        const score = miniMax(gameBoardCopy, O)[0];
        gameBoardCopy[i] = 0;
        if (score === bestScore[0]) bestScore[1].push(i);
        else
          bestScore =
            Math.max(score, bestScore[0]) === score ? [score, [i]] : bestScore;
      }
    }
    return bestScore;
  } else {
    let bestScore = [99, []];
    for (let i in gameBoardCopy) {
      if (gameBoardCopy[i] === 0) {
        gameBoardCopy[i] = -1;
        const score = miniMax(gameBoardCopy, X)[0];
        gameBoardCopy[i] = 0;
        if (score === bestScore[0]) bestScore[1].push(i);
        bestScore =
          Math.min(score, bestScore[0]) === score ? [score, [i]] : bestScore;
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
function chooseMove(moves) {
  return moves[Math.floor(Math.random() * moves.length)];
}
