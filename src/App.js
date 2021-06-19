import React from "react";
import NavBar from "./components/homepage/NavBar";
import { Switch, Route } from "react-router-dom";
import ContactUs from "../src/components/Contact us/ContactUs";
import AboutMe from "./components/About Me/AboutMe";
import Projects from "../src/components/Projects/Projects";
import RecentWork from "../src/components/Projects/RecentWork";
import SkillsTab from "../src/components/Skills/SkillsTab";
import Testimonial from "../src/components/Testimonies/Testimonial";
import HomePage from "../src/components/homepage/Homepage";
import "./App.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ThemeProvider, createMuiTheme, Paper } from "@material-ui/core";

import "../src/styles/scss/app.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      padding: "0",
      margin: "0.1rem",
    },
  },
}));

function App() {
  const classes = useStyles();

  const [mode, setMode] = React.useState(false);

  const theme = createMuiTheme({
    palette: {
      type: mode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <NavBar mode={mode} setMode={setMode}>
          <Container className={`${classes.root}`} maxWidth="lg">
            <Switch>
              <Route exact component={ContactUs} path="/contact" />
              <Route exact component={AboutMe} path="/about" />
              <Route exact component={Projects} path="/projects" />
              <Route exact component={RecentWork} path="/work" />
              <Route exact component={SkillsTab} path="/skills" />
              <Route exact component={Testimonial} path="/testimonials" />
              <Route exact component={HomePage} path="/" />
              <Route exact component={HomePage} path="/404" />
            </Switch>
          </Container>
        </NavBar>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
