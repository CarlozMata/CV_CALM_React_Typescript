import { Steps } from "antd";
import React, { useState } from "react";
import "../styles/cv.scss";
import "../styles/scssComponents/nav.scss";
const { Step } = Steps;

const steps = [
  {
    title: <a href="#skillsComponent">Habilidades</a>,
  },
  {
    title: <a href="#experienceComponent">Experiencia</a>,
  },
  {
    title: <a href="#educationComponent">Educación y Portafolio</a>,
  },
  {
    title: <a href="#certificatesComponent">Certificados</a>,
  },
  {
    title: <a href="#contactComponent">Contacto</a>,
  },
];

const NavComponent = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (currentStep: number) => {
    setCurrent(currentStep);
  };

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
