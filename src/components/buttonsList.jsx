import Button from "./button";

const ButtonsList = ({ buttons }) => {
  return (
    <div class="btn-group" role="group" aria-label="Basic example">
      {buttons.map((button) => (
        <Button
          key={button.name}
          label={button.label}
          onClick={button.onClick}
          theme={button.theme}
        />
      ))}
    </div>
  );
};

export default ButtonsList;
