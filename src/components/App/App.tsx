import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
