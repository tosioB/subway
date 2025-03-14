import { Route, Routes } from "react-router-dom";
import "@/assets/reset.scss";
import "@/assets/common.scss";
import "@/assets/font.scss";
import Home from "@/pages/Home";
import Header from "@/components/Header";
import Footer from "./components/Footer";
import Sandwich from "./pages/menulist/Sandwich";
import Unit from "./pages/menulist/Unit";
import Salad from "./pages/menulist/Salad";
import Morning from "./pages/menulist/Morning";
import SideDrink from "./pages/menulist/SideDrink";
import Catering from "./pages/menulist/Catering";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sandwich" element={<Sandwich />} />
          <Route path="/unit" element={<Unit />} />
          <Route path="/salad" element={<Salad />} />
          <Route path="/morning" element={<Morning />} />
          <Route path="/sidedrink" element={<SideDrink />} />
          <Route path="/catering" element={<Catering />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
