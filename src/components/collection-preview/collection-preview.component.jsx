import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="collection-preview__title">{title.toUpperCase()}</h1>
            <div className="collection-preview__list-preview">
                {
                    items.slice(0, 4).map(({ id, ...otherItemProps }) => (
                        <CollectionItem key={id} { ...otherItemProps }></CollectionItem>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;
