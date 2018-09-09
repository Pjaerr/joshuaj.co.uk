import React from 'react';

import Header from '../components/Header/Header';

import styles from './projects.module.scss';

import Project from '../components/Project/Project';

export const ProjectQuery = graphql`
    query ProjectQuery{
        allProjectsJson {
            edges
            {
              node
              {
                name,
              description,
              imageSrc,
              demoLink,
              sourceLink
              }
            }
        }
      }
    `;

const Projects = ({ data }) =>
{
    let projects = [];

    for (let i = 0; i < data.allProjectsJson.edges.length; i++)
    {
        projects.push(<div key={data.allProjectsJson.edges[i].node.name} className={styles.project}><Project data={data.allProjectsJson.edges[i].node} /></div>);
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <Header>Josh Jackson</Header>
            </div>

            {projects}

        </div>
    );
}

export default Projects;