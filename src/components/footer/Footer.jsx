import { Component } from "react";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="#" className="footer__logo">
          Himansu Bhamidipati
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#portfolio">Portfolio</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/himansu-bhamidipati-a9b19b291/"
            target="_blank"
          >
            <IoLogoLinkedin />
          </a>
          <a href="https://www.instagram.com/captain____24/" target="_blank">
            <IoLogoInstagram />
          </a>

          <a href="https://github.com/himansu2002" target="_blank">
            <IoLogoGithub />
          </a>
        </div>
        <div className="footer__copyright"></div>
      </footer>
    );
  }
}

export default Footer;
