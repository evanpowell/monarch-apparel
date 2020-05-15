import { combineReducers } from 'redux';

import { SHOP_DATA } from './data';

const collectionsReducer = (state = SHOP_DATA, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    collections: collectionsReducer
});
