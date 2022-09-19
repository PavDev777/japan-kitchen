import React from 'react';
import styles from './Header.module.scss'
import sushi from '../../assets/sushi lesson 111 .jpg'
import {CartHeaderButton} from "./CartHeaderButton";

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>Япона кухня</h1>
                <CartHeaderButton/>
            </header>
            <div className={styles.image}>
                <img src={sushi} alt="Суши"/>
            </div>
        </>

    );
};

