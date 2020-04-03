import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Project from "../Project/Project";

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
    <section className="project-listing">
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
    </section>
  );
};

export default ProjectListing;
