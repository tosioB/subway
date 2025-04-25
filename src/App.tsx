import { Route, Routes } from "react-router-dom";
import "@/assets/reset.scss";
import "@/assets/common.scss";
import "@/assets/font.scss";
import Home from "@/pages/Home";
import Header from "@/components/Header";
import Footer from "./components/Footer";
import Sandwich from "./pages/menulist/Sandwich";
import Wrap from "./pages/menulist/Wrap";
import Salad from "./pages/menulist/Salad";
import Morning from "./pages/menulist/Morning";
import SmileSub from "./pages/menulist/SmileSub";
import Catering from "./pages/menulist/Catering";
import FoodDetail from "./pages/FoodDetail";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* 메뉴리스트 */}
          <Route path="/sandwich" element={<Sandwich />} />
          <Route path="/wrap" element={<Wrap />} />
          <Route path="/salad" element={<Salad />} />
          <Route path="/morning" element={<Morning />} />
          <Route path="/smile_sub" element={<SmileSub />} />
          <Route path="/catering" element={<Catering />} />

          {/* 메뉴 상세페이지 */}
          <Route path="/sandwich/food_detail" element={<FoodDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
