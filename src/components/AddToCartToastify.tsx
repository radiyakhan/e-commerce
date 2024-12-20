"use client";
import React from "react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import { Button } from "./ui/button";
import { MdShoppingCartCheckout } from "react-icons/md";
import { addToCart } from "@/app/store/features/cart";
import { useAppDispatch } from "@/app/store/hooks";

const AddToCartToastify = ({ cartItem }: any) => {
  const dispatch = useAppDispatch();
  const notify = () =>
    toast.info("Add to Cart Successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  return (
    <>
    <div className="w-fit" onClick={() => dispatch(addToCart(cartItem))}>
      {/* <button onClick={notify}>Notify!</button> */}
      <Button
        onClick={notify}
        className=" text-white ml-2 group lg:w-full w-full bg-mycolorblue2/85 border-0 focus:outline-none hover:bg-mycolorblue rounded"
      >
        <MdShoppingCartCheckout className="group group-hover:animate-bounce duration-300" />
        Add to cart
      </Button>
    </div>
    <ToastContainer
    position="top-right"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Zoom}
  />
  </>
  );
};

export default AddToCartToastify;
