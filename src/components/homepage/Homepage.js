import React from "react";
// import SkillsTab from "../Skills/SkillsTab";
import HeaderBanner from "./HeaderBanner";
import chatme from "../assest/chatme.gif";
import { makeStyles } from "@material-ui/core";

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
      width: "2.5rem",
      height: "2.5rem",
    },
  },
  butterflyDiv: {
    position: "absolute",
    top: "0px",
  },
}));

const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderBanner />
      {/* <SkillsTab /> */}
      <div className={classes.chatMe}>
        <a href="https://wa.me/080955471452?text=Hello%20Agho%2C%20I%20want%20you%20to%20work%20on%20">
          <img className={classes.chatMeImg} src={chatme} alt="chat me now" />
        </a>
      </div>
      <canvas id="nokey" width="800" height="800" className={`butterflyDiv`}>
        <img
          className={`butterfly1`}
          src="https://i.pinimg.com/originals/86/41/de/8641ded64b9748f5be597bdf060ddea2.gif"
          alt="butterfly"
        />
      </canvas>
    </div>
  );
};

export default Homepage;
