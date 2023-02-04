import Button from "./button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropList from "./dropList";
const ButtonsList = ({ buttons }) => {
  return (
    <ButtonGroup aria-label="Basic example">
      {buttons.map((button) =>
        button.type === "dropList" ? (
          <DropList
            items={button.items}
            label={button.label}
            onSelect={button.onSelect}
            theme={button.theme}
            active={button.active}
          />
        ) : (
          <Button
            key={button.name}
            label={button.label}
            onClick={button.onClick}
            theme={button.theme}
          />
        )
      )}
    </ButtonGroup>

    // </div>
  );
};

export default ButtonsList;
