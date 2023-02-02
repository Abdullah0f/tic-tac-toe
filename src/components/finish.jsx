import Button from "./button";
const Finish = ({ state, reset }) => {
  const states = {
    X: ["X won", "danger"],
    O: ["O won", "success"],
    draw: ["Draw", "dark"],
  };
  return (
    <div className="position-absolute start-50 bottom-50 translate-middle result-label">
      <h1 className={"text-" + states[state][1]}>{states[state][0]}</h1>
      <Button
        key={"restart"}
        label={"Restart"}
        onClick={reset}
        theme={"primary"}
      />
    </div>
  );
};

export default Finish;
