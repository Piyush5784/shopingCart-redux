import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartItem } from "./Pages/CartItems/CartItem.tsx";
import Home from "./Pages/Home/Home.tsx";
import { Wishlist } from "./Pages/Wishlist/Wishlist.tsx";
import Layout from "./components/Navbar.tsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "cartItems",
          element: <CartItem />,
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
