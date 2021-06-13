import React from "react";
import NavBar from "./components/homepage/NavBar";
import { Switch, Route } from "react-router-dom";
import ContactUs from "../src/components/Contact us/ContactUs";
import AboutUs from "../src/components/About Us/AboutUs";
import Projects from "../src/components/Projects/Projects";
import RecentWork from "../src/components/Projects/RecentWork";
import Skills from "../src/components/Skills/Skills";
import Testimonial from "../src/components/Testimonies/Testimonial";
import HomePage from "../src/components/homepage/Homepage";
import "./App.css";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <NavBar>
        <Switch>
          <Container maxWidth="lg">
            <Route exact component={ContactUs} path="/contact" />
            <Route exact component={AboutUs} path="/about" />
            <Route exact component={Projects} path="/Projects" />
            <Route exact component={RecentWork} path="/work" />
            <Route exact component={Skills} path="/Skills" />
            <Route exact component={Testimonial} path="/testimonials" />
            <Route exact component={HomePage} path="/" />
          </Container>
        </Switch>
      </NavBar>
    </div>
  );
}

export default App;
