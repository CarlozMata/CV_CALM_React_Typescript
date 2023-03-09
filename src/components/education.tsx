import { Avatar, Card, List } from 'antd'
import React from 'react'
import '../styles/cv.scss'

const data = [
  {
    avatar: 'https://carlozmata.com/img/company/platzi.png',
    title: 'Platzi',
    description: 'Desarrollo Web, Desarrollo de páginas web, contenido digital/multimedia y recursos informáticos. Enero 2021 - Actualidad 2022',
  },
  {
    avatar: 'https://carlozmata.com/img/company/ieu.png',
    title: 'Universidad IEU',
    description: 'Ingeniero en Sistemas y Tecnologías de la Información, Tecnología informática/Tecnología de sistemas informáticos. 2013 - 2016',
  }
];

const EducationComponent = () => {
  return (
    <>
    <main>
    <Card title="Educación" className='Card-Component' id='educationComponent'>

    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} style={{width: '100px', height:'100px'}}/>}
          title={<p>{item.title}</p>}
          description={<p>{item.description}</p>}
        />
      </List.Item>
    )}
  />
<section className="education">
    <div className="box">
    </div>
</section>
</Card>

    </main>
    </>
  )
}
export default EducationComponent