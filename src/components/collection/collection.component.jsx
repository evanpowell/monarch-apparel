import React from 'react';
import { connect } from 'react-redux';

import { shopSelectors } from '../../redux/modules/shop';
import CollectionItem from '../collection-item/collection-item.component'

import classes from './collection.module.scss';

const Collection = ({ collection: { title, items } }) => {
    return (
        <div className={classes[`collection`]}>
            <h2 className={classes[`collection__title`]}>{ title }</h2>
            <div className={classes[`collection__items`]}>
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps =  (state, ownProps) => ({
    collection: shopSelectors.selectCollection(ownProps.match.params.category)(state)
});

export default connect(mapStateToProps)(Collection);
