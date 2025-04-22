import { navData } from "@/data/navData";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import { useEffect, useState } from "react";
import TopBtn from "./TopBtn";

type SubHeaderCategory =
  | "메뉴소개"
  | "이용방법"
  | "새소식"
  | "써브웨이"
  | "가맹점"
  | "온라인 주문";

interface SubHeaderProps {
  category: SubHeaderCategory;
  basicColor?: string;
  activeColor?: string;
}

const SubHeader = ({
  category,
  basicColor = "#999",
  activeColor = "#009223",
}: SubHeaderProps) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 165) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerData = navData.find((item) => item.title === category);
  if (!headerData) return null;

  // 스크롤 상태에 따라 basicColor 변경
  const computedBasicColor = isScrolled ? "#999" : basicColor;

  return (
    <header
      className="sub-header"
      style={{
        position: isScrolled ? "fixed" : "absolute",
        transform: isScrolled ? "translateY(-165px)" : "",
        backgroundColor: isScrolled
          ? "rgba(255,255,255,1)"
          : "rgba(255,255,255,0)",
        borderColor: isScrolled
          ? "rgba(229, 229, 229, 1)"
          : "rgba(229, 229, 229, 0.1)",
        transition: "background-color 0.3s",
      }}
    >
      <div className="container">
        <Logo
          width="110px"
          height="60px"
          style={{
            visibility: isScrolled ? "visible" : "hidden",
            opacity: isScrolled ? 1 : 0,
          }}
        />
        <ul className="dp2-list">
          {headerData.links.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={index} className={isActive ? "active" : ""}>
                <Link
                  to={item.path}
                  style={{
                    color: isActive ? activeColor : computedBasicColor,
                    borderBottom: isActive
                      ? `4px solid ${activeColor}`
                      : "none",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <TopBtn
          style={{
            visibility: isScrolled ? "visible" : "hidden",
            opacity: isScrolled ? 1 : 0,
          }}
        />
      </div>
    </header>
  );
};

export default SubHeader;
