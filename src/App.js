import React from "react";
import NavBar from "./components/homepage/NavBar";
import { Switch, Route } from "react-router-dom";
import ContactUs from "../src/components/Contact us/ContactUs";
import AboutUs from "../src/components/About Us/AboutUs";
import Projects from "../src/components/Projects/Projects";
import RecentWork from "../src/components/Projects/RecentWork";
import SkillsTab from "../src/components/Skills/SkillsTab";
import Testimonial from "../src/components/Testimonies/Testimonial";
import HomePage from "../src/components/homepage/Homepage";
import "./App.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down("xs")]: {
    root: {
      padding: "0",
      margin: "0",
    },
    maxWidthLg: {
      padding: "0",
      margin: "0",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <NavBar>
        <Switch>
          <Container
            className={`${classes.root} ${classes.maxWidthLg}`}
            maxWidth="lg"
          >
            <Route exact component={ContactUs} path="/contact" />
            <Route exact component={AboutUs} path="/about" />
            <Route exact component={Projects} path="/Projects" />
            <Route exact component={RecentWork} path="/work" />
            <Route exact component={SkillsTab} path="/Skills" />
            <Route exact component={Testimonial} path="/testimonials" />
            <Route exact component={HomePage} path="/" />
            <Route exact component={HomePage} path="/404" />
          </Container>
        </Switch>
      </NavBar>
    </div>
  );
}

export default App;
