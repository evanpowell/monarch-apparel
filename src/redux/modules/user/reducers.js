import { combineReducers } from 'redux';
import * as types from './types';

/* State Shape
{
    currentUser: {
        id: string
        createdAt: date,
        displayName: string,
        email: string
    },
}
*/

const currentUserReducer = (state = null, action) => {
    switch (action.type) {
        case types.SET_CURRENT_USER:
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    currentUser: currentUserReducer
});
