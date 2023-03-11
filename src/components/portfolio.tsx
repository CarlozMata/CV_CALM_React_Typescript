import { Card } from "antd";
import React from "react";
import "../styles/cv.scss";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "160px",
  width: "50%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const PortfolioComponent = () => {
  return (
    <>
      <main>
        <Card
          title="Portafolio"
          className="Card-Component"
          id="portfolioComponent"
        >
          <section>
            <div className="div">
              <Carousel autoplay>
                <div>
                  <img
                    src="../styles/img/portafolios/cv800x430px.jpg"
                    alt="Imagen 1"
                    style={contentStyle}
                  />
                  <h3>SITIO WEB PERSONAL PROFESIONAL</h3>
                  <p>Creación de Sitio Web para fines profesionales</p>
                  <p>HTML5, CSS3, JavaScript, Git/Github</p>
                  <a href="https://carlozmata.com/">https://carlozmata.com/</a>
                </div>
                <div>
                  <img
                    src="../styles/img/portafolios/mingos800x430px.jpg"
                    alt="Imagen 1"
                    style={contentStyle}
                  />
                  <h3>HELADOS MINGOS</h3>
                  <p>Sitio Web para Small Business del giro de Postres</p>
                  <p>HTML5, CSS3, JavaScript, Git/Github, Photoshop</p>
                  <a href="https://carlozmata.github.io/Mingos/">
                    https://heladosmingos.com/
                  </a>
                </div>
                <div>
                  <img
                    src="../styles/img/portafolios/cerrada800x430px.png"
                    alt="Imagen 1"
                    style={contentStyle}
                  />
                  <h3>SITIO WEB RESIDENCIAL</h3>
                  <p>Creación de Sitio Web con fines informativos</p>
                  <p>WordPress, CSS3, JavaScript, Elementor, FileZilla</p>
                  <a href="https://cerradahortensias.com">
                    https://cerradahortensias.com
                  </a>
                </div>
                <div>
                  <img
                    src="../styles/img/portafolios/pruebajs800x430px.jpg"
                    alt="Imagen 1"
                    style={contentStyle}
                  />
                  <h3>Practica JS</h3>
                  <p>Pagina web para practicar JavaScript y CSS3</p>
                  <p>HTML5 / CSS3 / JavaScript</p>
                  <a href="https://carlozmata.github.io/Practica_JS/">
                    https://carlozmata.github.io/Practica_JS/
                  </a>
                </div>
              </Carousel>
            </div>
          </section>
        </Card>
      </main>
    </>
  );
};
export default PortfolioComponent;
