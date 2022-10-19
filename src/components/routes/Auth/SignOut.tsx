import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/hooks";
import { signOutUser } from "../../../utils/firebase";
import Button from "../../Button/Button";
import { SignOutContainer } from "./styles";

const SignOut = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("../sign-in");
  }, [user, navigate]);

  const handleContinue = () => {
    navigate("../checkout");
  };

  const handleSignOut = () => {
    signOutUser();
    navigate("../sign-in");
  };

  return (
    <SignOutContainer>
      <h4>
        Currently Signed in as:{" "}
        {user?.displayName || "Error: please return to previous page"}
      </h4>
      <Button buttonProps={{ onClick: handleContinue }}>Continue</Button>
      <Button buttonProps={{ onClick: handleSignOut }}>Sign Out</Button>
    </SignOutContainer>
  );
};

export default SignOut;
