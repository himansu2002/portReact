import { Component } from "react";
import CTA from "./CTA";
import ME from "../../assets/ME.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Web Developer</h1>
          <CTA />
          <div className="me">
            <img src={ME} alt="ME" />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
          <HeaderSocials />
        </div>
      </header>
    );
  }
}

export default Header;