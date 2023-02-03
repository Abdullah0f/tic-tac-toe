import Button from "./button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
const ButtonsList = ({ buttons, difficulty, onDifficulty }) => {
  return (
    // <div
    //   class="btn-group"
    //   role="group"
    //   aria-label="Button group with nested dropdown"
    // >
    <ButtonGroup aria-label="Basic example">
      {buttons.map((button) => (
        <Button
          key={button.name}
          label={button.label}
          onClick={button.onClick}
          theme={button.theme}
        />
      ))}
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-basic-button"
        title="Difficulty"
        onSelect={(eventKey) => onDifficulty(eventKey)}
      >
        <Dropdown.Item
          eventKey="easy"
          active={difficulty === "easy" ? true : false}
        >
          Easy
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="meduim"
          active={difficulty === "meduim" ? true : false}
        >
          Meduim
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="hard"
          active={difficulty === "hard" ? true : false}
        >
          Hard
        </Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>

    // </div>
  );
};

export default ButtonsList;
