// CONSTANTS
const ADD_CART_ITEM = 'monarch-apparel/cart/ADD_CART_ITEM';

// INITIAL STATE
const initialState = {
    cartItems: []
};

// REDUCER
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
}

// UTILS
const addItemToCart = (cartItems, cartItemToAdd) => {
    let isCartItemExist = false;

    const cartItemsCopy = cartItems.map((cartItem) => {
        if (cartItem.id === cartItemToAdd.id) {
            isCartItemExist = true;
            return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
    });

    if (!isCartItemExist) {
        cartItemsCopy.push({ ...cartItemToAdd, quantity: 1 });
    };

    return cartItemsCopy;
}


// ACTIONS
export const addCartItem = (cartItem) => ({
    type: ADD_CART_ITEM,
    payload: cartItem
});


export default cartReducer;