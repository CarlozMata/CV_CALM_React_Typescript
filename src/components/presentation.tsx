import {
  AntDesignOutlined,
  GithubOutlined,
  GlobalOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/cv.scss";
import "../styles/scssComponents/presentation.scss";

const PresentationComponent = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language; // Obtenemos el idioma actual

  const toggleLanguage = () => {
    // Alternamos entre los dos idiomas disponibles
    const nextLanguage = currentLanguage === "en" ? "es" : "en";
    i18n.changeLanguage(nextLanguage);
  };
  //Esto es mi cambio de Idioma
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  return (
    <>
      <main>
        <Card
          title={t("presentation.title")}
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
                <h1>{t("presentation.info.name")}</h1>
                <p>{t("presentation.info.work")}</p>
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
                  {t("presentation.info.download")}
                </Button>
                <a
                  href="../pdf/CV_Carlos_Mata.pdf"
                  download="CV_Carlos_Mata.pdf"
                >
                  {t("presentation.info.download")}
                </a>
              </div>
              <div></div>
              <Button onClick={toggleLanguage}>
                {" "}
                {currentLanguage === "en"
                  ? "Translate to Spanish"
                  : "Traducir a Ingles"}
              </Button>
            </div>
          </section>
        </Card>
      </main>
    </>
  );
};
export default PresentationComponent;
