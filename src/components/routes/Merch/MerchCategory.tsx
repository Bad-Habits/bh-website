import { CategoryContainer, MerchCategoryContainer, Title } from "./styles";
import MerchCard from "./MerchCard";

import { FC } from "react";

type MerchCategoryProps = {
  title: string;
  merch: any[];
};

const MerchCategory: FC<MerchCategoryProps> = ({ title, merch }) => {
  return (
    <MerchCategoryContainer>
      <Title>{title.toUpperCase()}</Title>
      <CategoryContainer>
        {merch &&
          merch.map((item) => <MerchCard key={item.name} item={item} />)}
      </CategoryContainer>
    </MerchCategoryContainer>
  );
};

export default MerchCategory;
