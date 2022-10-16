import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import { AppStyles } from "./App.styles";

function App() {
  return (
    <>
      <AppStyles />
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
