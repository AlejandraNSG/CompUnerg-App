import React from "react";

export const Team = ({ data }) => {
    return (
        <div id="team" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                    <h2>Instructores</h2>
                    <p>
                        Gracias al apoyo de profesionales es posible el
                        aprendizaje colaborativo en el campo de la computacion
                        en la Universidad Nacional Experimental "Romulo
                        Gallegos"
                    </p>
                </div>
                <div id="row">
                    {data
                        ? data.map((imagen, i) => (
                              <div
                                  key={`${imagen.name}-${i}`}
                                  className="col-md-3 col-sm-6 team"
                              >
                                  <div className="thumbnail">
                                      {" "}
                                      <img
                                          src={imagen.img}
                                          alt="..."
                                          className="team-img"
                                      />
                                      <div className="caption">
                                          <h4> {imagen.name} </h4>
                                          <p>{imagen.job}</p>
                                      </div>
                                  </div>
                              </div>
                          ))
                        : "loading"}
                </div>
            </div>
        </div>
    );
};
