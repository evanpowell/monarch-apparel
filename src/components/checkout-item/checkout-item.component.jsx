import React from 'react';
import { connect } from 'react-redux';

import { cartActions } from '../../redux/modules/cart';

import classes from './checkout-item.module.scss';

const CheckoutItem = ({ cartItem, removeCartItem }) => {
    const { imageUrl, name, quantity, price, id } = cartItem;
    return (
        <div className={classes[`checkout-item`]}>
            <div className={classes[`checkout-item__content`]}>
                <img className={classes[`checkout-item__image`]} src={imageUrl} alt={name} />
            </div>
            <span className={classes[`checkout-item__content`]}>{ name }</span>
            <span className={classes[`checkout-item__content`]}>{ quantity }</span>
            <span className={classes[`checkout-item__content`]}>{ price }</span>
            <button
                className={`${classes[`checkout-item__content`]} clear-button`}
                aria-label="remove item"
                onClick={() => removeCartItem(id)}
            >
                &#10005;
            </button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    removeCartItem: (cartItemId) => dispatch(cartActions.removeCartItem(cartItemId))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
