import { Add, moveToCart, remove } from "./Constant";

export function addToWishList(id: number) {
  return {
    type: Add,
    id,
  };
}

export function removeFromWishlist(id: number) {
  return {
    type: remove,
    id,
  };
}

export function WishlistItemMoveToCart(id: number) {
  return {
    type: moveToCart,
    id,
  };
}
