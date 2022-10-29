import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/hooks";
import { auth } from "../../../utils/firebase";
import Button from "../../elements/Button/Button";
import { CheckoutContainer } from "./styles";

const Checkout = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      alert("User not found, please sign in or create an account");
      navigate("../sign-in");
    }
  }, [user, navigate]);

  const handleConfirmPurchase = async (e: any) => {
    try {
      const res = await fetch("/.netlify/functions/send-email");
      console.log({ res });
      const data = await res.json();

      console.log({ data });
    } catch (err) {
      console.error("Error confirming purchase:", err);
    }
  };

  return (
    <CheckoutContainer>
      <h2>Checkout</h2>
      <Button buttonProps={{ onClick: handleConfirmPurchase }}>
        Confirm Purchase
      </Button>
    </CheckoutContainer>
  );
};

export default Checkout;
