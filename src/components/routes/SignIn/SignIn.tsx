import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { SignInContainer } from "./styles";

const SignIn = () => {
  const [hasAccount, setHasAccount] = useState(true);

  const handleFormChange = () => setHasAccount((prev) => !prev);

  return (
    <SignInContainer>
      {hasAccount ? (
        <SignInForm handleFormChange={handleFormChange} />
      ) : (
        <SignUpForm handleFormChange={handleFormChange} />
      )}
    </SignInContainer>
  );
};

export default SignIn;
