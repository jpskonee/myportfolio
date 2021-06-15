import React, { useContext } from "react";
// import SkillsTab from "../Skills/SkillsTab";
import HeaderBanner from "./HeaderBanner";
import chatme from "../assest/chatme.gif";
import { makeStyles } from "@material-ui/core";
import { StateContext } from "../state mgt/StateProvider";

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

  const { test } = useContext(StateContext);
  

  return (
    <div className={classes.root}>
      <HeaderBanner />
      {/* <SkillsTab /> */}
      <div className={classes.chatMe}>
        <a href="https://wa.link/d2xeue">
          <img className={classes.chatMeImg} src={chatme} alt="chat me now " />
        </a>
      </div>
    </div>
  );
};

export default Homepage;
