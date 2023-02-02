import X from "../imgs/x.svg";
import O from "../imgs/o.svg";
const Cell = ({ index, onClick, gameBoard }) => {
  const getClass = (thing) => {
    if (thing === "x")
      return "d-" + (gameBoard[index] === 1 ? " inline" : "none");
    else return "d-" + (gameBoard[index] === -1 ? " inline" : "none");
  };
  return (
    <div className="cell" id={"cell-" + index} onClick={onClick}>
      <img className={getClass("x")} src={X} alt="" />
      <img className={getClass()} src={O} alt="" />
    </div>
  );
};

export default Cell;
