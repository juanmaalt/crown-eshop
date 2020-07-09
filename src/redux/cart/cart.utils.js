export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === itemToAdd.id);

    if(existingCartItem){
        return cartItems.map(item =>
            item.id === itemToAdd.id ?
            {...item, quantity: item.quantity + 1}
            : item
        )
    }

    return [...cartItems, {...itemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    if(itemToRemove.quantity>1){
        return cartItems.map(item =>
            item.id === itemToRemove.id ?
            {...item, quantity: item.quantity - 1}
            : item
        )
    }else{
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }
}