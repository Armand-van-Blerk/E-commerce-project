import { createSelector } from "reselect";

// 2types of selectors
// 1st type is called an InputSelector- that doesent use createSelector
// 2nd type is an outputSelector- that does use inputSelectors and createSelector to build themselfs

// 1st type
const selectCart = state => state.cart;
// const selectUser = state => state.user;

// 2nd type
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
