import React from "react";
import proj from "../../assets/logo1.png";
import { Row, Col, Container } from "react-bootstrap";

export const Projects = () => {
  return (
    <Container id="projects" class="project py-5">
      <div class="sec-title fs-1 fw-bolder text-center m-auto mt-5">
        Project
      </div>

      <div class="proj-content">
        <div class="container mt-5">
          <Row class="mt-5">
            <Col md="6">
              <img
                src={proj}
                alt=""
                width="100%"
                class="img-fluid img-thumbnail"
              />
            </Col>
            <Col md="6" class=" mt-5 mt-md-0">
              <h2>My Portfolio</h2>
              <div class="links fs-3">
                <a href="_blank">
                  <i class="fab fa-github"></i>
                </a>{" "}
                <a href="_blank">
                  <i class="fab fa-chrome"></i>
                </a>
              </div>
              <p class="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur id amet soluta tenetur voluptatibus sint animi! Dolore,
                sint facilis. Voluptates iusto a culpa, nemo saepe ipsa nulla
                architecto modi dolorum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                aut perferendis architecto debitis mollitia adipisci.
              </p>
            </Col>
          </Row>

          <Row class="row mt-5">
            <Col md="6">
              <img
                src={proj}
                alt=""
                width="100%"
                class="img-fluid img-thumbnail"
              />
            </Col>
            <Col md="6" class=" mt-5 mt-md-0">
              <h2>My Portfolio</h2>
              <div class="links fs-3">
                <a href="_blank">
                  <i class="fab fa-github"></i>
                </a>{" "}
                <a href="_blank">
                  <i class="fab fa-chrome"></i>
                </a>
              </div>
              <p class="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur id amet soluta tenetur voluptatibus sint animi! Dolore,
                sint facilis. Voluptates iusto a culpa, nemo saepe ipsa nulla
                architecto modi dolorum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                aut perferendis architecto debitis mollitia adipisci.
              </p>
            </Col>
          </Row>

          <Row class="row mt-5">
            <Col md="6">
              <img
                src={proj}
                alt=""
                width="100%"
                class="img-fluid img-thumbnail"
              />
            </Col>
            <Col md="6" class="mt-5 mt-md-0">
              <h2>My Portfolio</h2>
              <div class="links fs-3">
                <a href="_blank">
                  <i class="fab fa-github"></i>
                </a>{" "}
                <a href="_blank">
                  <i class="fab fa-chrome"></i>
                </a>
              </div>
              <p class="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur id amet soluta tenetur voluptatibus sint animi! Dolore,
                sint facilis. Voluptates iusto a culpa, nemo saepe ipsa nulla
                architecto modi dolorum.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};
