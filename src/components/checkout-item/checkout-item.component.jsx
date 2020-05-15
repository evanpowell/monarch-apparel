import React from 'react';
import { connect } from 'react-redux';

import { cartActions } from '../../redux/modules/cart';

import classes from './checkout-item.module.scss';

const CheckoutItem = ({ cartItem, removeCartItem, addCartItem, decrementCartItem }) => {
    const { imageUrl, name, quantity, price, id } = cartItem;

    const decrement = () => {
        if (quantity <= 0) {
            return;
        }

        decrementCartItem(id);
    };

    return (
        <div className={classes[`checkout-item`]}>
            <div className={classes[`checkout-item__content`]}>
                <img className={classes[`checkout-item__image`]} src={imageUrl} alt={name} />
            </div>
            <span className={classes[`checkout-item__content`]}>{ name }</span>
            <div className={`${classes[`checkout-item__content`]} ${classes[`checkout-item__quantity-container`]}`}>
                <button
                    style={{
                        opacity: quantity > 0 ? '1' : '0'
                    }}
                    className="clear-button"
                    aria-label="decrease item quantity"
                    onClick={decrement}
                >
                    &#10094;
                </button>
                <span className={classes[`checkout-item__quantity`]}>{ quantity }</span>
                <button
                    className="clear-button"
                    aria-label="increase item quantity"
                    onClick={() => addCartItem(cartItem)}
                >
                    &#10095;
                </button>
            </div>
            <span className={classes[`checkout-item__content`]}>${ price * quantity }</span>
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
    removeCartItem: (cartItemId) => dispatch(cartActions.removeCartItem(cartItemId)),
    addCartItem: (cartItem) => dispatch(cartActions.addCartItem(cartItem)),
    decrementCartItem: (cartItemId) => dispatch(cartActions.decrementCartItem(cartItemId))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
