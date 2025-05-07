import { Route, Routes } from "react-router-dom";
import "@/assets/reset.scss";
import "@/assets/common.scss";
import "@/assets/font.scss";
import Home from "@/pages/Home";
import Header from "@/components/Header";
import Footer from "./components/Footer";
import FoodDetail from "./pages/FoodDetail";
import Sandwich from "./pages/menulist/sandwich";
import Wrap from "./pages/menulist/wrap";
import Salad from "./pages/menulist/salad";
import Morning from "./pages/menulist/morning";
import SmileSub from "./pages/menulist/smile-sub";
import Catering from "./pages/menulist/catering";
import AppGuide from "./pages/guide/app-guide";
import SubwayGuide from "./pages/guide/subway-guide";
import CateringGuide from "./pages/guide/catering-guide";
import FreshIngredients from "./pages/guide/fresh-ingredients";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* 메뉴소개 */}
          <Route path="/sandwich" element={<Sandwich />} />
          <Route path="/wrap" element={<Wrap />} />
          <Route path="/salad" element={<Salad />} />
          <Route path="/morning" element={<Morning />} />
          <Route path="/smile_sub" element={<SmileSub />} />
          <Route path="/catering" element={<Catering />} />

          {/* 이용방법 */}
          <Route path="/subway_guide" element={<SubwayGuide />} />
          <Route path="/catering_guide" element={<CateringGuide />} />
          <Route path="/fresh_ingredients" element={<FreshIngredients />} />
          <Route path="/app_guide" element={<AppGuide />} />

          {/* 메뉴 상세페이지 */}
          <Route path="/sandwich/food_detail" element={<FoodDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
