import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import profilepics from "../assest/agho1.png";
import sqauredots from "../assest/square-dots.png";

const useStyles = makeStyles((theme) => ({
  namePart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "2rem",
  },
  imText: {
    fontSize: "4rem",
    fontFamily: "cursive",
    opacity: "0.8",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  realTypingAnim: {
    fontSize: "3.5rem",
    color: "teal",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  textPart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "2.5rem",
    },
  },
  proImg: {
    width: "350px",
    height: "300px",
    [theme.breakpoints.down("xs")]: {
      borderRadius: "0 0 0 0px",
      width: "200px",
      height: "150px",
    },
  },
  squareDots: {
    width: "7rem",
    position: "absolute",
    left: "40px",
    bottom: "40px",
    opacity: "0.6",
    [theme.breakpoints.down("xs")]: {
      // display: "none",
      width: "3rem",
      position: "absolute",
      left: "6px",
      bottom: "10px",
      opacity: "0.5",
    },
  },
  root: {
    margin: "0.8rem",
    padding: "15px 0",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
      margin: "0",
    },
  },
  centerEvery: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2.5rem 0",
    [theme.breakpoints.down("xs")]: {
      padding: "0.5rem 0",
    },
  },
}));

const HeaderBanner = () => {
  const classes = useStyles();

  return (
    <div
      style={{ position: "relative" }}
      className={`${classes.root} glass-bg`}
    >
      <Grid container className={classes.centerEvery}>
        <Grid item md={1} xs={12} sm={1}></Grid>
        <Grid className={classes.textPart} item xs={12} md={6} sm={6}>
          <div className={classes.namePart}>
            <div className={classes.imText}> I'm a: </div>
            <div className={classes.realTypingAnim}>
              <ReactTypingEffect
                typingDelay="500ms"
                text={[
                  "Software Engineer.",
                  "Product Designer.",
                  "I.T Consultant.",
                  "STEM Educator.",
                  "Technopreneur.",
                ]}
              />
            </div>
          </div>
        </Grid>
        <Grid item md={3} xs={12} sm={4}>
          <div className={classes.centerEvery}>
            {" "}
            <img
              className={classes.proImg}
              alt="profile-pics"
              src={profilepics}
            />{" "}
            <div>
              {" "}
              <img
                className={classes.squareDots}
                alt="sqaure dots"
                src={sqauredots}
              />{" "}
            </div>
          </div>
        </Grid>
        <Grid item md={1} xs={12} sm={1}></Grid>
      </Grid>
    </div>
  );
};

export default HeaderBanner;
