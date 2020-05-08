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
};

export {
    addItemToCart
};
