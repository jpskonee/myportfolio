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
}));

const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderBanner />
      {/* <SkillsTab /> */}
      <div className={classes.chatMe}>
        <img className={classes.chatMeImg} src={chatme} alt="chat me now" />
      </div>
    </div>
  );
};

export default Homepage;
