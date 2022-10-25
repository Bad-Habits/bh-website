import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/hooks";
import Button from "../../elements/Button/Button";
import { TicketsContainer } from "./styles";
import Ticket from "./Ticket";

const Tickets = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { tickets } = useAppSelector((state) => state.products);
  const navigate = useNavigate();

  const handleBuyTickets = () => {
    if (user) navigate("../sign-out");
    else navigate("../sign-in");
  };

  return (
    <TicketsContainer>
      <h1>Tickets</h1>
      {tickets.map((ticket, i) => (
        <Ticket key={i} />
      ))}
      <Button buttonProps={{ onClick: handleBuyTickets }}>Buy Tickets</Button>
    </TicketsContainer>
  );
};

export default Tickets;
