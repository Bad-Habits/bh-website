export type Sizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "3XL";
export type Colours = "black" | "white" | "red";

export type HandleChangeType = (e: {
  target: { name: string; value: any; checked: boolean };
}) => void;
