import { combineReducers, createStore } from "redux";
import CartItemsReducer from "./cartItems/cartItemReducer";
import { WishListReducer } from "./wishlistItems/WishListReducer";

const rootReducer = combineReducers({ CartItemsReducer, WishListReducer });

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
