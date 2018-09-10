import React from 'react';

import styles from './Project.module.scss';

import Button from '../Button/Button';

const Project = (props) =>
{
    const { name, description, imageSrc, demoLink, sourceLink } = props.data;

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2 className={styles.name}>{name}</h2> <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.demoButton}>
                    <Button link={demoLink}>Try It Out</Button>
                </div>
                <div>
                    <Button link={sourceLink}>Source Code</Button>
                </div>
            </div>
        </div>
    );
}

export default Project;