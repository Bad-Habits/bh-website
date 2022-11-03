import { useEffect, useState } from "react";
import { fetchProducts } from "../../../../redux/features/productsSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/store/hooks";
import EditEventCard from "./EditEventCard";
import { EditEventContainer } from "./styles";

const EditEvent = () => {
  const [openEvents, setOpenEvents] = useState<string[]>([]);
  const { events } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleOpen = (name: string) => {
    setOpenEvents((prev) => [...prev, name]);
  };

  return (
    <EditEventContainer>
      {events ? (
        events.map((event) => {
          const { name } = event;
          return (
            <EditEventCard
              key={name}
              event={event}
              isOpen={openEvents.includes(name)}
              handleOpen={() => handleOpen(name)}
            />
          );
        })
      ) : (
        <h3>There are no events</h3>
      )}
    </EditEventContainer>
  );
};

export default EditEvent;
