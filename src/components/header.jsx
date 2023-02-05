import github from "../imgs/github.svg";
import { X, difficulties, link } from "../utils/constants";
import { capitalize } from "../utils/helpers";
const Header = ({ turn, difficulty }) => {
  const turnClass = "fw-bold " + (turn === X ? "text-red" : "text-green");
  const difficultyClass =
    "fw-bold " +
    (difficulty === 2
      ? "text-danger"
      : difficulty === 1
      ? "text-warning"
      : "text-green");
  return (
    <>
      <h1>
        Tic Tac Toe{" "}
        <a href={link} target="_blank">
          <img src={github}></img>
        </a>
      </h1>
      <h2>
        Turn: <span className={turnClass}>{turn}</span>
      </h2>
      <h2>
        Difficulty:{" "}
        <span className={difficultyClass}>
          {capitalize(difficulties[difficulty])}
        </span>
      </h2>
    </>
  );
};

export default Header;
