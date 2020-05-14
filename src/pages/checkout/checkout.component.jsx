import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { cartSelectors } from '../../redux/modules/cart';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import classes from './checkout.module.scss';

const CheckoutPage = ({ cartItems, totalPrice }) => {
    return (
        <div>
            CHECKOUT PAGE
            {
                cartItems.map((cartItem) => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
                })
            }
            <div className={classes.total}>${ totalPrice }</div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: cartSelectors.selectCartItems,
    totalPrice: cartSelectors.selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);
