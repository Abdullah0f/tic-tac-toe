import Column from "./column";
import Finish from "./finish";
const Board = ({ onClick, gameBoard, gameState, reset }) => {
  return (
    <div
      className={
        " board" +
        (gameState[0] === "finished"
          ? " disabled finished"
          : gameState[0] === "waiting"
          ? " disabled "
          : "")
      }
    >
      <Column indexes={[0, 3, 6]} onClick={onClick} gameBoard={gameBoard} />
      <Column indexes={[1, 4, 7]} onClick={onClick} gameBoard={gameBoard} />
      <Column indexes={[2, 5, 8]} onClick={onClick} gameBoard={gameBoard} />
      {gameState[0] === "finished" && (
        <Finish state={gameState[1]} reset={reset} />
      )}
    </div>
  );
};

export default Board;
