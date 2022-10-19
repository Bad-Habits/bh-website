import { CategoryContainer, Title } from "./styles";
import MerchCard from "./MerchCard";
import { MerchItemType } from "../../../utils/types";
import { FC } from "react";

type MerchCategoryProps = {
  title: string;
  merch: MerchItemType[];
};

const MerchCategory: FC<MerchCategoryProps> = ({ title, merch }) => {
  return (
    <>
      <Title>{title.toUpperCase()}</Title>
      <CategoryContainer>
        {merch &&
          merch.map((item) => <MerchCard key={item.name} item={item} />)}
      </CategoryContainer>
    </>
  );
};

export default MerchCategory;
