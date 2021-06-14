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
import { Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CodeIcon from "@material-ui/icons/Code";
import CallIcon from "@material-ui/icons/Call";
import { DoneAll } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../assest/agho_dev.jpeg";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: "1",
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appbarMenu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    width: "100%",
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
}));

export default function PersistentDrawerLeft(props) {
  const { children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: "white" }}
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
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
          <div className={classes.appbarMenu}>
            <div>
              <Link to="/">
                <div className="page-logo-div">
                  <img className="page-logo" src={logo} alt="logo" />
                </div>
                {/* <Typography variant="h5" noWrap>
                  AGHO.DEV
                </Typography> */}
              </Link>
            </div>
            <div className="appbar-element">
              <Link to="about">
                <Button id="nav-btn-about" startIcon={<AccountCircleIcon />}>
                  About Us
                </Button>
              </Link>
              <Link to="skills">
                <Button id="nav-btn-skill" startIcon={<CodeIcon />}>
                  SKills
                </Button>
              </Link>
              <Link to="work">
                <Button id="nav-btn-work" startIcon={<DoneAll />}>
                  Work
                </Button>
              </Link>
              <Link to="contact">
                <Button id="nav-btn-contact" startIcon={<CallIcon />}>
                  Let's Work
                </Button>
              </Link>
            </div>
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
              <ListItemText primary="Home" />
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <Link to="about">
              <ListItemText primary="About Me" />
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
