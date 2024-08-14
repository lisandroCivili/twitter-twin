import "../../../styles/logSignIn.css";
import logoX from "../../assets/x-logo.png";
import { Button, Col, Container, DropdownDivider, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const LogSignIn = () => {
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
              <Button id="logGoogle" variant="light" size="lg">
                <i className="bi bi-google"></i>
                <p>Registrarse con Google</p>
              </Button>
              <Button id="logApple" variant="light" size="lg">
                <i className="bi bi-apple"></i>
                <p>
                  <strong>Registrarse con Apple</strong>
                </p>
              </Button>
            </div>
            <div className="d-flex justify-content-center my-1 gap-2">
              <div className="hrs text-light">
                <hr />
              </div>
              <div className="text-light oLetter">o</div>
              <div className="hrs text-light">
                <hr />
              </div>
            </div>
            <div className="d-grid">
              <Button id="signIn" size="lg">
                Crear cuenta
              </Button>
            </div>
            <div>
              <p id="termsAndPolicy">
                Al registrarte, aceptas los Términos de servicio y la Política
                de privacidad, incluida la política de Uso de Cookies.
              </p>
            </div>
            <h4>¿Ya tienes una cuenta?</h4>
            <div className="d-grid">
            <Button id="logIn" variant="outline-secondary">Iniciar sesión</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogSignIn;
