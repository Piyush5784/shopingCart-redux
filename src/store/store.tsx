import { combineReducers, compose, createStore } from "redux";
import CartItemsReducer from "./cartItems/cartItemReducer";
import { WishListReducer } from "./wishlistItems/WishListReducer";
import { FilterItemsReducer } from "./FilterItems/FilterItemsReducer";

const rootReducer = combineReducers({
  CartItemsReducer,
  WishListReducer,
  FilterItemsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());

export type RootState = ReturnType<typeof rootReducer>;
