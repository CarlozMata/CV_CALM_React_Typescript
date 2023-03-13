import { Card, Descriptions } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/cv.scss";
import "../styles/scssComponents/aboutMe.scss";
const AboutMeComponent = () => {
  //Esto es mi cambio de Idioma
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  const { t, i18n } = useTranslation();

  return (
    <>
      <main>
        <Card
          title={t("aboutMe.title")}
          className="Card-Component"
          id="aboutComponent"
        >
          <section>
            <div className="div">
              <p>
                {t("aboutMe.info.firstParagraph")}
                <br />
                {t("aboutMe.info.secondParagraph")}
                <br />
                {t("aboutMe.info.thirdParagraph")}
              </p>
              <Descriptions title="" layout="horizontal">
                <Descriptions.Item label="Edad">
                  {t("aboutMe.info.age")}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {t("aboutMe.info.email")}
                </Descriptions.Item>
                <Descriptions.Item label="Ubicación" span={2}>
                  {t("aboutMe.info.address")}
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
