import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
    return (
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ paddingBottom: "10px", justifyContent: "center"}}>
            <Col md={4} className="project-card">
              <ProjectCard
                title="Tic Tac Toe"
                description="Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free!"  
                />
                <p>
                  <button className=".btn-primary" onClick={() => navigate("/tictactoe")}>Go to project</button>
                </p>
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                title="Shopping List"
                description="Create a list of purchases to be made."  
                />
                <p>
                  <button className=".btn-primary" onClick={() => navigate("/shoppinglist")}>Go to project</button>
                </p>
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                title="Random Cage"
                description="Try to catch Cage"  
                />
                <p>
                  <button className=".btn-primary" onClick={() => navigate("/randomcage")}>Go to project</button>
                </p>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
  
export default Projects;