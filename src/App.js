import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ex1 from "./components/Ex1";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={`/`} element={<Ex1 />} />
        <Route path={`/ex1`} element={<Ex1 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
