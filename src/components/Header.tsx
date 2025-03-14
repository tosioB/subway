import { Link } from "react-router-dom";
import "@/assets/header.scss";
import { navData } from "@/data/navData";

const Header = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <img src="/images/logo.png" />
        </Link>
      </h1>
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
    </header>
  );
};

export default Header;
