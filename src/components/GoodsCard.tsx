import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface GoodsCartProps {
  image: string;
  korName: string;
  engName: string;
  description: string;
  isVisible: boolean;
}

const GoodsCard = ({
  image,
  korName,
  engName,
  description,
  isVisible
}: GoodsCartProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShow(true), 50); // 부드러운 등장 효과
    } else {
      setShow(false);
    }
  }, [isVisible]);

  return (
    <div className="goods-card">
      <Link
        to="/"
        style={{
          transform: show ? "scale(1)" : "scale(0.8)",
          opacity: show ? "1" : "0",
          transition: "opacity 0.3s ease, transform 0.3s ease"
        }}
      >
        <span className="goods-img">
          <img src={image} alt={korName} />
        </span>
        <div className="goods-detail">
          <p className="kor-name">{korName}</p>
          <p className="eng-name">{engName}</p>
          <p className="description">{description}</p>
          <span className="more-icon"></span>
        </div>
      </Link>
    </div>
  );
};

export default GoodsCard;
