import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="nav-options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                <Link className="option" to="/login">
                    LOGIN
                </Link>
                <Link className="option" to="/sign-up">
                    SIGN UP
                </Link>
            </div>
        </div>
    )
}

export default Header;
