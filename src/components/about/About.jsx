import { Component } from "react";
import ME from "../../assets/me-about.jpg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.css";
class About extends Component {
  render() {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsAwardFill className="about__icon" />
                <h5>Experience</h5>
                <small>Fresher</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Education</h5>
                <small>CS 2024 Graduate</small>
              </article>
              <article className="about__card">
                <FaProjectDiagram className="about__icon" />
                <h5>Projects</h5>
                <small>MERN Stack Python (ML)</small>
              </article>
            </div>
            <p>
              Hello! I’m Himansu Bhamidpati, an aspiring Software Development
              Engineer with a focus on the MERN stack and a passion for building
              efficient, user-centric applications. I bring a well-rounded skill
              set in front-end and back-end development. I’m excited to keep
              growing and tackle new challenges in the tech world!
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
