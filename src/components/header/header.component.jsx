import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import { userSelectors } from '../../redux/modules/user';


import classes from './header.module.scss';

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
                            { currentUser.displayName }
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
                    <div className={classes[`option`]} onClick={() => auth.signOut()}>SIGN OUT</div> :
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
                <Link className={classes[`option`]} to ="/checkout">
                    <CartIcon />
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: userSelectors.selectCurrentUser
});

export default connect(mapStateToProps)(Header);
