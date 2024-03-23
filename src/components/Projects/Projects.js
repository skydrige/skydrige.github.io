import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cozyhosting from "../../Assets/Projects/cozyhosting.png";
import devvortex from "../../Assets/Projects/devvortex.png";
import keeper from "../../Assets/Projects/keeper.png";
import analytics from "../../Assets/Projects/analytics.png";
import bizness from "../../Assets/Projects/bizness.png";
import codify from "../../Assets/Projects/codify.png";
// import perfection from "../../Assets/Projects/perfection.png";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few <span className="purple">CTF's</span> I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={cozyhosting}
                  isBlog={false}
                  title="Cozy Hosting"
                  description="The CozyHosting device, designed by commandercool, is an accessible level machine primarily concentrating on web application security flaws that allow for obtaining a reverse shell of the system."
                  htbLink="https://www.hackthebox.com/achievement/machine/1561918/559"
                  // demoLink=""
              />
            </Col>
            
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={devvortex}
                  isBlog={false}
                  title="DevVorTex"
                  description="The DevVorTex machine is created by 7u9y. This is an easy machine with a strong focus on web application security vulnerabilities which enables us to get reverse shell of the machine and then we can get the root access."
                  htbLink="https://www.hackthebox.com/achievement/machine/1561918/577"
                  // demoLink=""
              />
            </Col>
            
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={keeper}
                  isBlog={false}
                  title="Keeper"
                  description="The Keeper machine is created by knightmare.This machine make us understand Reconnaissance while doing CTF's. The machine is also designed to show a way of Priviledge Escalation."
                  htbLink="https://www.hackthebox.com/achievement/machine/1561918/556"
                  // demoLink=""
              />
            </Col>
            
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={analytics}
                  isBlog={false}
                  title="Analytics"
                  description="Analytics is the easy Linux machine on HackTheBox, created by 7u9y and TheCyberGeek. This machine using LinPeas, a login username and password for SSH were obtained. For privilege escalation, it was determined through enumeration that the machine was vulnerable to CVE-2023–2640, which facilitated the attainment of root access"
                  htbLink="https://www.hackthebox.com/achievement/machine/1561918/569"
                  // demoLink="https://plant49-ai.herokuapp.com/"
              />
            </Col>
            
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={bizness}
                  isBlog={false}
                  title="Bizness"
                  description="This machine is created by C4rm3l0. This machine is a beginner level machine and it is a good machine to start with. The machine has phases InfoGathering, Enumeration, Exploitation, Privilege Escalation. The machine contains Decrypting of hash that make you understand how to view the contents of raw db files."
                  htbLink="https://www.hackthebox.com/achievement/machine/1561918/582"
                  // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
              />
            </Col>
            
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={codify}
                  isBlog={false}
                  title="Codify"
                  description="This machine is created by kavigihan. This machine provides a realistic simulation of a web application environment with a variety of challenges to test your penetration testing skills. Working your way through the script analysis, password cracking, and sandbox escape is your task. It focus on web application security vulnerabilities."
                  htbLink="https://www.hackthebox.com/achievement/machine/1561918/574"
                  // demoLink=""      <--------Please include a demo link here
              />
            </Col>
            
            {/*<Col md={4} className="project-card">*/}
            {/*    <ProjectCard*/}
            {/*        imgPath={perfection}*/}
            {/*        isBlog={false}*/}
            {/*        title="Perfection"*/}
            {/*        description=""*/}
            {/*        htbLink="https://www.hackthebox.com/achievement/machine/1561918/590"*/}
            {/*        // demoLink=""*/}
            {/*    />*/}
            {/*</Col>*/}
          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
