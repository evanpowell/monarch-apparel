import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.items
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

export {
    selectCartItems,
    selectCartItemsCount
};
