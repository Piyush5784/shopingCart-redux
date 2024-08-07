import { useDispatch } from "react-redux";
import {
  setFilterAtoZ,
  setFilterZtoA,
  toggleCategory,
} from "../store/FilterItems/FilterItemsActions";

export default function Sidebar() {
  const dispatch = useDispatch();

  function filterAtoZHandler() {
    dispatch(setFilterAtoZ());
  }

  function filterZtoAhandler() {
    dispatch(setFilterZtoA());
  }

  function handleCategoryChange(category: string) {
    dispatch(toggleCategory(category));
  }

  return (
    <>
      <div className="border p-10 w-[300px] ">
        <div className="flex gap-2">
          <input type="radio" onChange={filterAtoZHandler} name="sort" />
          sort = A to Z
        </div>
        <div className="flex gap-2">
          <input type="radio" onChange={filterZtoAhandler} name="sort" />
          sort = Z to A
        </div>
        <p className="py-2 font-bold">By Category</p>
        <div className="flex gap-2">
          <input
            type="checkbox"
            onChange={() => handleCategoryChange("men's clothing")}
          />
          Mens Clothing
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            onChange={() => handleCategoryChange("women's clothing")}
          />
          Women Clothing
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            onChange={() => handleCategoryChange("jewelery")}
          />
          Jewelery
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            onChange={() => handleCategoryChange("electronics")}
          />
          Electronics
        </div>
      </div>
    </>
  );
}
