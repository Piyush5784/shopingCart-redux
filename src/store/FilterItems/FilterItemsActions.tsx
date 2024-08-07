import { FilterAtoZ, FilterZtoA, ToggleCategory } from "./Constant";

export function setFilterAtoZ() {
  return {
    type: FilterAtoZ,
  };
}

export function setFilterZtoA() {
  return {
    type: FilterZtoA,
  };
}

export function toggleCategory(category: string) {
  return {
    type: ToggleCategory,
    payload: category,
  };
}
