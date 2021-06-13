import React from "react";
import ReactTypingEffect from "react-typing-effect";

const homepage = () => {
  return (
    <div>
      <div style={{ fontSize: "50px", color: "aqua" }}>
        <ReactTypingEffect
          text={["Web Developer", "Web Designer", "IT Support Expert"]}
        />
      </div>
    </div>
  );
};

export default homepage;