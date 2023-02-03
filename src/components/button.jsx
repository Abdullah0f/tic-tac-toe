import Button2 from "react-bootstrap/Button";
const Button = ({ label, onClick, theme = "primary" }) => {
  return (
    <Button2 variant={theme} onClick={onClick}>
      {label}
    </Button2>
  );
};

export default Button;
