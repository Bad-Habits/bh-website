import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import { TicketsContainer } from "./styles";

const Tickets = () => {
  const navigate = useNavigate();

  const handleBuyTickets = () => {
    navigate("../sign-in");
  };

  return (
    <TicketsContainer>
      Tickets
      <Button buttonProps={{ onClick: handleBuyTickets }}>Buy Tickets</Button>
    </TicketsContainer>
  );
};

export default Tickets;
