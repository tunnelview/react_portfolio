import React from "react";
import gry from "../../assets/garry.png";

import { Container, Row, Col } from "react-bootstrap";

export const Hero = () => {
  return (
    <div class="hero">
      <Container class="container">
        <Row className="mt-5 py-3">
          {/* <!-- below md take 12 grid --> */}
          <Col md="6" class=" text-center order-md-2">
            <img src={gry} alt="" width="50%" />
          </Col>

          <Col md="6" class=" pt-5 d-flex flex-column justify-content-evenly">
            <h5>Hi, I am Garry Amasia</h5>
            <h1>Software Engineer | Dented Code</h1>
            <p class="pt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
              illo dolore dignissimos nostrum ad beatae? Corrupti quae nihil,
              reiciendis qui temporibus, voluptates id laborum ullam, odio
              corporis voluptatum facere autem.
            </p>
            {/* <!-- note!text-danger has !important rule --> */}
          </Col>

          {/* <!-- text-end is bootstrap class to put everything to the right inside its container --> */}
        </Row>
      </Container>
    </div>
  );
};
