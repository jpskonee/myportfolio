import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { makeStyles, Typography } from "@material-ui/core";
import profilepics from "../assest/agho1.png";
import sqauredots from "../assest/square-dots.png";
import { Grid } from "@material-ui/core";
import HireMeBtn from "../Partials/HireMeBtn";
import SocialMediaIcons from "../Partials/SocialMediaIcons";

const useStyles = makeStyles((theme) => ({
  namePart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "10rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
    },
  },
  imText: {
    fontSize: "3.5rem",
    fontFamily: "cursive",
    opacity: "0.8",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.5rem",
      marginTop: "2rem",
    },
  },
  realTypingAnim: {
    fontSize: "3.5rem",
    color: "#f50057",
    fontStyle: "cursive",
    fontWeight: "bolder",
    [theme.breakpoints.only("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
  textPart: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "2.5rem",
    },
  },
  proImgDiv: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  proImg: {
    width: "280px",
    height: "350px",
    zIndex: "5  ",
    marginLeft: "2rem",
    [theme.breakpoints.only("md")]: {
      width: "250px",
      height: "300px",
      marginRight: "5rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "120px",
      height: "150px",
    },
  },
  squareDots: {
    width: "7.5rem",
    position: "absolute",
    left: "40px",
    bottom: "3.2rem",
    opacity: "0.5",
    [theme.breakpoints.only("sm")]: {
      // display: "none",
      width: "6rem",
    },
    [theme.breakpoints.down("xs")]: {
      // display: "none",
      width: "4rem",
      position: "absolute",
      left: "6px",
      bottom: "10px",
      opacity: "0.5",
    },
  },
  smIcons: {
    position: "absolute",
    right: "1rem",
    bottom: "10rem",
    zIndex: "0",

    [theme.breakpoints.down("xs")]: {
      // display: "none",
      display: "none",
    },
  },
  root: {
    padding: "2.5rem 0",
    margin: "0.1rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      margin: "0",
    },
  },
  gridRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
    padding: "1.8rem 1.5rem 3.5rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0.5rem 0",
      margin: "0 0 1.5rem",
    },
  },
  seniorTxtPart: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      left: "0",
      bottom: "0",
      marginBottom: "3.8rem",
      marginLeft: "10.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "2rem",
    },
  },
  hireMeBtnSep: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "0.5rem",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "1.0rem",
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
      <Grid container className={classes.gridRoot}>
        <Grid className={classes.textPart} item xs={12} md={7}>
          <div className={classes.namePart}>
            <div className={classes.imText}> I'm: </div>
            <div className={classes.realTypingAnim}>
              <ReactTypingEffect
                typingDelay="500ms"
                text={[
                  "Agho Emmanuel",
                  "A Software Engr.",
                  "Agho Emmanuel",
                  "A Mobile Developer",
                  "Agho Emmanuel",
                  "A Product Designer.",
                  "Agho Emmanuel",
                  "An I.T Consultant.",
                  "Agho Emmanuel",
                  "A STEM Educator.",
                ]}
              />
            </div>
          </div>
        </Grid>
        <Grid item md={5} xs={12}>
          <div className={classes.proImgDiv}>
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
        <div>
          <div className={classes.seniorTxtPart}>
            <Typography variant="subtitle2">
              {" "}
              Senior Product and Software Developer{" "}
            </Typography>
            <Typography variant="subtitle2">
              {" "}
              Web | Mobile | Start Ups{" "}
            </Typography>
            <div className={classes.hireMeBtnSep}>
              <HireMeBtn />
            </div>
          </div>
          <div className={classes.smIcons}>
            <SocialMediaIcons />
          </div>
        </div>
        {/* <Grid className={classes.hireMeBtnMob} xs={12}>
          <HireMeBtn />
        </Grid> */}
      </Grid>
    </div>
  );
};

export default HeaderBanner;
