import { FC } from "react";
import Button from "../../../elements/Button/Button";
import Form from "../../../elements/Form/Form";
import { EventPreviewContainer, TicketContainer } from "./styles";

type EditEventCardProps = {
  event: any;
  isOpen: boolean;
  handleClick: () => void;
};

const EditEventCard: FC<EditEventCardProps> = ({
  event,
  isOpen,
  handleClick,
}) => {
  const { name, location, date, tickets, isPublic } = event;

  const fields = [""];

  const handleSubmit = () => {
    console.log("needs work");
  };

  return isOpen ? (
    <Form
      header={`Edit ${name}`}
      fields={fields}
      handleSubmit={handleSubmit}
      buttonText="Save"
    />
  ) : (
    <EventPreviewContainer>
      <h3>{name}</h3>
      <Button buttonProps={{ onClick: handleClick }}>Edit</Button>
    </EventPreviewContainer>
  );
};

export default EditEventCard;

// <div>
//   <hr />
//   <h3>name: {name}</h3>
//   <h3>location: {location}</h3>
//   <h3>date: {date.toString()}</h3>

//   {Object.keys(tickets).map((ticket) => {
//     const { price, remaining, total } = tickets[ticket];
//     return (
//       <TicketContainer key={ticket}>
//         <h3>ticket type: {ticket}</h3>
//         <h4>price: {price}</h4>
//         <h4>remaining: {remaining}</h4>
//         <h4>total: {total}</h4>
//       </TicketContainer>
//     );
//   })}

//   <h3>isPublic: {isPublic}</h3>
//   <hr />
// </div>
