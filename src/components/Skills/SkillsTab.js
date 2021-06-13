import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CodeIcon from "@material-ui/icons/Code";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StorageIcon from "@material-ui/icons/Storage";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ThumbDown from "@material-ui/icons/ThumbDown";
import PaletteIcon from "@material-ui/icons/Palette";
import BuildIcon from "@material-ui/icons/Build";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
  },
  rootDiv: {},
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
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Front-End" icon={<PaletteIcon />} {...a11yProps(0)} />
          <Tab label="Back-End" icon={<CodeIcon />} {...a11yProps(1)} />
          <Tab label="C.M.S" icon={<ShoppingCartIcon />} {...a11yProps(2)} />
          <Tab label="Database" icon={<StorageIcon />} {...a11yProps(3)} />
          <Tab label="Web Dev" icon={<VpnKeyIcon />} {...a11yProps(4)} />
          <Tab label="STEAM" icon={<BuildIcon />} {...a11yProps(5)} />
          <Tab label="STEAM" icon={<ThumbDown />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
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
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
};

export default SkillsTab;
