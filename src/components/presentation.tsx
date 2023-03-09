import { AntDesignOutlined } from '@ant-design/icons'
import { Avatar, Button, Card } from 'antd'
import React from 'react'
import '../styles/cv.scss'

const PresentationComponent = () => {
return (
    <>
<main>
<Card title="Presentación" className='Card-Component' id='presentationComponent' >

    <section className="presentation">
    <div className="box">
        <div className="presentation-box1">
<Avatar
    size={{ xs: 100, sm: 132, md: 140, lg: 164, xl: 180, xxl: 200 }}
    icon={<AntDesignOutlined />}
    src="https://carlozmata.com/img/mifoto.png"
/>


</div>
    <div className="presentation-box2">
        <h1>Carlos Alberto López Mata</h1>
    </div>
    <div className="presentation-box3-g">
        <div className="presentation-box3">
        <a href="https://github.com/CarlozMata" target="__blank"><img src="./img/redes_sociales/github.png" alt="Github"/></a>
        <a href="https://www.linkedin.com/in/carlosalbertolopezmata/" target="__blank"><img src="./img/redes_sociales/linkedin.png" alt="Linkedln"/></a>
        <a href="https://twitter.com/CarlozMata" target="__blank"><img src="./img/redes_sociales/twitter.png" alt="Twitter"/></a>
        <a href="https://carlozmata.com/" target="__blank"><img src="./img/redes_sociales/world.png" alt="Sitio Web"/></a>
        </div>
    </div>
    <div className="presentation-box4">
    <Button>Descargar CV</Button>
        <a href="./pdf/CV_Carlos_Mata.pdf" className="button-box4" download="CV_Carlos_Mata.pdf">Descargar CV</a>
    </div>
    <div className="translate"><a href="./index_eng.html">Traducir a Ingles</a></div>
</div>
    </section>
    </Card>


    </main>
    </>
)
}
export default PresentationComponent