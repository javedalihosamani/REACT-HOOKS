import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ex1 from "./components/Ex1";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Ex2 from "./components/Ex2";
import Ex3 from "./components/Ex3";
import Ex4 from "./components/Ex4";
import Ex5 from "./components/Ex5";
import Ex6 from "./components/Ex6";
import Ex7 from "./components/Ex7";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={`/`} element={<Ex1 />} />
        <Route path={`/ex1`} element={<Ex1 />} />
        <Route path={`/ex2`} element={<Ex2 />} />
        <Route path={`/ex3`} element={<Ex3 />} />
        <Route path={`/ex4`} element={<Ex4 />} />
        <Route path={`/ex5`} element={<Ex5 />} />
        <Route path={`/ex6`} element={<Ex6 />} />
        <Route path={`/ex7`} element={<Ex7 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
