export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>
                {" "}
                Veriedades de Cursos Online para comenzar con la tecnologia
              </h2>
              <p>
                {" "}
                "La comunidad CompUnerg ofrece cursos en línea los cuales
                abarcan diversas áreas de la tecnología: desde desarrollo web,
                cursos de telecomunicaciones y distintos lenguajes de
                programacion para el aprendizaje y creacion de programas
                informaticos. Estos cursos están diseñados para personas con
                diferentes niveles de conocimiento y experiencia en el tema.{" "}
              </p>

              <h3>Que puedes aprender?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};