import React from 'react';

import Link from 'gatsby-link'

import styles from './Button.module.scss';

const Button = (props) =>
{
    //Render a button that links externally or one that links internally (react-router)

    if (props.link !== undefined)
    {
        return (
            <a target="_blank" className={styles.link} href={props.link}>
                <div className={styles.button}>
                    {props.children}
                </div>
            </a>
        );
    }
    else
    {
        return (
            <Link className={styles.link} to={props.route}>
                <div className={styles.button}>
                    {props.children}
                </div>
            </Link>
        );
    }
}

export default Button;