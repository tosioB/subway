import { Link, useLocation } from "react-router-dom";
import "@/assets/header.scss";
import { navData } from "@/data/navData";
import Logo from "./Logo";

const Header = () => {
  const location = useLocation();

  return (
    <header id="header">
      <div className="container">
        <Logo width="202px" height="40px" />
        <nav className="gnb">
          <ul className="dp1">
            {navData.map((menu) => {
              const isActiveCategory = menu.links.some(
                (link) => link.path === location.pathname
              );

              return (
                <li key={menu.id} className={isActiveCategory ? "active" : ""}>
                  <p className="title">{menu.title}</p>
                  <div className="dp2">
                    {menu.links.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.path}
                        className={
                          location.pathname === link.path ? "active" : ""
                        }
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
