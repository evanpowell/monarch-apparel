const ADD_CART_ITEM = 'monarch-apparel/cart/ADD_CART_ITEM';


const initialState = {
    cartItems: []
};


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                ...state,
                cartItem: [
                    ...state.cartItems,
                    action.payload
                ]
            };
        default:
            return state;
    }
}

export default cartReducer;

export const addCartItem = (cartItem) => ({
    type: ADD_CART_ITEM,
    payload: cartItem
});