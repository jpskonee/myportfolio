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
import { Link } from "react-router-dom";
import { Button, Switch, Grid } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CodeIcon from "@material-ui/icons/Code";
import { DoneAll } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../assest/agho_dev.png";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import HireMeBtn from "../Partials/HireMeBtn";
import SocialMediaIcons from "../Partials/SocialMediaIcons";

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
  hireMeTogNav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem auto",
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
                    About Me
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
                <HireMeBtn />
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
              <Button variant="contaned" fullWidth="true" size="medium">
                Home
              </Button>
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <Link to="/about">
              <Button variant="contaned" fullWidth="true" size="medium">
                About Me
              </Button>
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <Link to="/skills">
              <Button variant="contaned" fullWidth="true" size="medium">
                My Skills
              </Button>
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DoneAll />
            </ListItemIcon>
            <Link to="/work">
              <Button variant="contaned" fullWidth="true" size="medium">
                Recent Works
              </Button>
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CreateNewFolderIcon />
            </ListItemIcon>
            <Link to="/projects">
              <Button variant="contaned" fullWidth="true" size="medium">
                My Projects
              </Button>
            </Link>
          </ListItem>
          <div className={classes.hireMeTogNav}>
            <HireMeBtn />
          </div>
        </List>
        <Divider />
        <List>
          <ListItem>
            <Typography variant="subtitle1"> Connect With Me</Typography>
          </ListItem>
          <SocialMediaIcons
            facebook="Facebook"
            linkedIn="LinkedIn"
            twitter="Twitter"
            gitHub="GitHub"
          />
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
