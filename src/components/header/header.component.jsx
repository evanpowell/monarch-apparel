import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import classes from './header.module.scss';

const Header = () => {
    return (
        <div className={classes[`header`]}>
            <Link className={classes[`logo-container`]} to="/">
                <Logo />
            </Link>
            <div className={classes[`nav-options`]}>
                <Link className={classes[`option`]} to="/shop">
                    SHOP
                </Link>
                <Link className={classes[`option`]} to="/contact">
                    CONTACT
                </Link>
                <Link className={classes[`option`]} to="/login">
                    LOGIN
                </Link>
                <Link className={classes[`option`]} to="/sign-up">
                    SIGN UP
                </Link>
            </div>
        </div>
    )
}

export default Header;
