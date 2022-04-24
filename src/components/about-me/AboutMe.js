import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const AboutMe = () => {
  return (
    <Container id="about" class="container">
      <div class="sec-title fs-1 fw-bolder text-center m-auto mt-5">
        About Me
      </div>
      <Row class=" mt-5">
        <Col md="4" class=" text-center mb-4">
          <img src="./assets/programming.jpeg" alt="" width="90%" />
        </Col>

        <div class="col-md-7">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            iure eum id asperiores quaerat, rem ex voluptate atque deserunt
            quidem?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            commodi numquam at consectetur, sequi accusantium vero cum ea saepe
            eveniet.
          </p>
        </div>
      </Row>
    </Container>
  );
};
