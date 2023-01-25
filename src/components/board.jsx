import Column from "./column";
const Board = ({ onClick, gameBoard }) => {
  return (
    <div className="board">
      <Column indexes={[0, 3, 6]} onClick={onClick} gameBoard={gameBoard} />
      <Column indexes={[1, 4, 7]} onClick={onClick} gameBoard={gameBoard} />
      <Column indexes={[2, 5, 8]} onClick={onClick} gameBoard={gameBoard} />
    </div>
  );
};

export default Board;
