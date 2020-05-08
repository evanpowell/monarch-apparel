import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as CartImage } from '../../assets/cart.svg';
import { cartSelectors } from '../../redux/modules/cart';

import classes from './cart-icon.module.scss';

const CartIcon = ({ itemCount }) => {
    return (
        <div className={classes[`icon-container`]}>
            <CartImage className={classes[`cart-icon`]} />
            <span className={classes[`cart-item-count`]}>{ itemCount }</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemCount: cartSelectors.selectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartIcon);
