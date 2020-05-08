import * as types from './types';

const addCartItem = (cartItem) => ({
    type: types.ADD_CART_ITEM,
    payload: cartItem
});

export {
    addCartItem
}