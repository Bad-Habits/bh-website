import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { BaseButton, InvertedButton, SpinnerContainer } from "./styles";

interface ButtonProps extends PropsWithChildren {
  buttonType?: "base" | "inverted";
  isLoading?: boolean;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
  children,
  buttonType = "base",
  isLoading = false,
  buttonProps,
}) => {
  const CustomButton = {
    base: BaseButton,
    inverted: InvertedButton,
  }[buttonType];

  return (
    <CustomButton {...buttonProps} disabled={isLoading}>
      {isLoading ? <SpinnerContainer /> : children}
    </CustomButton>
  );
};

export default Button;
