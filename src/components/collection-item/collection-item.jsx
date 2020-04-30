import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
    return (
        <div className="collection-item">
            <div className="collection-item__image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
            </div>
            <div className="collection-item__footer">
                <div className="collection-item__name">{name}</div>
                <div className="collection-item__price">{price}</div>
            </div>
        </div>
    )
}

export default CollectionItem;