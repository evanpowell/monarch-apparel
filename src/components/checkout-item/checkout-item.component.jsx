import React from 'react';

import classes from './checkout-item.module.scss';

const CheckoutItem = ({cartItem: { imageUrl, name, price, quantity }}) => {
    return (
        <div className={classes[`checkout-item`]}>
            <div className={classes[`checkout-item__image-container`]}>
                <img src={imageUrl} alt={name} />
            </div>
            <span className={classes[`checkout-item__name`]}>{ name }</span>
            <span className={classes[`checkout-item__quantity`]}>{ quantity }</span>
            <span className={classes[`checkout-item__price`]}>{ price }</span>
            <button className={classes[`checkout-item__remove`]}>
                &#10005;
            </button>
        </div>
    );
};

// const mapDispatchToProps = (dispatch) => {
    
// }

export default CheckoutItem;
