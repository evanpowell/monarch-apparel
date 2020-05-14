import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { cartSelectors } from '../../redux/modules/cart';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import classes from './checkout.module.scss';

const CheckoutPage = ({ cartItems, totalPrice }) => {
    return (
        <div className={classes[`checkout-page`]}>
            <h1 className={classes[`checkout-title`]}>Checkout</h1>
            <div className={classes[`checkout-header`]}>
                <div className={classes[`checkout-header__header-block`]}>
                    <span>Product</span>
                </div>
                <div className={classes[`checkout-header__header-block`]}>
                    <span>Description</span>
                </div>
                <div className={classes[`checkout-header__header-block`]}>
                    <span>Quantity</span>
                </div>
                <div className={classes[`checkout-header__header-block`]}>
                    <span>Price</span>
                </div>
                <div className={classes[`checkout-header__header-block`]}>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
                })
            }
            <div className={classes[`checkout-total`]} aria-label="checkout total price">${ totalPrice }</div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: cartSelectors.selectCartItems,
    totalPrice: cartSelectors.selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);
