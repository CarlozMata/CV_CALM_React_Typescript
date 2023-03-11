import {
  AntDesignOutlined,
  GithubOutlined,
  GlobalOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import React from "react";
import "../styles/cv.scss";
import "../styles/scssComponents/presentation.scss";

const PresentationComponent = () => {
  return (
    <>
      <main>
        <Card
          title="Presentación"
          className="Card-Component"
          id="presentationComponent"
        >
          <section>
            <div className="div-box">
              <div className="div-avatar">
                <Avatar
                  size={{
                    xs: 150,
                    sm: 170,
                    md: 190,
                    lg: 200,
                    xl: 210,
                    xxl: 220,
                  }}
                  icon={<AntDesignOutlined />}
                  src="../styles/img/mifoto.png"
                />
              </div>
              <div>
                <h1>Carlos Alberto López Mata</h1>
                <p>Front-End Developer Jr</p>
              </div>
              <div>
                <div>
                  <a
                    href="https://github.com/CarlozMata"
                    target="__blank"
                    className="icons"
                  >
                    <GithubOutlined />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/carlosalbertolopezmata/"
                    target="__blank"
                    className="icons"
                  >
                    <LinkedinOutlined />
                  </a>
                  <a
                    href="https://twitter.com/CarlozMata"
                    target="__blank"
                    className="icons"
                  >
                    <TwitterOutlined />
                  </a>
                  <a
                    href="https://carlozmata.com/"
                    target="__blank"
                    className="icons"
                  >
                    <GlobalOutlined />
                  </a>
                </div>
              </div>
              <div>
                <Button
                  href="../pdf/CV_Carlos_Mata.pdf"
                  download="CV_Carlos_Mata.pdf"
                >
                  Descargar CV
                </Button>
                <a
                  href="../pdf/CV_Carlos_Mata.pdf"
                  download="CV_Carlos_Mata.pdf"
                >
                  Descargar CV
                </a>
              </div>
              <div>
                <a>Traducir a Ingles (Pendiente)</a>
              </div>
            </div>
          </section>
        </Card>
      </main>
    </>
  );
};
export default PresentationComponent;
