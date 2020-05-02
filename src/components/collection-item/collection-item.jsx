import React from 'react';

import classes from './collection-item.module.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
    return (
        <div className={classes[`collection-item`]}>
            <div className={classes[`collection-item__image`]}
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
            </div>
            <div className={classes[`collection-item__footer`]}>
                <div className={classes[`collection-item__name`]}>{name}</div>
                <div className={classes[`collection-item__price`]}>{price}</div>
            </div>
        </div>
    )
}

export default CollectionItem;
