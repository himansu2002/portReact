import { Component } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "E Commerce Website",
    github: "https://github.com/himansu2002/reactEcommerce",
    demo: "https://hstores.netlify.app/",
  },
  {
    id: 2,
    image: IMG3,
    title: "Product page",
    github: "https://github.com/himansu2002/Product-Page",
    demo: "https://productp.netlify.app/",
  },
  {
    id: 3,
    image: IMG2,
    title: "Food delivery website",
    github: "https://github.com/himansu2002/ruby",
    demo: "",
  },
  {
    id: 3,
    image: IMG4,
    title: "Romantic Proposal",
    github: "https://github.com/himansu2002/ilioveyou",
    demo: "https://iloveyoudear.netlify.app/",
  },
];

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
