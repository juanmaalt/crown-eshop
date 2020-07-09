import {createSelector} from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsQty = createSelector(
    [selectCartItems],
    (cartItems) =>  
        cartItems.reduce(
            (accumulator, item) => accumulator + item.quantity, 0
        )
)

export const selectHiddenStatus = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    (cartItems) =>  
        cartItems.reduce(
            (accumulator, item) => accumulator + item.quantity * item.price, 0
        )
)