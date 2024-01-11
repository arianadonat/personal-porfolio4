import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/arianadonat23"><img src={linkedin} alt="Icon" /></a>
              <a href="https://github.com/arianadonat"><img src={github} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}