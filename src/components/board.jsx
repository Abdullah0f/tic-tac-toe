import X from "../imgs/X.png";
import O from "../imgs/O.png";
const Board = () => {
  return (
    <div className="board">
      <div className="col">
        <div className="cell cell-1">
          <img className="x" src={X} alt="" />
          <img className="o" src={O} alt="" />
        </div>
        <div className="cell cell-2">
          <img className="x" src={X} alt="" />
          <img className="o" src={O} alt="" />
        </div>
        <div className="cell cell-3">
          <img className="x" src={X} alt="" />
          <img className="o" src={O} alt="" />
        </div>
      </div>
      <div className="col">
        <div className="cell cell-4">
          <img className="x" src={X} alt="" />
          <img className="o" src={O} alt="" />
        </div>
        <div className="cell cell-5">
          <img className="x" src={X} alt="" />
          <img className="o" src={O} alt="" />
        </div>
        <div className="cell cell-6">
          <img className="x" src={X} alt="" />
          <img className="o" src={O} alt="" />
        </div>
      </div>
      <div className="col">
        <div className="cell cell-7">
          <img className="x" src={X} alt="" />
          <img className="o" src={O} alt="" />
        </div>
        <div className="cell cell-8">
          <img className="x" src={X} alt="" />
          <img className="o" src={O} alt="" />
        </div>
        <div className="cell cell-9">
          <img className="x" src={X} alt="" />
          <img className="o" src={O} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Board;
