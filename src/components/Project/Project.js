import React from 'react';

import styles from './Project.module.scss';

import Button from '../Button/Button';

const Project = (props) =>
{
    const { name, description, imageSrc, demoLink, sourceLink } = props.data;

    return (
        <div className={styles.project}>
            <div className={styles.projectImage}>
                <img className={styles.projectImageImg} src={imageSrc} alt={name + " screenshot"} />
            </div>

            <div className={styles.projectInfo}>
                <h1>{name}</h1>

                <p>{description}</p>

                <div className={styles.buttons}>
                    <Button link={demoLink}>Try It Out</Button>
                    <Button link={sourceLink}>Source Code</Button>
                </div>
            </div>


        </div>
    );
}

export default Project;