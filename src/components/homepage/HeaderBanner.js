import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import profilepics from "../assest/agho.png";
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
    opacity: "0.6",
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
  },
  proImg: {
    width: "90%",
    borderRadius: "0 0 150px 0",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0",
    },
  },
  squareDots: {
    width: "9rem",
    position: "absolute",
    left: "40px",
    bottom: "40px",
    opacity: "0.5",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  slideBg: {
    width: "100%",
    padding: "15px 0",
    flexGrow: "1",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
}));

const HeaderBanner = () => {
  const classes = useStyles();

  return (
    <div
      style={{ position: "relative" }}
      className={`${classes.slideBg} glass-bg`}
    >
      <Grid container>
        <Grid item xs="12" sm="1"></Grid>
        <Grid className={classes.textPart} item xs="12" sm="5">
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
        <Grid item xs="12" sm="5">
          <div>
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
        <Grid item xs="12" sm="1"></Grid>
      </Grid>
    </div>
  );
};

export default HeaderBanner;
