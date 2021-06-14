import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CodeIcon from "@material-ui/icons/Code";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PaletteIcon from "@material-ui/icons/Palette";
import Typography from "@material-ui/core/Typography";
import BuildIcon from "@material-ui/icons/Build";
import Box from "@material-ui/core/Box";

import FrontEnd from "../Skills/FrontEnd";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
  },
}));

const SkillsTab = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${classes.root}`}>
      <AppBar className="glass-bg" position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          style={{ margin: "0 auto", maxWidth: "100%" }}
        >
          <Tab label="Front-End" icon={<PaletteIcon />} {...a11yProps(0)} />
          <Tab label="Back-End" icon={<CodeIcon />} {...a11yProps(1)} />
          <Tab
            label="CMS/Database"
            icon={<ShoppingCartIcon />}
            {...a11yProps(2)}
          />
          <Tab label="Web Dev" icon={<VpnKeyIcon />} {...a11yProps(3)} />
          <Tab label="Soft Skills" icon={<BuildIcon />} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel style={{ margin: "0 auto" }} value={value} index={0}>
        <FrontEnd />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        gitem five
      </TabPanel>
    </div>
  );
};

export default SkillsTab;
