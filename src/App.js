import { checkWinner } from "./utils/functions";
import { AiTurn } from "./utils/Ai";
import "./App.css";
import Board from "./components/board";
import ButtonsList from "./components/buttonsList";
import { useEffect, useState } from "react";
import WinLabel from "./components/winLabel";

function App() {
  const X = "X";
  const O = "O";
  const [turn, setTurn] = useState(X);
  const [gameMode, setGameMode] = useState("singleplayer");
  const [gameBoard, setGameBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const buttons = [
    {
      name: "mode",
      label: gameMode.substring(0, 1).toUpperCase() + gameMode.substring(1),
      onClick: changeGameMode,
    },
    { name: "reset", label: "Reset", onClick: reset, theme: "danger" },
  ];

  useEffect(() => {
    if (gameBoard.every((cell) => cell === 0)) return;
    if (checkWinner(gameBoard)) finish("win");
    else if (gameBoard.every((cell) => cell !== 0)) finish("draw");
    else setTurn((t) => (t === X ? O : X));
  }, [gameBoard]);

  useEffect(() => {
    if (gameMode === "singleplayer" && turn === O) {
      setGameBoard((g) => AiTurn(g));
    }
  }, [turn, gameMode]);

  const finish = async (type) => {
    await new Promise((r) => setTimeout(r, 50));
    type === "win" ? alert(`${turn} wins!`) : alert("Draw!");
    reset();
  };
  function reset() {
    setGameBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setTurn(X);
  }
  function changeGameMode() {
    setGameMode((g) => (g === "singleplayer" ? "multiplayer" : "singleplayer"));
    reset();
  }

  const handleClick = ({ target }) => {
    if (
      !target.classList.contains("cell") ||
      gameBoard[target.id.slice(-1)] !== 0
    )
      return;

    // setGameBoard((g) => AiTurn(g, "X"));

    const gameBoardCopy = [...gameBoard];
    gameBoardCopy[target.id.slice(-1)] = turn === X ? 1 : -1;
    setGameBoard(gameBoardCopy);
  };
  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <h2>Turn: {turn}</h2>
      {/* <WinLabel /> */}
      <Board onClick={handleClick} gameBoard={gameBoard} />
      <ButtonsList buttons={buttons} />
    </div>
  );
}

export default App;
