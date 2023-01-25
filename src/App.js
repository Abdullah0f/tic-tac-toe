import logo from "./logo.svg";
import "./App.css";
import Board from "./components/board";
import { useState } from "react";

function App() {
  const [turn, setTurn] = useState("X");
  const [gameState, setGameState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const showElement = (element) => {
    element.style.display = "inline";
  };
  const handleClick = ({ target }) => {
    if (
      !target.classList.contains("cell") ||
      gameState[target.id.slice(-1) - 1] != 0
    )
      return;

    gameState[target.id.slice(-1) - 1] = turn === "X" ? 1 : -1;
    turn === "X"
      ? showElement(target.querySelector(".x"))
      : showElement(target.querySelector(".o"));
    setTurn(turn === "X" ? "O" : "X");
  };
  return <Board onClick={handleClick} />;
}

export default App;
