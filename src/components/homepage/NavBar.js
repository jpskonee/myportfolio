import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { Link } from "react-router-dom";
import { Button, Switch, Grid } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CodeIcon from "@material-ui/icons/Code";
import CallIcon from "@material-ui/icons/Call";
import { DoneAll } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../assest/agho_dev.png";
import NightsStayIcon from "@material-ui/icons/NightsStay";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "100%",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0.5, 0),
    },
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  a: {
    color: "black",
    textDecoration: "none",
  },
  appbarMenu: {
    color: "white",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  appBarElement: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 3.5rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  modeIcon: {
    color: theme.palette.default,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  switchDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function PersistentDrawerLeft(props) {
  const { children, mode, setMode } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.appbarMenu}>
            <Grid container>
              <Grid item lg={3} md={3} sm={9} xs={8}>
                <Link to="/">
                  <div className="page-logo-div">
                    <img className="page-logo" src={logo} alt="logo" />
                  </div>
                  {/* <Typography variant="h5" noWrap>
                  AGHO.DEV
                </Typography> */}
                </Link>
              </Grid>
              <Grid
                item
                className={classes.appBarElement}
                lg={6}
                md={7}
                sm={1}
                xs={1}
              >
                <Link to="about">
                  <Button
                    size="small"
                    id="nav-btn-about"
                    startIcon={<AccountCircleIcon />}
                  >
                    About Us
                  </Button>
                </Link>
                <Link to="skills">
                  <Button
                    size="small"
                    id="nav-btn-skill"
                    startIcon={<CodeIcon />}
                  >
                    SKills
                  </Button>
                </Link>
                <Link to="work">
                  <Button
                    size="small"
                    id="nav-btn-work"
                    startIcon={<DoneAll />}
                  >
                    Work
                  </Button>
                </Link>
                <Button
                  href="https://wa.me/080955471452?text=Hello%20Agho%2C%20I%20want%20you%20to%20work%20on%20"
                  variant="contained"
                  color="secondary"
                  size="medium"
                  id="nav-btn-contact"
                >
                  Hire Me
                </Button>
              </Grid>
              <Grid item lg={2} md={1} sm={1} xs={1}></Grid>
              <Grid
                item
                lg={1}
                md={1}
                sm={2}
                xs={3}
                className={classes.switchDiv}
              >
                <NightsStayIcon
                  className={classes.modeIcon}
                  color="action"
                  size="small"
                />
                <Switch color="default" checked={mode} onChange={handleMode} />
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <CloseIcon /> : <CloseIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText className={classes.a} primary="Home" />
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <Link to="about">
              <ListItemText className={classes.a} primary="About Me" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <Link to="skills">
              <ListItemText primary="Skills" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DoneAll />
            </ListItemIcon>
            <Link to="work">
              <ListItemText primary="Recent Work" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CreateNewFolderIcon />
            </ListItemIcon>
            <Link to="projects">
              <ListItemText primary="Start Up Projects" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <Link to="contact">
              <ListItemText primary="Let's Work" />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <Typography variant="h6"> Social Media</Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
              <InboxIcon />
              <InboxIcon />
              <InboxIcon />
              <InboxIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
}
