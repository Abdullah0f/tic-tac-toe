const Button = ({ label, onClick, theme = "primary" }) => {
  return (
    <button className={"btn btn-" + theme} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
