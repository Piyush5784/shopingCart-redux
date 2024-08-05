import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { RootState } from "../store/store";

export const Navbar = () => {
  // const links = ["Home", "CartItems", "Wishlist"];
  const cartItems = useSelector(
    (state: RootState) => state.CartItemsReducer.cartItems
  );
  const wishListItems = useSelector(
    (state: RootState) => state.WishListReducer.wishList
  );
  return (
    <div className="p-5">
      <Link to={"/"}>
        <button className="px-5 py-3 m-2 bg-[#05204A] rounded-xl text-white">
          Home
        </button>
      </Link>
      <Link to={"/cartitems"}>
        {" "}
        <button className="px-5 py-3 m-2 bg-[#05204A] rounded-xl text-white">
          CartItems <span>{cartItems.length}</span>
        </button>
      </Link>
      <Link to={"/wishlist"}>
        {" "}
        <button className="px-5 py-3 m-2 bg-[#05204A] rounded-xl text-white">
          Wishlist <span>{wishListItems.length}</span>
        </button>
      </Link>

      {/* {links.map((link: string, i: number) => (
        <Link to={`${link === "Home" ? "/" : link.toLowerCase()}`}>
          <button
            key={i}
            className="px-5 py-3 m-2 bg-[#05204A] rounded-xl text-white"
          >
            {link}
          </button>
        </Link>
      ))} */}
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
