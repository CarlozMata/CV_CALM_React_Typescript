import { Card, Progress } from 'antd'
import React from 'react'
import '../styles/cv.scss'

const SkillComponent = () => {
  return (
    <>
    <main>
    <Card title="Habilidades" className='Card-Component' id='skillsComponent'>
<section className="skill">
    <div className="box">
        <div className="column">
            <div className="skills_item1">
                <p className="skills_tech">HTML5</p>
                <Progress percent={90} showInfo={false} status="active" strokeWidth={20} />
            </div>
            <div className="skills_item2">
                <p className="skills_tech">CSS3</p>
                <Progress percent={70} showInfo={false} status="active" strokeWidth={20} />

            </div>
            <div className="skills_item3">
                <p className="skills_tech">JavaScript</p>
                <Progress percent={60} showInfo={false} status="active" strokeWidth={20} />
            </div>
            <div className="skills_item4">
                <p className="skills_tech">Git</p>
                <Progress percent={80} showInfo={false} status="active" strokeWidth={20} />
            </div>
            <div className="skills_item5">
                <p className="skills_tech">Adobe Photoshop CS6</p>
                <Progress percent={60} showInfo={false} status="active" strokeWidth={20} />
            </div>
            <div className="skills_item6">
                <p className="skills_tech">Linux</p>
                <Progress percent={70} showInfo={false} status="active" strokeWidth={20} />
            </div>
            <div className="skills_item7">
                <p className="skills_tech">Office 365</p>
                <Progress percent={95} showInfo={false} status="active" strokeWidth={20} />
            </div>
            <div className="skills_item8">
                <p className="skills_tech">Wordpress</p>
                <Progress percent={80} showInfo={false} status="active" strokeWidth={20} />
            </div>
        </div>
        <h2>Aptitudes</h2>
        <div className="column">
            <div className="skills"></div>
                <div className="skills_item1">
                    <p className="skills_tech">Teamwork</p>
                <Progress percent={80} showInfo={false} status="active" strokeWidth={20} />
            </div>
            <div className="skills_item2">
                <p className="skills_tech">Service Desk</p>
                <Progress percent={80} showInfo={false} status="active" strokeWidth={20} />
            </div>
            <div className="skills_item3">
                <p className="skills_tech">TI</p>
                <Progress percent={70} showInfo={false} status="active" strokeWidth={20} />
        </div>
        </div>
        <h2>Idiomas</h2>
        <div className="column">
            <div className="skills"></div>
                <div className="skills_item1">
                <p className="skills_tech">Español</p>
            <Progress percent={100} showInfo={false} status="active" strokeWidth={20} />
            </div>
            <div className="skills_item2">
                <p className="skills_tech">Ingles: B1</p>
                <Progress percent={50} showInfo={false} status="active" strokeWidth={20} />
            </div>
        </div>
    </div>
</section>
</Card>
    </main>
    </>
  )
}
export default SkillComponent