import { createSelector } from 'reselect';

const selectCollection = (state) => state.collection;

const selectCollections = createSelector(
    [selectCollection],
    (state) => state.collections
);

export {
    selectCollections
};
