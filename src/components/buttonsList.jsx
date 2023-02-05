import Button from "./button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropList from "./dropList";
const ButtonsList = ({ buttons }) => {
  return (
    <div className="button-group mt-2">
      <ButtonGroup aria-label="Button-group">
        {buttons.map((button) =>
          button.type === "dropList" ? (
            <DropList
              key={button.label}
              items={button.items}
              label={button.label}
              onSelect={button.onSelect}
              theme={button.theme}
              active={button.active}
            />
          ) : (
            <Button
              key={button.label}
              label={button.label}
              onClick={button.onClick}
              theme={button.theme}
            />
          )
        )}
      </ButtonGroup>
    </div>
  );
};

export default ButtonsList;
