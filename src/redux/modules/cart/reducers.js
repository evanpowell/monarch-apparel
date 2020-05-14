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
        
        case types.REMOVE_CART_ITEM:
            return utils.removeItemFromCart(state, action.payload);
            
        default:
            return state;
    }
};

export default combineReducers({
    cartItems: cartItemsReducer
});
