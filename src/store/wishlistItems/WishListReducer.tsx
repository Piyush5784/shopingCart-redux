import { Add, moveToCart, remove } from "./Constant";
import { Items as AllItems } from "../../lib/AllItems";
import { ItemsType as WishList, actionType } from "../../lib/Types";

type initialStateType = {
  wishList: WishList[];
};

const initialState: initialStateType = {
  wishList: [],
};

export function WishListReducer(
  state = initialState,
  action: actionType
): initialStateType {
  const { type, id } = action;
  const { wishList } = state;

  switch (type) {
    case Add: {
      const filterItem = AllItems.find((i) => i.id === id);

      if (!filterItem) {
        // Item not found in AllItems
        return state;
      }

      const itemAlreadyExists = wishList.find((i) => i.id === id);

      if (itemAlreadyExists) {
        return state;
      }

      return {
        ...state,
        wishList: [...wishList, filterItem],
      };
    }
    case remove: {
      const filterItem = wishList.filter((c) => c.id !== id);

      if (!filterItem) {
        return state;
      }

      return {
        ...state,
        wishList: [...filterItem],
      };
    }

    case moveToCart: {
      const filterItem = wishList.filter((c) => c.id !== id);
      const itemToMove = wishList.find((c) => c.id === id);

      if (!itemToMove) {
        return state;
      }

      return {
        ...state,
        wishList: [...filterItem],
        // cartItems:[]
      };
    }
    default:
      return state;
  }
}
