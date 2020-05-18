import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../../components/collection/collection.component';

import classes from './shop.module.scss';

const ShopPage = ({ match }) => { 
    return (
        <div className={classes[`shop-page`]}>
            <Route exact path={match.path} component={CollectionsOverview} />
            <Route path={`${match.path}/:category`} component={Collection}/>
        </div>
    )
}

export default ShopPage;
