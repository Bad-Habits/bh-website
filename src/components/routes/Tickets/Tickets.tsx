import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/hooks";
import Button from "../../Button/Button";
import { TicketsContainer } from "./styles";
import Ticket from "./Ticket";

const Tickets = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleBuyTickets = () => {
    if (user) navigate("../sign-out");
    else navigate("../sign-in");
  };
  const what = useAppSelector((state) => state.products);
  console.log(what);

  return (
    <TicketsContainer>
      <h1>Tickets</h1>
      {}
      <Button buttonProps={{ onClick: handleBuyTickets }}>Buy Tickets</Button>
    </TicketsContainer>
  );
};

export default Tickets;
