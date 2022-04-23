import React from "react";
import { Button } from "react-bootstrap";

import "./App.css";

export const App = () => {
  return (
    <div class="wrapper">
      <div id="top-nav" class="top-nav">
        <nav class="navbar navbar-expand-md navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src="./assets/logo.png" alt="" width="70px"></img>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#skills">
                    Skills
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">
                    About me
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="hero">
          <div class="container">
            <div class="row mt-5 py-3">
              {/* <!-- below md take 12 grid --> */}
              <div class="col-md-6 text-center order-md-2">
                <img src="./assets/garry.png" alt="" width="50%"></img>
              </div>

              <div class="col-md-6 pt-5 d-flex flex-column justify-content-evenly">
                <h5>Hi, I am Shibin Abraham</h5>
                <h1>Software Developer | Dented Code</h1>
                <p class="pt-5">I am passionate about Full Stack Development</p>
                {/* <!-- note!text-danger has !important rule --> */}
              </div>

              {/* <!-- text-end is bootstrap class to put everything to the right inside its container --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
