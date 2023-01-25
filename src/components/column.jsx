import Cell from "./cell";
const Column = ({ indexes, onClick }) => {
  return (
    <div className="col">
      {indexes.map((index) => (
        <Cell key={index} index={index} onClick={onClick} />
      ))}
    </div>
  );
};

export default Column;
