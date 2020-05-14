import * as types from './types';

const addCartItem = (cartItem) => ({
    type: types.ADD_CART_ITEM,
    payload: cartItem
});

const removeCartItem = (cartItemId) => ({
    type: types.REMOVE_CART_ITEM,
    payload: cartItemId
});

export {
    addCartItem,
    removeCartItem
}