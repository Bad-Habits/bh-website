import { GlobalStyle } from "./globalStyles";
import { Route, Routes } from "react-router-dom";
import ContactUs from "../routes/ContactUs/ContactUs";
import Home from "../routes/Home/Home";
import Merch from "../routes/Merch/Merch";
import Header from "../Header/Header";
import Tickets from "../routes/Tickets/Tickets";

import SignIn from "../routes/Auth/SignIn";
import SignUp from "../routes/Auth/SignUp";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="merch" element={<Merch />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
