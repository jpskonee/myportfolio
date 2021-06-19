import React, { useContext } from "react";
// import SkillsTab from "../Skills/SkillsTab";
import HeaderBanner from "./HeaderBanner";
import chatme from "../assest/chatme.gif";
import { makeStyles } from "@material-ui/core";
import { StateContext } from "../state mgt/StateProvider";
import FixedBackground from "../Partials/FixedBackground";
import PartnersnAffiliates from "./PartnersnAffiliates";
// import AboutUs from "../About Me/AboutMe";
import AboutMe from "../About Me/AboutMe";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  chatMe: {
    position: "fixed",
    bottom: "0.5rem",
    right: "4vw",
  },
  chatMeImg: {
    width: "4.5rem",
    height: "4.5rem",
    [theme.breakpoints.down("xs")]: {
      width: "2.2rem",
      height: "2.2rem",
    },
  },
  socialLink: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

// const bgColor = "#f5f5f5";

const Homepage = () => {
  const classes = useStyles();
  const { test } = useContext(StateContext);
  console.log(test);

  return (
    <div className={classes.root}>
      <HeaderBanner />
      <div className={classes.socialLink}>
        <FixedBackground
          imgBg="https://st3.depositphotos.com/1000638/13845/i/1600/depositphotos_138452440-stock-photo-programming-code-on-a-white.jpg"
          // colorBg={`${bgColor}`}
          paddingTop="2rem"
          paddingBottom="2rem"
        >
          <div>
            <PartnersnAffiliates />
          </div>
        </FixedBackground>
      </div>
      <div className="glass-bg">
        <AboutMe />
      </div>
      <div className={classes.chatMe}>
        <a href="https://wa.link/d2xeue">
          <img className={classes.chatMeImg} src={chatme} alt="chat me now " />
        </a>
      </div>
    </div>
  );
};

export default Homepage;
