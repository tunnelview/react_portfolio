import React from "react";
import { Button } from "react-bootstrap";

import "./App.css";
import { TopNav } from "./components/top-nav/TopNav";
import { Hero } from "./components/hero/Hero";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { AboutMe } from "./components/about-me/AboutMe";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <div class="wrapper">
      <div id="top-nav" class="top-nav">
        <TopNav />
        {/* <Hero /> */}
      </div>
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};
