import { checkWinner } from "./utils/functions";
import { AiTurn } from "./utils/Ai";
import "./App.css";
import Board from "./components/board";
import { useEffect, useState } from "react";

function App() {
  const X = "X";
  const O = "O";
  const [turn, setTurn] = useState(X);
  const [gameMode, setGameMode] = useState("singleplayer");
  const [gameBoard, setGameBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  useEffect(() => {
    if (gameBoard.every((cell) => cell === 0)) return;
    if (checkWinner(gameBoard)) finish("win");
    else if (gameBoard.every((cell) => cell !== 0)) finish("draw");
    else setTurn((t) => (t === X ? O : X));
  }, [gameBoard]);

  useEffect(() => {
    if (gameMode === "singleplayer" && turn === O) {
      setGameBoard(AiTurn(gameBoard));
    }
  }, [turn]);

  const finish = async (type) => {
    await new Promise((r) => setTimeout(r, 50));
    type === "win" ? alert(`${turn} wins!`) : alert("Draw!");
    reset();
  };
  const reset = () => {
    setGameBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setTurn(X);
  };

  const handleClick = ({ target }) => {
    if (
      !target.classList.contains("cell") ||
      gameBoard[target.id.slice(-1)] !== 0
    )
      return;

    const gameBoardCopy = [...gameBoard];
    gameBoardCopy[target.id.slice(-1)] = turn === X ? 1 : -1;
    setGameBoard(gameBoardCopy);
  };
  return <Board onClick={handleClick} gameBoard={gameBoard} />;
}

export default App;
