import { Card } from 'antd'
import React from 'react'
import '../styles/cv.scss'

const ContactComponent = () => {
  return (
    <>
    <main>


    <Card title="Contáctame" className='Card-Component' id='contactComponent'>
<section className="contact">
<div className="box">
    <div className="contact-g">
        <div className="col-form">
            <form className="form" action="https://formspree.io/f/xoqrpyrn" method="POST"/>
            <div>
                <input type="text" className="form_input" placeholder=" Nombre" name="name"/>
                <input type="email" className="form_input" placeholder=" Correo" name="email"/>
                <textarea className="form_input form_input--message" placeholder=" Mensaje" name="message"></textarea>
                <input type="submit" value="Enviar" className="form_cta"/>
            </div>
        </div>
    <div className="col-map">
    </div>
    </div>
    </div>
</section>
</Card>

    </main>
    </>
  )
}
export default ContactComponent