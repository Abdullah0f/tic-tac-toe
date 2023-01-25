import { checkWinner } from "./utils/functions";
import "./App.css";
import Board from "./components/board";
import { useState } from "react";

function App() {
  const X = "X";
  const O = "O";
  const [turn, setTurn] = useState(X);
  const [gameBoard, setGameBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const showElement = (element) => {
    element.style.display = "inline";
  };
  const finish = async (type) => {
    await new Promise((r) => setTimeout(r, 50));
    type === "win" ? alert(`${turn} wins!`) : alert("Draw!");
    reset();
  };
  const reset = () => {
    setGameBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setTurn(X);
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.querySelector(".x").style.display = "none";
      cell.querySelector(".o").style.display = "none";
    });
  };
  const handleClick = ({ target }) => {
    if (
      !target.classList.contains("cell") ||
      gameBoard[target.id.slice(-1) - 1] != 0
    )
      return;

    const gameBoardCopy = [...gameBoard];
    gameBoardCopy[target.id.slice(-1) - 1] = turn === X ? 1 : -1;
    setGameBoard(gameBoardCopy);

    turn === X
      ? showElement(target.querySelector(".x"))
      : showElement(target.querySelector(".o"));

    if (checkWinner(gameBoardCopy)) {
      finish("win");
    }
    if (gameBoardCopy.every((cell) => cell !== 0)) finish("draw");
    setTurn(turn === X ? O : X);
  };
  return <Board onClick={handleClick} />;
}

export default App;
