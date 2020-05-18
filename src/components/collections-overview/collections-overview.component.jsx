import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { collectionSelectors } from '../../redux/modules/shop';
import CollectionPreview from '../collection-preview/collection-preview.component';

import classes from './collections-overview.module.scss';

const CollectionsOverview = ({ collections }) => {
    return (
        <div>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} { ...otherCollectionProps }></CollectionPreview>
                ))
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections: collectionSelectors.selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
