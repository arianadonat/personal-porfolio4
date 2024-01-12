import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import project1 from "../assets/img/project1.png";



export const Projects = () => {

  const projects = [
    {
      title: "Weather-App",
      description: "Html, Css, Javascript",
      imgUrl: project1,
      link:'https://weatherandchange.netlify.app/'
    },
    {
      title: "Calculator",
      description: "Html,Css,Javascript",
      imgUrl: projImg2,
      link1:'https://calculatorari.netlify.app/'
    },
   
  ];

  return (
                  
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Html, Css, React, Javascripts, Ruby on Rails, Nodejs .</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p> I am a creative and enthusiastic person who likes to improve myself day by day. </p> 
                    </Tab.Pane>
                     
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}