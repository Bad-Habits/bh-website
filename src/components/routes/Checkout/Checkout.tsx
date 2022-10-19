import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/hooks";

const Checkout = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert("User not found, please sign in or create an account");
      navigate("../sign-in");
    }

    console.log("checkout userEffect running");
  }, [user, navigate]);

  return <div>Checkout: Work in progress</div>;
};

export default Checkout;
