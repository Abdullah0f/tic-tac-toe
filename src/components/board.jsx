import Column from "./column";
import Finish from "./finish";
const Board = ({ onClick, gameBoard, gameState, label, reset }) => {
  return (
    <div className={" board" + (gameState === "finished" ? " disabled" : "")}>
      <Column indexes={[0, 3, 6]} onClick={onClick} gameBoard={gameBoard} />
      <Column indexes={[1, 4, 7]} onClick={onClick} gameBoard={gameBoard} />
      <Column indexes={[2, 5, 8]} onClick={onClick} gameBoard={gameBoard} />
      {gameState === "finished" && <Finish label={label} reset={reset} />}
    </div>
  );
};

export default Board;
