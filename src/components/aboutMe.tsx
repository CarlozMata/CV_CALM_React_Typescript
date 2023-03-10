import { Card, Descriptions } from "antd";
import React from "react";
import "../styles/cv.scss";
import "../styles/scssComponents/aboutMe.scss";
const AboutMeComponent = () => {
  return (
    <>
      <main>
        <Card
          title="Acerca de mi"
          className="Card-Component"
          id="aboutComponent"
        >
          <section>
            <div className="div">
              <p>
                Hola! Soy Carlos Mata <br />
                💼 Profesional, responsable, creativo, organizado con
                capacitación constante y apasionado de la Tecnología. Con más de
                6 años de experiencia en el área de TI y gran fascinación con la
                programación tratando siempre mantenerme actualizado.
                <br />
                💻He tenido la oportunidad de Crear, Administrar sitios web,
                Participar en proyectos implementando nuevas funcionalidades y
                migración de nuevos proyectos a nuevas tecnologías utilizando
                MicroFronts con nuevas tecnologías.
              </p>
              <Descriptions title="" layout="horizontal">
                <Descriptions.Item label="Edad">30</Descriptions.Item>
                <Descriptions.Item label="Email">
                  carlos_1992_@hotmail.com
                </Descriptions.Item>
                <Descriptions.Item label="Ubicación" span={2}>
                  Mérida, Yuc. México.
                </Descriptions.Item>
              </Descriptions>
            </div>
          </section>
        </Card>
      </main>
    </>
  );
};
export default AboutMeComponent;
