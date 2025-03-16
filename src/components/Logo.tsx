import { Link } from "react-router-dom";

interface LogoProps {
  width: string;
  height: string;
}

const Logo = ({ width, height }: LogoProps) => {
  return (
    <h1 className="logo">
      <Link to="/" style={{ width, height }}></Link>
    </h1>
  );
};

export default Logo;
