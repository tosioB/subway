interface TopBtnProps {
  style?: React.CSSProperties;
}

const TopBtn = ({ style }: TopBtnProps) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="top-btn" style={style} onClick={handleScrollToTop}>
      TOP
    </button>
  );
};

export default TopBtn;
