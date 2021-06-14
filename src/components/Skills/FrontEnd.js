import React from "react";
import Grid from "@material-ui/core/Grid";
import html from "../assest/skills/html.png";
import css from "../assest/skills/css.png";
import js from "../assest/skills/js.png";
import bootstrap from "../assest/skills/bootstrap.png";
import jquery from "../assest/skills/jquery.png";
import ejs from "../assest/skills/ejs.png";
import sass from "../assest/skills/sass.png";
import tailwind from "../assest/skills/tailwind.png";
import react from "../assest/skills/react.png";
import reactNative from "../assest/skills/react-native.png";
import materialUi from "../assest/skills/material-ui.png";
import antd from "../assest/skills/antd.png";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  gridBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgSkill: {
    width: "9rem",
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
      width: "4rem",
    },
  },
  imgSkillb: {
    width: "12rem",
    margin: "0 auto",
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
      width: "6.5rem",
    },
  },
}));

const FrontEnd = () => {
  const classes = useStyle();
  return (
    <div>
      <Grid container>
        <Grid item md="3" xs="4" className={classes.gridBox}>
          <img className={classes.imgSkill} src={html} alt="Skills-icon" />
        </Grid>
        <Grid item md="3" xs="4" className={classes.gridBox}>
          <img className={classes.imgSkill} src={css} alt="Skills-icon" />
        </Grid>
        <Grid item md="3" xs="4" className={classes.gridBox}>
          <img className={classes.imgSkill} src={bootstrap} alt="Skills-icon" />
        </Grid>
        <Grid item md="3" xs="4" className={classes.gridBox}>
          <img className={classes.imgSkill} src={js} alt="Skills-icon" />
        </Grid>
        <Grid item md="3" xs="4" className={classes.gridBox}>
          <img className={classes.imgSkill} src={jquery} alt="Skills-icon" />
        </Grid>
        <Grid item md="3" xs="4" className={classes.gridBox}>
          <img className={classes.imgSkillb} src={ejs} alt="Skills-icon" />
        </Grid>
        <Grid item md="3" xs="4" className={classes.gridBox}>
          <img className={classes.imgSkill} src={sass} alt="Skills-icon" />
        </Grid>
        <Grid item md="3" xs="4" className={classes.gridBox}>
          <img className={classes.imgSkillb} src={tailwind} alt="Skills-icon" />
        </Grid>
        <Grid item md="3" xs="4" className={classes.gridBox}>
          <img className={classes.imgSkill} src={react} alt="Skills-icon" />
        </Grid>
        <Grid item md="3" xs="4" className={classes.gridBox}>
          <img
            className={classes.imgSkillb}
            src={reactNative}
            alt="Skills-icon"
          />
        </Grid>
        <Grid item md="3" xs="4" className={classes.gridBox}>
          <img
            className={classes.imgSkillb}
            src={materialUi}
            alt="Skills-icon"
          />
        </Grid>
        <Grid item md="3" xs="4" className={classes.gridBox}>
          <img className={classes.imgSkillb} src={antd} alt="Skills-icon" />
        </Grid>
      </Grid>
    </div>
  );
};

export default FrontEnd;
