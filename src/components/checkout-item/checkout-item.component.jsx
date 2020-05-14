import React from 'react';

import classes from './checkout-item.module.scss';

const CheckoutItem = ({cartItem: { imageUrl, name, price, quantity }}) => {
    return (
        <div className={classes[`checkout-item`]}>
            <div className={classes[`checkout-item__content`]}>
                <img className={classes[`checkout-item__image`]} src={imageUrl} alt={name} />
            </div>
            <span className={classes[`checkout-item__content`]}>{ name }</span>
            <span className={classes[`checkout-item__content`]}>{ quantity }</span>
            <span className={classes[`checkout-item__content`]}>{ price }</span>
            <button className={classes[`checkout-item__content`]} aria-label="remove item">
                &#10005;
            </button>
        </div>
    );
};

// const mapDispatchToProps = (dispatch) => {
    
// }

export default CheckoutItem;
