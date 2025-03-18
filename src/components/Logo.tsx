import { Link } from "react-router-dom";

interface LogoProps {
  width: string;
  height: string;
  style?: React.CSSProperties;
}

const Logo = ({ width, height, style }: LogoProps) => {
  return (
    <h1 className="logo" style={style}>
      <Link to="/" style={{ width, height }}></Link>
    </h1>
  );
};

export default Logo;
