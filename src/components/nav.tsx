import { Steps } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/cv.scss";
import "../styles/scssComponents/nav.scss";
const { Step } = Steps;

const NavComponent = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (currentStep: number) => {
    setCurrent(currentStep);
  };

  //Esto es mi cambio de Idioma
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  const { t, i18n } = useTranslation();
  const steps = [
    {
      title: <a href="#skillsComponent">{t("nav.first")}</a>,
    },
    {
      title: <a href="#experienceComponent">{t("nav.second")}</a>,
    },
    {
      title: <a href="#educationComponent">{t("nav.third")}</a>,
    },
    {
      title: <a href="#certificatesComponent">{t("nav.fourth")}</a>,
    },
  ];

  return (
    <>
      <div className="div-Steps">
        <div className="div-Steps-Box">
          <Steps
            direction="horizontal"
            current={current}
            onChange={onChange}
            progressDot={true}
            className="Steps"
            size="small"
          >
            {steps.map((item, index) => (
              <Step key={index} title={item.title} />
            ))}
          </Steps>
        </div>
      </div>
    </>
  );
};
export default NavComponent;
