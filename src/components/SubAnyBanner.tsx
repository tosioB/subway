import { useEffect, useState } from "react";

interface SubAnyBannerProps {
  backgroundColor: string;
  backgroundImage?: string;
  title: string;
  description: string;
  etc?: string;
  image01Src?: string;
  image02Src?: string;
  image03Src?: string;
  image01Style?: ImageTransformProps;
  image02Style?: ImageTransformProps;
  image03Style?: ImageTransformProps;
}

interface ImageTransformProps {
  startX?: number;
  endX?: number;
  startY?: number;
  endY?: number;
  transition?: string;
}

const SubAnyBanner = ({
  backgroundColor,
  backgroundImage,
  title,
  description,
  etc,
  image01Src,
  image02Src,
  image03Src,
  image01Style,
  image02Style,
  image03Style,
}: SubAnyBannerProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100); // mount 후 애니메이션 트리거
    return () => clearTimeout(timer);
  }, []);

  const getTransformedStyle = (style?: ImageTransformProps) => {
    const x = visible ? style?.endX ?? 0 : style?.startX ?? 0;
    const y = visible ? style?.endY ?? 0 : style?.startY ?? 0;

    return {
      transition: style?.transition || "all 0.8s ease",
      transform: `translate(${x}px, ${y}px)`,
      opacity: visible ? 1 : 0,
    };
  };

  return (
    <div
      className="sub-any-banner"
      style={{ backgroundColor, backgroundImage: `url(${backgroundImage})` }}
    >
      <h2
        className="title"
        style={{
          transform: visible ? "translateY(0)" : "translateY(100px)",
          opacity: visible ? 1 : 0,
          transition: "all 0.4s",
        }}
      >
        {title}
      </h2>
      <div
        className="detail-box"
        style={{
          transform: visible ? "translateY(0)" : "translateY(100px)",
          opacity: visible ? 1 : 0,
          transition: "all 0.4s 0.2s",
        }}
      >
        <p className="description" style={{ whiteSpace: "pre-line" }}>
          {description}
        </p>
        <p className="etc" style={{ whiteSpace: "pre-line" }}>
          {etc}
        </p>
      </div>
      {image01Src && (
        <img
          src={image01Src}
          className="img01 img"
          style={getTransformedStyle(image01Style)}
          alt="img01"
        />
      )}
      {image02Src && (
        <img
          src={image02Src}
          className="img02 img"
          style={getTransformedStyle(image02Style)}
          alt="img02"
        />
      )}
      {image03Src && (
        <img
          src={image03Src}
          className="img03 img"
          style={getTransformedStyle(image03Style)}
          alt="img03"
        />
      )}
    </div>
  );
};

export default SubAnyBanner;
