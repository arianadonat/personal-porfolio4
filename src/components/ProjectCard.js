import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,link, link1}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div >
          <a href="https://weatherandchange.netlify.app/">{link}</a>
          </div>
          <div >
          <a href="https://calculatorari.netlify.app/">{link1}</a>
          </div>
        </div>
      </div>
    </Col>
  )
}