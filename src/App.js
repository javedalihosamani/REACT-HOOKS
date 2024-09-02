import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ex1 from "./components/Ex1";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Ex2 from "./components/Ex2";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={`/`} element={<Ex1 />} />
        <Route path={`/ex1`} element={<Ex1 />} />
        <Route path={`/ex2`} element={<Ex2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
