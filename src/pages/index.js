import React from 'react'

import Button from '../components/Button/Button';

import styles from './index.module.scss';

const Homepage = () => 
{
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <h1 className={styles.name}>Josh Jackson</h1>

        <div className={styles.buttons}>
          <Button route="/projects">Projects</Button>
          <Button route="/aboutme">About Me</Button>
        </div>

      </div>
    </div>
  );
}

export default Homepage
