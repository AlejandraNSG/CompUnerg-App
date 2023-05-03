import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  CompUnerg: PLataforma Social
                  <span></span>
                </h1>
                <p> "Vive como si fueses a morir mañana, aprende como si fueses a vivir siempre. La forma más segura de tener éxito es intentarlo una vez más".</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Leer Mas
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
