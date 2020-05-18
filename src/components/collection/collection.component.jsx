import React from 'react';
import { connect } from 'react-redux';


import { shopSelectors } from '../../redux/modules/shop';

const Collection = ({ collection }) => {
    console.log('collection', collection);
    return (
        <div>
            COLLECTION
        </div>
    );
};

const mapStateToProps =  (state, ownProps) => ({
    collection: shopSelectors.selectCollection(ownProps.match.params.category)(state)
});

export default connect(mapStateToProps)(Collection);
