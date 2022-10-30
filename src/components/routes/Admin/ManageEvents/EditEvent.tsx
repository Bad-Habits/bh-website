import { useState } from "react";
import { useAppSelector } from "../../../../redux/store/hooks";
import EditEventCard from "./EditEventCard";
import { EditEventContainer } from "./styles";

const EditEvent = () => {
  const [openEvents, setOpenEvents] = useState<string[]>([]);
  const { events } = useAppSelector((state) => state.products);

  const handleClick = (name: string) => {
    setOpenEvents((prev) => [...prev, name]);
  };

  return (
    <EditEventContainer>
      {events.map((event) => {
        const { name } = event;
        return (
          <EditEventCard
            key={name}
            event={event}
            isOpen={openEvents.includes(name)}
            handleClick={() => handleClick(name)}
          />
        );
      })}
    </EditEventContainer>
  );
};

export default EditEvent;
