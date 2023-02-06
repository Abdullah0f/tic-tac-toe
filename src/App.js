import { useEffect, useState } from "react";
import Header from "./components/header";
import Board from "./components/board";
import ButtonsList from "./components/buttonsList";
import { checkWinner, capitalize } from "./utils/helpers";
import { AiTurn } from "./utils/Ai";
import { X, O, initalState, delay } from "./utils/constants";
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
      items: [{ label: "Easy" }, { label: "Meduim" }, { label: "Hard" }],
      label: "Difficulty",
      onSelect: handleDifficulty,
      theme: "secondary",
      active: parseInt(difficulty),
    },
    { label: "Reset", onClick: reset, theme: "danger" },
  ];
  const buttons2 = [
    { label: "Undo", onClick: undo, theme: "warning" },
    { label: "Perfect Move", onClick: perfectMove, theme: "success" },
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
      else setGameState(["playing"]);
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
  function undo() {
    if (history.length === 1) return;
    if (history.length === 2) reset();
    if (gameState[0] === "waiting") return;
    gameMode === "singleplayer"
      ? handleHistory(history.length - 3)
      : handleHistory(history.length - 2);
  }
  function perfectMove() {
    if (gameState[0] === "waiting" || gameState[0] === "finished") return;
    setGameBoard((g) => AiTurn(g, 2, turn));
  }

  function changeGameMode() {
    setGameMode((g) => (g === "singleplayer" ? "multiplayer" : "singleplayer"));
    reset();
  }
  function handleDifficulty(difficulty) {
    setDifficulty(parseInt(difficulty));
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
      <Header turn={turn} difficulty={difficulty} />
      <Board
        onClick={handleClick}
        gameBoard={gameBoard}
        gameState={gameState}
        reset={reset}
      />
      <ButtonsList buttons={buttons2} />
      <ButtonsList buttons={buttons} />
    </div>
  );
}

export default App;
