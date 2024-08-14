import "../../../styles/logSignIn.css";
import logoX from "../../assets/x-logo.png";
import { Button, Col, Container, DropdownDivider, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const logSignIn = () => {
  return (
    <div id="containerDiv">
      <Container id="container">
        <Row>
          <Col className="columnLogoX">
            <img srcSet={logoX} />
          </Col>
        </Row>
        <Row>
          <Col className="columnTitle">
            <h1>Lo que está pasando ahora</h1>
            <h3>Únete Hoy</h3>
            <div className="d-grid gap-2">
              <Button id="signGoogle" variant="light" size="lg">
              <i class="bi bi-google"></i>Registrarse con Google
              </Button>
              <Button id="signApple" variant="light" size="lg">
              <i class="bi bi-apple"></i>Registrarse con Apple
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default logSignIn;
