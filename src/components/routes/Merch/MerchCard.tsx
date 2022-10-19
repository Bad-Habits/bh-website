import { FC } from "react";
import { MerchItemType } from "../../../utils/types";
import Button from "../../Button/Button";
import { Footer, MerchCardContainer, Name, Price } from "./styles";

interface MerchCardProps {
  item: MerchItemType;
}

const MerchCard: FC<MerchCardProps> = ({ item }) => {
  const { name, imageUrl, price } = item;

  return (
    <MerchCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType="inverted"
        buttonProps={{
          onClick: () => console.log("add to card needs to be implemented"),
        }}
      >
        Add to card
      </Button>
    </MerchCardContainer>
  );
};

export default MerchCard;
