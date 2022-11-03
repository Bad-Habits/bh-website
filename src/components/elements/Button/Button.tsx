import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { BaseButton, InvertedButton, SpinnerContainer } from "./styles";

interface ButtonProps extends PropsWithChildren {
  buttonType?: "base" | "inverted";
  isLoading?: boolean;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
  children,
  isLoading = false,
  buttonType = "base",
  buttonProps,
}) => {
  const CustomButton = {
    base: BaseButton,
    inverted: InvertedButton,
  }[buttonType];

  return (
    <CustomButton
      {...buttonProps}
      disabled={isLoading || buttonProps?.disabled}
    >
      {isLoading ? <SpinnerContainer /> : children}
    </CustomButton>
  );
};

export default Button;
