import X from "../imgs/X.png";
import O from "../imgs/O.png";
const Cell = ({ index, onClick }) => {
  return (
    <div className="cell" id={"cell-" + index} onClick={onClick}>
      <img className="x" src={X} alt="" />
      <img className="o" src={O} alt="" />
    </div>
  );
};

export default Cell;
