import { FC } from "react";
import Button from "../../elements/Button/Button";
import { Footer, MerchCardContainer, Name, Price } from "./styles";

interface MerchCardProps {
  item: any;
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
        Add to cart
      </Button>
    </MerchCardContainer>
  );
};

export default MerchCard;
