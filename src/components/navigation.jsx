import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Navegacion</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            CompUnerg Community
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Comunidad
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Acerca De
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Contenidos
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galeria
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Estudiantes
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Area AIS
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
          <ul></ul>
          <div className="navbar-right">
            <RouterLink
              to="/login"
              className="btn-Sig-in btn btn-custom btn-lg page-scroll"
            >
              Iniciar Sesión
            </RouterLink>

            <RouterLink
              to="/signup"
              className="btn-navbar-reg btn btn-custom btn-lg page-scroll"
            >
              Registrarse
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
