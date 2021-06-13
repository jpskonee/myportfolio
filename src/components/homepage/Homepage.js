import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import profilepics from "../assest/agho.png";

const useStyles = makeStyles({
  namePart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "2rem",
  },
  imText: {
    fontSize: "1.5rem",
    fontFamily: "cursive",
  },
  realTypingAnim: {
    fontSize: "2.5rem",
    color: "teal",
  },
  textPart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  proImg: {
    width: "90%",
  },
  slideBg: {
    background: "rgba( 255, 255, 255, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 0.0px )",
    webkitBackdropFilter: "blur( 0.0px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    width: "100%",
    padding: "50px 0",
  },
});

const Homepage = () => {
  const classes = useStyles();

  return (
    <div class={classes.slideBg}>
      <Grid container>
        <Grid item xs="12" sm="1"></Grid>
        <Grid className={classes.textPart} item xs="12" sm="5">
          <div className={classes.namePart}>
            <div className={classes.imText}> I'm a: </div>
            <div className={classes.realTypingAnim}>
              <ReactTypingEffect
                typingDelay={`1500ms`}
                text={[
                  "Software Engineer",
                  "Product Designer",
                  "I.T Consultant",
                  "STEM Educator",
                  "Technopreneur",
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
          </div>
        </Grid>
        <Grid item xs="12" sm="1"></Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
