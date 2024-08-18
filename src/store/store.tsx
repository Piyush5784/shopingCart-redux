import { combineReducers, createStore } from "redux";
import CartItemsReducer from "./cartItems/cartItemReducer";
import { WishListReducer } from "./wishlistItems/WishListReducer";
import { FilterItemsReducer } from "./FilterItems/FilterItemsReducer";

const rootReducer = combineReducers({
  CartItemsReducer,
  WishListReducer,
  FilterItemsReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
