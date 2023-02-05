import { checkWinner, capitalize } from "./utils/functions";
import { AiTurn } from "./utils/Ai";
import "./App.css";
import Board from "./components/board";
import ButtonsList from "./components/buttonsList";
import { useEffect, useState } from "react";
import { X, O, initalState, difficulties, delay } from "./utils/constants";
function App() {
  const [turn, setTurn] = useState(X);
  const [gameMode, setGameMode] = useState(initalState.gameMode);
  const [gameBoard, setGameBoard] = useState(initalState.gameBoard);
  const [gameState, setGameState] = useState(initalState.gameState); //[playing, finished, waiting]
  const [difficulty, setDifficulty] = useState(initalState.difficulty); //[0easy, 1medium, 2hard]
  const [history, setHistory] = useState([initalState]); //[{gameBoard, turn}]
  const buttons = [
    {
      label: capitalize(gameMode),
      onClick: changeGameMode,
    },
    {
      type: "dropList",
      items: [...history.slice(0, history.length - 1)],
      label: "History",
      theme: "success",
      onSelect: handleHistory,
    },
    {
      type: "dropList",
      items: [{ label: "Easy" }, { label: "Meduim" }, { label: "Hard" }],
      label: "Difficulty",
      onSelect: handleDifficulty,
      theme: "secondary",
      active: parseInt(difficulty),
    },
    { label: "Reset", onClick: reset, theme: "danger" },
  ];

  useEffect(() => {
    if (gameBoard.every((cell) => cell === 0)) return;
    if (gameState[1] !== "changed") {
      setHistory((h) => [...h, { label: "", gameBoard, turn, gameState }]);
    }
    if (checkWinner(gameBoard)) setGameState(["finished", turn]);
    else if (gameBoard.every((cell) => cell !== 0))
      setGameState(["finished", "draw"]);
    else {
      setTurn((t) => (t === X ? O : X));
      if (gameMode === "singleplayer")
        setGameState((x) => (x[0] === "playing" ? ["waiting"] : ["playing"]));
    }
  }, [gameBoard]);

  useEffect(() => {
    const x = async () => {
      if (gameState[0] === "waiting" && gameState[1] !== "changed") {
        await new Promise((r) => setTimeout(r, delay));
        setGameBoard((g) => AiTurn(g, difficulty));
      }
    };
    x();
  }, [gameState]);

  function reset() {
    setGameBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setTurn(X);
    setGameState(["playing"]);
    setHistory([initalState]);
  }
  function changeGameMode() {
    setGameMode((g) => (g === "singleplayer" ? "multiplayer" : "singleplayer"));
    reset();
  }
  function handleDifficulty(difficulty) {
    setDifficulty(difficulty);
    reset();
  }

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
  function handleHistory(index) {
    index = parseInt(index);
    const { gameBoard, turn, gameState } = history[index];
    setGameBoard(gameBoard.map((x) => parseInt(x)));
    setTurn(turn);
    setGameState([...gameState, "changed"]);
    setHistory((x) => x.slice(0, index + 1));
  }
  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <h2>Turn: {turn}</h2>
      <h2>Difficulty: {capitalize(difficulties[difficulty])}</h2>
      <Board
        onClick={handleClick}
        gameBoard={gameBoard}
        gameState={gameState}
        reset={reset}
      />
      <ButtonsList buttons={buttons} />
    </div>
  );
}

export default App;
