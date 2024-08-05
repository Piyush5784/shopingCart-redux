// type ItemProp = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// };

// export default function HomeCart({ item }: { item: ItemProp }) {
//   return (
//     <>
//       <div
//         key={item.title}
//         className="max-w-sm bg-white border flex flex-col justify-center items-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//       >
//         <a href="#">
//           <img
//             className="rounded-t-lg h-[300px] w-[200px]"
//             src={item.image}
//             alt={item.title}
//           />
//         </a>
//         <div className="p-5">
//           <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//               {item.title}
//             </h5>
//           </a>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//             {item.description.slice(0, 40)}
//           </p>
//           <div className="flex gap-5 ">
//             {cartItems.find((c) => c.id === item.id) ? (
//               <button
//                 className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 onClick={() => navigate("/cartItems")}
//               >
//                 Go to Cart
//                 <svg
//                   className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </button>
//             ) : (
//               <button
//                 className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 onClick={(e) => addToCartHandler(e, item.id)}
//               >
//                 Add to cart
//                 <svg
//                   className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </button>
//             )}

//             {wishListItems.find((c) => c.id === item.id) ? (
//               <button onClick={(e) => removeFromWishlistHandler(e, item.id)}>
//                 <FaStar size={30} className="text-yellow-400" />
//               </button>
//             ) : (
//               <button onClick={(e) => addToWishListHandler(e, item.id)}>
//                 <CiStar size={30} className="text-yellow-300" />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>{" "}
//     </>
//   );
// }
