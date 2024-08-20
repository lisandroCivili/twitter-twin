import "../../../styles/logSignIn.css";
import logoX from "../../assets/x-logo.png";
import { Button, Col, Container, DropdownDivider, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const LogSignIn = () => {
  return (
    <>
      <div id="containerDiv">
        <Container id="container" fluid>
          <Row>
            <Col className="columnLogoX"  lg={3}>
              <img srcSet={logoX} />
            </Col>
            <div id="titleAndButtons" className="d-flex flex-column">
              <Col id="title" lg={3}>
                <h1>Lo que está pasando ahora</h1>
              </Col>
              <Col className="columnTitle"  lg={3}>
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
                    Al registrarte, aceptas los Términos de servicio y la
                    Política de privacidad, incluida la política de Uso de
                    Cookies.
                  </p>
                </div>
                <h4>¿Ya tienes una cuenta?</h4>
                <div className="d-grid">
                  <Button id="logIn" variant="outline-secondary">
                    Iniciar sesión
                  </Button>
                </div>
              </Col>
            </div>
            </Row>
        </Container>
      </div>
      <footer className="d-flex flex-wrap justify-content-center column-gap-4">
        <p>Información</p>
        <p>Descarga la app de X</p>
        <p>Centro de de Ayuda</p>
        <p>Condiciones de Servicio</p>
        <p>Politica de Privacidad</p>
        <p>Politica de Cookies</p>
        <p>Accesibilidad</p>
        <p>Informacion de anuncios</p>
        <p>Blog</p>
        <p>Empleos</p>
        <p>Recursos para marcas</p>
        <p>Publicidad</p>
        <p>Marketing</p>
        <p>X para empresas</p>
        <p>Desarrolladores</p>
        <p>Guía</p>
        <p>Configuración</p>
        <p>© 2024 Lisandro Civili.</p>
      </footer>
    </>
  );
};

export default LogSignIn;
