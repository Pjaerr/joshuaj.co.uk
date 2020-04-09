import React from "react";
import { useStaticQuery, graphql } from "gatsby";

//Components
import Project from "../Project/Project";

//Styles
import styled from "styled-components";

import HomepageTitle from "../../styles/HomepageTitle";

const ProjectListingContainer = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 25px;
  justify-content: end;
  align-content: start;
`;

const ProjectListing = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            title
            description
            technologies {
              colour
              name
            }
            gradient {
              start
              end
            }
            githubLink
            demoLink
          }
        }
      }
    }
  `);

  const projects = data.allProjectsJson.edges;

  return (
    <ProjectListingContainer>
      <HomepageTitle>Projects</HomepageTitle>
      {projects.map(
        ({
          node: {
            title,
            description,
            technologies,
            gradient,
            githubLink,
            demoLink,
          },
        }) => (
          <Project
            title={title}
            description={description}
            technologies={technologies}
            gradient={gradient}
            githubLink={githubLink}
            demoLink={demoLink}
          />
        )
      )}
    </ProjectListingContainer>
  );
};

export default ProjectListing;
