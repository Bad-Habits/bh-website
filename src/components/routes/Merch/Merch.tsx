import MerchCategory from "./MerchCategory";
import { MerchDataType } from "../../../utils/types";
import { MERCH_DATA } from "../../../utils/constants";

const merchData: MerchDataType = MERCH_DATA;

const Merch = () => {
  const titles = Object.keys(merchData);
  return (
    <>
      {titles.map((title) => (
        <MerchCategory key={title} title={title} merch={merchData[title]} />
      ))}
    </>
  );
};

export default Merch;
