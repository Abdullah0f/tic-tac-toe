import X from "../imgs/X.png";
import O from "../imgs/O.png";
const Cell = ({ index, onClick, gameBoard }) => {
  const getClass = (thing) => {
    if (thing === "x") return "x" + (gameBoard[index] === 1 ? " show" : "");
    else return "o" + (gameBoard[index] === -1 ? " show" : "");
  };
  return (
    <div className="cell" id={"cell-" + index} onClick={onClick}>
      <img className={getClass("x")} src={X} alt="" />
      <img className={getClass()} src={O} alt="" />
    </div>
  );
};

export default Cell;
