import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/hooks";
import { auth } from "../../../utils/firebase";

const Checkout = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      alert("User not found, please sign in or create an account");
      navigate("../sign-in");
    }
  }, [user, navigate]);

  return <div>Checkout: Work in progress</div>;
};

export default Checkout;
