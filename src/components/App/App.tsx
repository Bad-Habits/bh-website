import { GlobalStyle } from "./globalStyles";
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
import { setUser } from "../../redux/features/authSlice";
import { DocumentData, DocumentReference } from "firebase/firestore";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      console.log("auth state changed:", user);
      let userDoc: DocumentReference<DocumentData> | undefined;
      if (user) {
        userDoc = await createUserDoc(user);
      }
      dispatch(setUser(userDoc));
    });

    return unsubscribe;
  }, [dispatch]);

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
