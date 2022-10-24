import { GlobalStyle, AppContainer, ContentContainer } from "./styles";
import { Route, Routes } from "react-router-dom";
import ContactUs from "../routes/ContactUs/ContactUs";
import Home from "../routes/Home/Home";
import Merch from "../routes/Merch/Merch";
import Header from "../Header/Header";
import Tickets from "../routes/Tickets/Tickets";

import SignIn from "../routes/Auth/SignIn";
import SignUp from "../routes/Auth/SignUp";
import { useEffect } from "react";
import {
  createUserDoc,
  onAuthStateChangedListener,
} from "../../utils/firebase";
import { useAppDispatch } from "../../redux/store/hooks";
import { setUserThunk } from "../../redux/features/authSlice";
import SignOut from "../routes/Auth/SignOut";
import Checkout from "../routes/Checkout/Checkout";
import Admin from "../routes/Admin/Admin";
import { fetchProducts } from "../../redux/features/productsSlice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        try {
          await createUserDoc(user);
          dispatch(setUserThunk(user));
        } catch (err) {
          console.error("Error in auth state change callback:", err);
        }
      } else dispatch(setUserThunk(null));
    });

    dispatch(fetchProducts());

    return unsubscribe;
  }, [dispatch]);

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <ContentContainer>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="merch" element={<Merch />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-out" element={<SignOut />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
