import React from 'react';

import classes from './cart-icon.module.scss';

import { ReactComponent as CartImage } from '../../assets/cart.svg';

const CartIcon = () => {
    return (
        <div className={classes[`icon-container`]}>
            <CartImage className={classes[`cart-icon`]} />
            <span className={classes[`cart-item-count`]}>0</span>
        </div>
    )
}

export default CartIcon;
