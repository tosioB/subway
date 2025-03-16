import { Link } from "react-router-dom";
import "@/assets/header.scss";
import { navData } from "@/data/navData";
import Logo from "./Logo";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <Logo width="202px" height="40px" />
        <nav className="gnb">
          <ul className="dp1">
            {navData.map((menu) => (
              <li key={menu.id}>
                <p className="title">{menu.title}</p>
                <div className="dp2">
                  {menu.links.map((link, idx) => (
                    <Link key={idx} to={link.path}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
