import { Link } from "react-router-dom";

interface GoodsCartProps {
  image: string;
  korName: string;
  engName: string;
  description: string;
}

const GoodsCard = ({
  image,
  korName,
  engName,
  description
}: GoodsCartProps) => {
  return (
    <div className="goods-card">
      <Link to="/">
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
