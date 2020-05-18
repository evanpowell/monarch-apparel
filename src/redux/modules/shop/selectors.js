import { createSelector } from 'reselect';

import { COLLECTION_ID_MAP } from './data';

const selectShop = (state) => state.shop;

const selectCollections = createSelector(
    [selectShop],
    (state) => state.collections
);

const selectCollection = (collectionUrlParam) => (
    createSelector(
        [selectCollections],
        (state) => state.find((collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )
);

export {
    selectCollections,
    selectCollection
};
