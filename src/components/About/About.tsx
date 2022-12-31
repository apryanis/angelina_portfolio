import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
    SiCsharp,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiWordpress,
    SiMysql
 } from "react-icons/si";
import {
  DiJavascript1,
  DiReact
} from "react-icons/di";

function About() {
  return (
    <Container fluid className="about-section">

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

            <Row style={{ justifyContent: "center" }}>
            <br />
            <Col xs={4} md={2} className="tech-icons">
                <SiCsharp />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWordpress />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
           </Row>
           <br />
            <Row style={{ justifyContent: "center", paddingTop: "79px", paddingBottom:"50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
            </Col>
            <br />
            </Row>
      </Container>
    </Container>
  );
}

export default About;
