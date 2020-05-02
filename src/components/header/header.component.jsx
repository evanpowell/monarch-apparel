import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
    return (
        <div className={classes[`header`]}>
            <Link className={classes[`logo-container`]} to="/">
                <Logo />
            </Link>
            <div className={classes[`nav-options`]}>
                {
                    currentUser ? 
                    (
                        <div className={`${classes[`option`]} ${classes[`option--user`]}`}>
                            { currentUser.displayName || currentUser.email }
                        </div>
                    ) :
                    null
                }
                <Link className={classes[`option`]} to="/shop">
                    SHOP
                </Link>
                <Link className={classes[`option`]} to="/contact">
                    CONTACT
                </Link>
                { currentUser ? 
                    (
                        <Fragment>
                            
                            <div className={classes[`option`]} onClick={() => auth.signOut()}>SIGN OUT</div>
                        </Fragment>
                    ) :
                    (
                        <Fragment>
                            <Link className={classes[`option`]} to="/login">
                                LOGIN
                            </Link>
                            <Link className={classes[`option`]} to="/sign-up">
                                SIGN UP
                            </Link>
                        </Fragment>
                    )
                }
            </div>
        </div>
    )
}

export default Header;
