import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa6";
import {
  addToCart,
  decreaseQuantityFromCart,
  removeFromCart,
} from "../../store/cartItems/cartItemsAction";
import { MouseEvent } from "react";
import toast from "react-hot-toast";

export const CartItem = () => {
  const cartItems = useSelector(
    (state: RootState) => state.CartItemsReducer.cartItems
  );
  let total = cartItems.reduce(
    (sum, c) => sum + Math.floor(c.price * c.quantity),
    0
  );
  // const wishListItems = useSelector(
  //   (state: RootState) => state.WishListReducer.wishList
  // );
  const dispath = useDispatch();
  function addToCartHandler(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    id: number
  ) {
    e.preventDefault();
    dispath(addToCart(id));
  }

  // function addToWishListHandler(
  //   e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  //   id: number
  // ) {
  //   e.preventDefault();
  //   dispath(addToWishList(id));
  // }

  function decreaseQuantity(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    id: number
  ) {
    e.preventDefault();
    dispath(decreaseQuantityFromCart(id));
  }

  function removeFromCartHandler(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    id: number
  ) {
    e.preventDefault();
    dispath(removeFromCart(id));
    toast.success("Item removed from cart");
  }
  if (cartItems.length == 0) {
    return (
      <>
        {" "}
        <p className="text-center text-xl font-bold">CartItems</p>;
        <p className="p-5">Cart is empty</p>
      </>
    );
  }
  return (
    <>
      {" "}
      <p className="text-center text-xl font-bold">CartItems</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5">
        {cartItems.map((item) => (
          <>
            <div
              key={item.title}
              className="max-w-sm bg-white border flex flex-col justify-center items-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-lg h-[250px] w-[200px]"
                  src={item.image}
                  alt={item.title}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description.slice(0, 40)}
                </p>
                <div className="flex justify-around">
                  <div className="pb-3">
                    Price : {Math.floor(item.quantity * item.price)}
                  </div>
                  <button
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={(e) => addToCartHandler(e, item.id)}
                  >
                    <FaPlus />
                  </button>
                  <p className="pb-3">Quantity : {item.quantity}</p>

                  {cartItems.find((c) => c.id === item.id)?.quantity === 1 ? (
                    <button
                      className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={(e) => removeFromCartHandler(e, item.id)}
                    >
                      <MdDelete />
                    </button>
                  ) : (
                    <>
                      {" "}
                      <button
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={(e) => decreaseQuantity(e, item.id)}
                      >
                        <FaMinus />
                      </button>
                      <button
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={(e) => removeFromCartHandler(e, item.id)}
                      >
                        <MdDelete />
                      </button>
                    </>
                  )}
                </div>

                {/* {wishListItems.find((c) => c.id === item.id) ? (
                  <button onClick={(e) => addToWishListHandler(e, item.id)}>
                    <FaStar size={30} className="text-yellow-400" />
                  </button>
                ) : (
                  <button onClick={(e) => addToWishListHandler(e, item.id)}>
                    <CiStar size={30} className="text-yellow-300" />
                  </button>
                )} */}
              </div>
            </div>{" "}
          </>
        ))}
      </div>
      <p className="font-bold font-xl pl-5">Total : {total}</p>
    </>
  );
};
