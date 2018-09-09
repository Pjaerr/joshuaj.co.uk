import React from 'react';

import Link from 'gatsby-link'

import styles from './Header.module.scss';


const Header = (props) =>
{
    return (
        <Link className={styles.link} to="/">
            <h1 className={styles.header}>
                {props.children}
            </h1>
        </Link>
    );
}

export default Header;