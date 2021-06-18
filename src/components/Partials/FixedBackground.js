import React from "react";

const FixedBackground = (props) => {
  const { children, paddingTop, paddingBottom, colorBg, imgBg } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${imgBg})`,
        background: `${colorBg}`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          paddingTop: `${paddingTop}`,
          paddingBottom: `${paddingBottom}`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FixedBackground;
