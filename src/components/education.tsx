import { Avatar, Card, List } from "antd";
import React from "react";
import "../styles/cv.scss";

const data = [
  {
    avatar: "../styles/img/company/platzi.png",
    title: "Platzi",
    description:
      "Desarrollo Web, Desarrollo de páginas web, contenido digital/multimedia y recursos informáticos. Enero 2021 - Actualidad 2022",
  },
  {
    avatar: "../styles/img/company/ieu.png",
    title: "Universidad IEU",
    description:
      "Ingeniero en Sistemas y Tecnologías de la Información, Tecnología informática/Tecnología de sistemas informáticos. 2013 - 2016",
  },
];

const EducationComponent = () => {
  return (
    <>
      <main>
        <Card
          title="Educación"
          className="Card-Component"
          id="educationComponent"
        >
          <section>
            <div className="div">
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={item.avatar}
                          style={{ width: "100px", height: "100px" }}
                        />
                      }
                      title={<p>{item.title}</p>}
                      description={<p>{item.description}</p>}
                    />
                  </List.Item>
                )}
              />
            </div>
          </section>
        </Card>
      </main>
    </>
  );
};
export default EducationComponent;
