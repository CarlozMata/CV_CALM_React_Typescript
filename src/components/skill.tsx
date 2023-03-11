import { Card, Col, Progress, Row } from "antd";
import React from "react";
import "../styles/cv.scss";
import "../styles/scssComponents/skill.scss";

const SkillComponent = () => {
  return (
    <>
      <main>
        <Card
          title="Habilidades Profesionales"
          className="Card-Component"
          id="skillsComponent"
        >
          <section>
            <div className="div">
              <h2>Habilidades</h2>
              <div className="progress-box">
                <Row>
                  <Col xs={24} md={12}>
                    <div>
                      <p className="skills_tech">HTML5</p>
                      <Progress
                        percent={90}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div>
                      <p className="skills_tech">CSS3</p>
                      <Progress
                        percent={70}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div>
                      <p className="skills_tech">JavaScript</p>
                      <Progress
                        percent={60}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div>
                      <p className="skills_tech">Git</p>
                      <Progress
                        percent={80}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div>
                      <p className="skills_tech">Adobe Photoshop CS6</p>
                      <Progress
                        percent={60}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div>
                      <p className="skills_tech">Linux</p>
                      <Progress
                        percent={70}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>{" "}
                  <Col xs={24} md={12}>
                    <div>
                      <p className="skills_tech">Office 365</p>
                      <Progress
                        percent={95}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div>
                      <p className="skills_tech">Wordpress</p>
                      <Progress
                        percent={80}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                </Row>
              </div>

              <h2 className="name-skill">Aptitudes</h2>
              <div className="progress-box">
                <Row>
                  <Col xs={24} md={12}>
                    <div>
                      <p className="skills_tech">TeamWork</p>
                      <Progress
                        percent={80}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div>
                      <p className="skills_tech">Service Desk</p>
                      <Progress
                        percent={80}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div>
                      <p className="skills_tech">TI</p>
                      <Progress
                        percent={70}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                </Row>
              </div>

              <h2 className="name-skill">Idiomas</h2>
              <div className="progress-box">
                <Row>
                  <Col xs={24} md={24}>
                    <div>
                      <p className="skills_tech">Español</p>
                      <Progress
                        percent={100}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={24}>
                    <div>
                      <p className="skills_tech">Ingles: B1</p>
                      <Progress
                        percent={50}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </section>
        </Card>
      </main>
    </>
  );
};
export default SkillComponent;
