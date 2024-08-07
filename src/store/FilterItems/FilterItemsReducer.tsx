import { Items } from "../../lib/AllItems";
import { ItemsType } from "../../lib/Types";
import { FilterAtoZ, FilterZtoA, ToggleCategory } from "./Constant";

type initialStateType = {
  FilterItems: ItemsType[];
  selectedCategories: Set<string>;
};

const initialState: initialStateType = {
  FilterItems: Items,
  selectedCategories: new Set(),
};

type actionType = {
  type: string;
  payload?: any;
};

export function FilterItemsReducer(state = initialState, action: actionType) {
  const { type, payload } = action;
  const { selectedCategories } = state;

  switch (type) {
    case FilterAtoZ: {
      const filteredItems = [...state.FilterItems].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      return {
        ...state,
        FilterItems: filteredItems,
      };
    }

    case FilterZtoA: {
      const filteredItems = [...state.FilterItems].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      return {
        ...state,
        FilterItems: filteredItems,
      };
    }

    case ToggleCategory: {
      const newCategories = new Set(selectedCategories);
      if (newCategories.has(payload)) {
        newCategories.delete(payload);
      } else {
        newCategories.add(payload);
      }

      const filteredItems = Items.filter(
        (item) => newCategories.size === 0 || newCategories.has(item.category)
      );

      return {
        ...state,
        selectedCategories: newCategories,
        FilterItems: filteredItems,
      };
    }

    default:
      return state;
  }
}
