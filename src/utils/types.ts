export type Sizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "3XL";
export type Colours = "black" | "white" | "red";

export type MerchItemType = {
  name: string;
  imageUrl: string;
  price: number;
  sizes: Sizes[];
  colours: Colours[];
};

export interface MerchDataType {
  [category: string]: MerchItemType[];
}
