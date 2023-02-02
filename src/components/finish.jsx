import Button from "./button";
const Finish = ({ label, reset }) => {
  return (
    <div className="position-absolute start-50 bottom-50 translate-middle ">
      <h1 className="text-danger ">{label}</h1>
      <Button
        key={"restart"}
        label={"Restart"}
        onClick={reset}
        theme={"danger"}
      />
    </div>
  );
};

export default Finish;
