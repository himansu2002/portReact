import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
class HeaderSocials extends Component {
  render() {
    return (
      <div className="header__socials">
        <a
          href=": https://www.linkedin.com/in/himansu-bhamidipati-a9b19b291/
        "
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/himansu2002
        "
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    );
  }
}
export default HeaderSocials;
