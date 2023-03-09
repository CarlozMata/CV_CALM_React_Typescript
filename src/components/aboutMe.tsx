import { Card, Descriptions } from 'antd'
import React from 'react'
import '../styles/cv.scss'

const AboutMeComponent = () => {
return (
    <>
<main>

    <Card title="Acerca de mi" className='Card-Component' id='aboutComponent'>
    <section className="about">
        <div className="box">
        <p>Hola! Soy Carlos Mata <br/>💼 Profesional, responsable, creativo, organizado con capacitación constante y apasionado de la Tecnología. Con más de 5 años de experiencia en el área de TI y gran fascinación con la programación tratando siempre mantenerme actualizado. <br/>💻 He tenido la oportunidad de crear y administrar sitios web actualmente disponibles.
        </p>
        <Descriptions title="" layout="horizontal">
            <Descriptions.Item label="Edad">30</Descriptions.Item>
            <Descriptions.Item label="Email">carlos_1992_@hotmail.com</Descriptions.Item>
            <Descriptions.Item label="Ubicación" span={2}>Mérida, Yuc. México.</Descriptions.Item>
        </Descriptions>
    </div>
</section>
</Card>
    </main>
    </>
)
}
export default AboutMeComponent