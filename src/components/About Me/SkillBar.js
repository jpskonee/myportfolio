import React from "react";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const SkillBar = (props) => {
  const { bgColor, icon, headerText } = props;

  const useStyles = makeStyles((theme) => ({
    root: {},
    skillBarGrid: {},
    skillBar: {
      width: "200px",
      height: "300px",
      padding: "6rem 0 2rem 1rem",
      background: bgColor,
      border: "1px black solid",
      "&:hover": {
        background: "gray",
        color: "white",
        transform: "translate(7px, -10px)",
        transition: "all ease 0.5s",
      },
    },
    skilBarIcon: {
      fontSize: "3rem",
      padding: "0",
    },
    skillHeaderText: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      width: "5rem",
    },
    discoreMoreTextBgDiv: {
      "&:hover": {},
    },
    discoreMoreDiv: {
      "&:hover": {},
    },
    discoreMoreText: {
      color: "black",
      "&:hover": {
        transform: "rotate(360deg)",
        transition: "all ease 0.5s",
      },
    },
  }));
  const classes = useStyles();
  return (
    <div style={{ background: "black", width: "200px", height: "300px" }}>
      <div className={classes.skillBar}>
        <IconButton>
          <div className={classes.skilBarIcon}>{icon}</div>
        </IconButton>
        <Typography className={classes.skillHeaderText}>
          {headerText}
        </Typography>
        <div className={classes.discoreMoreTextBgDiv}>
          <div className={classes.discoreMoreDiv}>
            <Typography variant="subtitle2">
              {" "}
              Discover More
              <IconButton className={classes.discoreMoreText}>
                <ArrowRightAltIcon />
              </IconButton>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
