import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce(
            (count, currentCartItem) => {
                return count + currentCartItem.quantity;
            },
            0
        );
    }
);

const selectCartTotalPrice = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce(
            (total, currentCartItem) => {
                return total + currentCartItem.quantity * currentCartItem.price;
            },
            0
        );
    }
);

export {
    selectCartItems,
    selectCartItemsCount,
    selectCartTotalPrice
};
