import { FoodItem } from "@/types/FoodItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface FoodCardProps {
  item: FoodItem;
  isVisible: boolean;
}

const FoodCard = ({ item, isVisible }: FoodCardProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShow(true), 50); // 부드러운 등장 효과
    } else {
      setShow(false);
    }
  }, [isVisible]);

  const CardContent = (
    <div
      className="card"
      style={{
        transform: show ? "scale(1)" : "scale(0.8)",
        opacity: show ? "1" : "0",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        cursor: item.detailPage ? "pointer" : "default",
      }}
    >
      <span
        className="label"
        style={{
          backgroundColor:
            item.label === "SUBPICK"
              ? "#009223"
              : item.label === "PARTY"
              ? "#58006c"
              : item.label === "NEW"
              ? "#ffce32"
              : "transparent", // 기본값
        }}
      >
        {item.label}
      </span>
      <span className="food-img">
        <img src={item.image} alt={item.korName} />
      </span>
      <div className="food-detail">
        <p className="kor-name">{item.korName}</p>
        <p className="eng-name">{item.engName}</p>
        <p className="description" style={{ whiteSpace: "pre-line" }}>
          {item.description}
        </p>
        {item.detailPage ? <span className="more-icon"></span> : null}
      </div>
    </div>
  );

  return (
    <div className="menu-card food-card">
      {item.detailPage ? (
        <Link to="food_detail" state={item}>
          {CardContent}
        </Link>
      ) : (
        <>{CardContent}</>
      )}
    </div>
  );
};

export default FoodCard;
