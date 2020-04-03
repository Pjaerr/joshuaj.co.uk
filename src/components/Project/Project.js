import React from "react";
import PropTypes from "prop-types";

import { GithubSVGIcon, DemoSVGIcon } from "../SVGIcon/SVGIcon";

import "./Project.scss";

const Technology = ({ colour, name }) => (
  <p className="project-technology">
    <span
      style={{
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "25px",
        backgroundColor: colour,
      }}
    ></span>{" "}
    {name}
  </p>
);

const Project = ({
  title,
  description,
  technologies,
  gradient,
  githubLink,
  demoLink,
}) => (
  <div
    className="project-border-wrap"
    style={{
      background: `linear-gradient(to right, ${gradient.start}, ${gradient.end})`,
    }}
  >
    <div className="project">
      <h1 className="project-title">{title}</h1>
      <p className="project-description">{description}</p>
      <div className="project-technologies">
        {technologies.map(({ colour, name }) => (
          <Technology key={title + colour + name} colour={colour} name={name} />
        ))}
      </div>
      <div className="project-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <GithubSVGIcon size="24" />
          Github
        </a>

        {demoLink !== "" && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <DemoSVGIcon size="24" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      colour: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  gradient: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
  }),
  githubLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
};

export default Project;
