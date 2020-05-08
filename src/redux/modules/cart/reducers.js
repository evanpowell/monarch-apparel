import { combineReducers } from 'redux';
import * as types from './types';
import * as utils from './utils';

/* State Shape
{
    cartItems: cartItem[],
}
*/

const cartItemsReducer = (state = [], action) => {
    switch (action.type) {
        case types.ADD_CART_ITEM:
            return utils.addItemToCart(state, action.payload);
        default:
            return state;
    }
};

const reducer = combineReducers({
    cartItems: cartItemsReducer
});

export default reducer;
