import { ButtonGroup } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const DropList = ({ items, label, onSelect, active, theme = "primary" }) => {
  return (
    <DropdownButton
      as={ButtonGroup}
      id={label}
      title={label}
      onSelect={(eventKey) => onSelect(eventKey)}
      variant={theme}
    >
      {items.map((item, index) => (
        <Dropdown.Item key={index} eventKey={index} active={active === index}>
          {item.label || index + " " + item.turn}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropList;
