import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import SkillBar from "./SkillBar";
import DevicesIcon from "@material-ui/icons/Devices";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";

const useStyles = makeStyles((theme) => ({
  root: {},
  rootGrid: {
    margin: "5rem auto",
  },
  skillBarGrid: {
    margin: "3rem auto",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      margin: "0 auto",
      alignItems: "center",
    },
  },
  skillBar: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      margin: "1rem auto",
      alignItems: "center",
      width: "100%",
    },
  },
  skilBarIcon: {
    fontSize: "3rem",
    padding: "0",
  },
}));

const SkillBarGrid = () => {
  const classes = useStyles();
  return (
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
  );
};

export default SkillBarGrid;
