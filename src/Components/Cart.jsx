import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removefromcart } from "../store/cartSlice";
function Cart() {
  const [price, setprice] = useState(0);
  const cartItems = useSelector((state) => state.cart.items);
  const dispacth = useDispatch();
  const handleremove = (id) => {
    dispacth(removefromcart(id));
  };
  useEffect(() => {
    let sum = 0;
    cartItems.map((item) => {
      sum += item.price;
    });
    setprice(Math.floor(sum));
  }, [cartItems]);
  return (
    <>
      <br />
      {cartItems.map((items,index) => {
        return (
          <div key={index} className="rounded-lg w-2/3">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src={items.image}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {items.title}
                  </h2>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
               
                  <div className="flex items-center space-x-4">
                    <p className="text-lg text-black">${items.price}</p>
                  </div>
                </div>
              </div>
              <button className="h-20" onClick={() => handleremove(items.id)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <div className="h-screen  pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${price}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
