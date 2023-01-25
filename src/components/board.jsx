import Column from "./column";
const Board = ({ onClick }) => {
  return (
    <div className="board">
      <Column indexes={[1, 4, 7]} onClick={onClick} />
      <Column indexes={[2, 5, 8]} onClick={onClick} />
      <Column indexes={[3, 6, 9]} onClick={onClick} />
    </div>
  );
};

export default Board;
