import Cell from "./cell";
const Column = ({ indexes, onClick, gameBoard }) => {
  return (
    <div className="col">
      {indexes.map((index) => (
        <Cell
          key={index}
          index={index}
          onClick={onClick}
          gameBoard={gameBoard}
        />
      ))}
    </div>
  );
};

export default Column;
