import { Add, decreaseQuantity, Remove } from "./Constant";
import { Items as AllItems } from "../../lib/AllItems";

type CartItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  quantity: number;
};

type initialStateType = {
  cartItems: CartItem[];
};

const initialState: initialStateType = {
  cartItems: [],
};

type actionType = {
  type: string;
  id: number;
};

function CartItemsReducer(
  state = initialState,
  action: actionType
): initialStateType {
  const { type, id } = action;
  const { cartItems } = state;

  switch (type) {
    case Add: {
      const filterItem = AllItems.find((i) => i.id === id);

      if (filterItem) {
        const itemAlreadyExists = cartItems.find((i) => i.id === id);
        if (itemAlreadyExists) {
          const updatedCartItems = cartItems.map((cI) =>
            cI.id === id ? { ...cI, quantity: cI.quantity + 1 } : cI
          );
          return {
            ...state,
            cartItems: updatedCartItems,
          };
        }
        return {
          ...state,
          cartItems: [...state.cartItems, { ...filterItem, quantity: 1 }],
        };
      }
      return state;
    }
    case Remove: {
      const items = cartItems.filter((c) => c.id !== id);
      return {
        ...state,
        cartItems: items,
      };
    }
    case decreaseQuantity: {
      const filterItem = cartItems.find((i) => i.id === id)?.quantity;
      const updatedCartItems = cartItems.filter((c) => c.id != id);

      if (filterItem == 1) {
        return {
          ...state,
          cartItems: [...updatedCartItems],
        };
      } else {
        const newUpdatedCartItems = cartItems.map((cI) =>
          cI.id === id ? { ...cI, quantity: cI.quantity - 1 } : cI
        );
        return {
          ...state,
          cartItems: [...newUpdatedCartItems],
        };
      }
    }

    default:
      return state;
  }
}

export default CartItemsReducer;
