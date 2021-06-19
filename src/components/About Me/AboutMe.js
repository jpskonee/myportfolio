import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import SkillBar from "./SkillBar";
import DevicesIcon from "@material-ui/icons/Devices";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";

const useStyles = makeStyles((theme) => ({
  root: {},
  rootGrid: {
    margin: "5rem auto",
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      margin: "6rem auto 3rem",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2rem auto",
    },
  },
  yearOfExpGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "4.5rem",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      marginBottom: "0rem",
      textAlign: "center",
    },
    [theme.breakpoints.only("sm")]: {
      justifyContent: "flex-start",
      marginLeft: "5rem",
      marginBottom: "0",
    },
  },
  yearNum: {
    color: "#f50057",
    fontFamily: "cursive",
    fontSize: "8rem",
    padding: "0",
    margin: "0",
    [theme.breakpoints.only("sm")]: {
      fontSize: "6rem",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      textAlign: "center",
      fontSize: "5rem",
    },
  },
  yearText: {
    fontSize: "1.5rem",
    lineHeight: "1.2",
    width: "30px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      textAlign: "center",
      fontSize: "1.2rem",
    },
  },

  specGridText: {
    fontWeight: "bolder",
    fontSize: "1.8rem",
    marginRight: "4rem",
    marginTop: "3rem",
    marginBottom: "4rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "0rem",
    },
    [theme.breakpoints.only("sm")]: {
      position: "absolute",
      right: "0",
      top: "0",
      textAlign: "center",
      marginLeft: "15rem",
      marginTop: "4rem",
      marginRight: "3rem",
      fontSize: "1.5rem",
    },
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 2rem",
      fontSize: "1rem",
      textAlign: "center",
      marginTop: "1.5rem",
      marginBottom: "2rem",
    },
  },

  skillBarGrid: {
    margin: "3rem auto",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-between",
      margin: "0 auto",
      alignItems: "center",
      flexWrap: "wrap",
    },
  },
  skillBar: {
    [theme.breakpoints.only("sm")]: {
      display: "flex",
      justifyContent: "center",
      margin: "3rem auto",
      alignItems: "center",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      margin: "1.5rem auto",
      alignItems: "center",
      width: "100%",
    },
  },
  skilBarIcon: {
    fontSize: "3rem",
    padding: "0",
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className="glass-bg">
      <Grid container className={classes.rootGrid}>
        <Grid item md={3} sm={12} className={classes.yearOfExpGrid}>
          <div>
            <Typography className={classes.yearNum}> 5+ </Typography>
            <Typography className={classes.yearText} variant="subtitle1">
              {" "}
              Year industry Experience{" "}
            </Typography>
          </div>
        </Grid>
        <Grid item md={9} sm={12}>
          <div>
            <Typography variant="h4" className={classes.specGridText}>
              {" "}
              Product Designer and Developer; Specialised in React and
              React-Native Applications, and Start Ups.{" "}
            </Typography>
          </div>
          <div className={classes.skillBarGrid}>
            <Grid container>
              <Grid item md={4} sm={4} xs={12} className={classes.skillBar}>
                <SkillBar
                  headerText="Product Developer"
                  bgColor="#6ea1c9"
                  icon={<DeveloperBoardIcon className={classes.skilBarIcon} />}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12} className={classes.skillBar}>
                <SkillBar
                  headerText="Software Engineer"
                  bgColor="#e4bd2b"
                  icon={<DevicesIcon className={classes.skilBarIcon} />}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12} className={classes.skillBar}>
                <SkillBar
                  headerText="Mobile Developer"
                  bgColor="#3e863d"
                  icon={<DeveloperModeIcon className={classes.skilBarIcon} />}
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
