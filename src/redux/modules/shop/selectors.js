import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

const selectCollections = createSelector(
    [selectShop],
    (state) => state.collections
);

const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (state) => Object.keys(state).map((key) => state[key])
)

const selectCollection = (collectionUrlParam) => (
    createSelector(
        [selectCollections],
        (state) => state[collectionUrlParam]
    )
);

export {
    selectCollections,
    selectCollectionsForPreview,
    selectCollection
};
