import React from 'react';
import Navbar from "./navbar/Navbar";
import styles from './header.module.scss'
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="header__container _container">
                <a href="" className="header__logo">
                    <img className="logo__image" src={logo} alt="logo"/>
                </a>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;