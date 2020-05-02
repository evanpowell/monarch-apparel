import React from 'react';

import classes from './collection-preview.module.scss';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className={classes[`collection-preview`]}>
            <h1 className={classes[`collection-preview__title`]}>{title.toUpperCase()}</h1>
            <div className={classes[`collection-preview__list-preview`]}>
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
