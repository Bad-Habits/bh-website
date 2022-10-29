import MerchCategory from "./MerchCategory";
import { MERCH_DATA } from "../../../utils/constants";
import { MerchContainer } from "./styles";

const merchData: any = MERCH_DATA;

const Merch = () => {
  const titles = Object.keys(merchData);
  return (
    <MerchContainer>
      {titles.map((title) => (
        <MerchCategory key={title} title={title} merch={merchData[title]} />
      ))}
    </MerchContainer>
  );
};

export default Merch;
