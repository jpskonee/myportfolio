import React from "react";
import SkillsTab from "../Skills/SkillsTab";
import HeaderBanner from "./HeaderBanner";

const homepage = () => {
  return (
    <div style={{ position: "relative" }}>
      <HeaderBanner />
      <SkillsTab />
      <h1 style={{ position: "fixed", bottom: "0.5rem", right: "4vw" }}>
        {" "}
        chat
      </h1>
    </div>
  );
};

export default homepage;
