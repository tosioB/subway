interface SubImgBannerProps {
  backgroundColor: string;
  backgroundImage: string;
}

const SubImgBanner = ({
  backgroundColor,
  backgroundImage,
}: SubImgBannerProps) => {
  return (
    <div
      className="sub-img-banner"
      style={{ backgroundColor, backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};

export default SubImgBanner;
