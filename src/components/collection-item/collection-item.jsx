import React from 'react';
import { connect } from 'react-redux';

import { addCartItem } from '../../redux/modules/cart';

import classes from './collection-item.module.scss';

const CollectionItem = ({ item, addCartItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className={classes[`collection-item`]}>
            <div className={classes[`collection-item__image`]}
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
            </div>
            <div className={classes[`add-to-cart`]}>
                <button className="custom-button custom-button--secondary"
                    onClick={() => addCartItem(item)}>
                    Add to cart
                </button>
            </div>
            <div className={classes[`collection-item__footer`]}>
                <div className={classes[`collection-item__name`]}>{name}</div>
                <div className={classes[`collection-item__price`]}>{price}</div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addCartItem: (cartItem) => dispatch(addCartItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
