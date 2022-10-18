import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { AuthContainer } from "./styles";

const SignIn = () => {
  const [hasAccount, setHasAccount] = useState(true);

  const handleFormChange = () => setHasAccount((prev) => !prev);

  return (
    <AuthContainer>
      {hasAccount ? (
        <SignInForm handleFormChange={handleFormChange} />
      ) : (
        <SignUpForm handleFormChange={handleFormChange} />
      )}
    </AuthContainer>
  );
};

export default SignIn;
