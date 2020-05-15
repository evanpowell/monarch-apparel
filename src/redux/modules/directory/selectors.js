import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

const selectDirectorySections = createSelector(
    [selectDirectory],
    (state) => state.directorySections
);

export {
    selectDirectorySections
};
