import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { BaseButton, InvertedButton } from "./styles";

interface ButtonProps extends PropsWithChildren {
  buttonType?: "base" | "inverted";
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
  children,
  buttonType = "base",
  buttonProps,
}) => {
  const CustomButton = {
    base: BaseButton,
    inverted: InvertedButton,
  }[buttonType];

  return <CustomButton {...buttonProps}>{children}</CustomButton>;
};

export default Button;
