import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import nodeImg from "../assest/skills/node.png";
import javaImg from "../assest/skills/java.png";
import wpImg from "../assest/skills/wordpress.png";
import shopifyImg from "../assest/skills/shopify.png";
import reactImg from "../assest/skills/react-native.png";
import wixImg from "../assest/skills/wix.png";

const useStyles = makeStyles((theme) => ({
  gridRoot: {
    display: "flex",
    justifyContent: "center",
    boxShadow: "0px 0px 50px 16px lightgray",
  },
  gridImg: {
    width: "8rem",
    height: "6rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
}));

const PartnersnAffiliates = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.gridRoot}>
        <Grid item lg={2} md={4} sm={4} xs={6}>
          {" "}
          <img className={classes.gridImg} src={nodeImg} alt="logo" />
        </Grid>
        <Grid item lg={2} md={4} sm={4} xs={6}>
          {" "}
          <img className={classes.gridImg} src={javaImg} alt="logo" />
        </Grid>
        <Grid item lg={2} md={4} sm={4} xs={6}>
          {" "}
          <img className={classes.gridImg} src={wpImg} alt="logo" />
        </Grid>
        <Grid item lg={2} md={4} sm={4} xs={6}>
          {" "}
          <img className={classes.gridImg} src={wixImg} alt="logo" />
        </Grid>
        <Grid item lg={2} md={4} sm={4} xs={6}>
          {" "}
          <img className={classes.gridImg} src={shopifyImg} alt="logo" />
        </Grid>
        <Grid item lg={2} md={4} sm={4} xs={6}>
          {" "}
          <img className={classes.gridImg} src={reactImg} alt="logo" />
        </Grid>
      </Grid>
    </div>
  );
};

export default PartnersnAffiliates;
