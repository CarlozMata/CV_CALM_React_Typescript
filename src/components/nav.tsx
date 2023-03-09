import { Card, Divider, Steps } from 'antd'
import React, { useState } from 'react'
import '../styles/cv.scss'

const { Step } = Steps;


const steps = [
    {
        title: (
            <a href="#presentationComponent">Presentación</a>
        ),
    },
    {
        title: (
            <a href="#aboutComponent">Acerca de mi</a>
        ),
    },
    {
        title: (
            <a href="#skillsComponent">Habilidades</a>
        ),
    },
    {
        title: (
            <a href="#experienceComponent">Experiencia</a>
        ),
    },
    {
        title: (
            <a href="#educationComponent">Educación</a>
        ),
    },
    {
        title: (
            <a href="#portfolioComponent">Portafolio</a>
        ),
    },
    {
        title: (
            <a href="#certificatesComponent">Certificados</a>
        ),
    },
    {
        title: (
            <a href="#contactComponent">Contacto</a>
        ),
    },
  ];

const NavComponent = () => {

const [current, setCurrent] = useState(0);

const onChange = (currentStep: number) => {
    setCurrent(currentStep);
  };

return (
    <>
    <Card>

    <Steps current={current} onChange={onChange} progressDot={true}>
        {steps.map((item, index) => (
          <Step key={index} title={item.title} />
        ))}
      </Steps>
      <Divider />

    <nav className='nav'>
<div className="box">
    <div className="nav-g">
        <div><a href="#presentationComponent">Acerca de mi</a></div>
        <div><a href="#habilidades">Habilidades</a></div>
        <div><a href="#experiencia">Experiencia</a></div>
        <div><a href="#educacion">Educación</a></div>
        <div><a href="#portafolio">Portafolio</a></div>
        <div><a href="#certificado">Certificados</a></div>
        <div><a href="#contacto">Contacto</a></div>
    </div>
</div>
</nav>
</Card>
    </>
)
}
export default NavComponent