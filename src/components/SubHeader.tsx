import { navData } from "@/data/navData";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";

type SubHeaderCategory =
  | "메뉴소개"
  | "이용방법"
  | "새소식"
  | "써브웨이"
  | "가맹점"
  | "온라인 주문";

interface SubHeaderProps {
  category: SubHeaderCategory;
  activeColor?: string;
}

const SubHeader = ({ category, activeColor = "#009223" }: SubHeaderProps) => {
  const location = useLocation();
  const headerData = navData.find((item) => item.title === category);

  if (!headerData) return null;

  return (
    <header className="sub-header">
      <div className="container">
        <Logo width="110px" height="60px" />
        <ul className="dp2-list">
          {headerData.links.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={index} className={isActive ? "active" : ""}>
                <Link
                  to={item.path}
                  style={
                    isActive
                      ? {
                          color: activeColor,
                          borderBottom: `4px solid ${activeColor}`
                        }
                      : {}
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="top-btn">TOP</button>
      </div>
    </header>
  );
};

export default SubHeader;
