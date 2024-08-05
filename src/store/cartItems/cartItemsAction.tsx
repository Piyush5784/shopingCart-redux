import { Add, decreaseQuantity, Remove } from "./Constant";

export const addToCart = (id: number) => {
  return {
    type: Add,
    id,
  };
};

export const removeFromCart = (id: number) => {
  return {
    type: Remove,
    id,
  };
};

export const decreaseQuantityFromCart = (id: number) => {
  return {
    type: decreaseQuantity,
    id,
  };
};
