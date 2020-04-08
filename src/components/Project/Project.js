import React from "react";
import PropTypes from "prop-types";

import { GithubSVGIcon, DemoSVGIcon } from "../SVGIcon/SVGIcon";

import * as styled from "./ProjectStyles";

const Technology = ({ colour, name }) => (
  <styled.ProjectTechnology colour={colour}>
    <span /> {name}
  </styled.ProjectTechnology>
);

const Project = ({
  title,
  description,
  technologies,
  gradient,
  githubLink,
  demoLink,
}) => (
  <styled.ProjectColouredBorder gradient={gradient}>
    <styled.ProjectContent>
      <h1>{title}</h1>
      <p>{description}</p>
      <styled.ProjectTechnologies>
        {technologies.map(({ colour, name }) => (
          <Technology key={title + colour + name} colour={colour} name={name} />
        ))}
      </styled.ProjectTechnologies>
      <styled.ProjectLinks>
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
      </styled.ProjectLinks>
    </styled.ProjectContent>
  </styled.ProjectColouredBorder>
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
