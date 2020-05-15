import React from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import classes from './shop.module.scss';

const ShopPage = () => { 
    return (
        <div className={classes[`shop-page`]}>
            <CollectionsOverview />
        </div>
    )
}

export default ShopPage;
