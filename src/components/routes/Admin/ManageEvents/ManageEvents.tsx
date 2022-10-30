import { ManageButtons } from "../styles";
import Button from "../../../elements/Button/Button";
import { useState } from "react";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";

const options = ["add", "edit"];

const ManageEvents = () => {
  const [curOption, setCurOption] = useState(options[0]);

  const handleClick = (option: string) => {
    setCurOption(option);
  };

  return (
    <>
      <ManageButtons>
        {options.map((option) => {
          return (
            <Button
              key={option}
              buttonProps={{
                disabled: option === curOption,
                onClick: () => handleClick(option),
              }}
            >
              {option}
            </Button>
          );
        })}
      </ManageButtons>

      {curOption === options[0] ? <AddEvent /> : <EditEvent />}
    </>
  );
};

export default ManageEvents;
