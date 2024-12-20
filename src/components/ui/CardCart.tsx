"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addCart, delItem, subCart } from "@/app/store/features/cart";

const CardCart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <>
      {cart.length >= 1 &&
        cart.map((Item: any, i) => (
          <div
            key={i}
            className="flex bg-mycolorblue/5 mb-3 w-full  rounded-2xl p-10"
          >
            {/* image */}
            <Image
              src={Item.image}
              alt={Item.title}
              width={80}
              height={80}
              className="lg:w-[100px] lg:h-[100px] w-10 h-[50px] "
            />
            <div className="flex px-5 justify-between items-center w-full">
              <div>
                <h2 className="text-sm font-semibold leading-none line-clamp-1">
                  {Item.title}
                </h2>
                <p className="mt-2 text-sm leading-none font-semibold line-clamp-1">
                  Size:&nbsp;<span>{Item.size}</span>
                </p>
                {/* quantity */}
                <div className="mt-2 flex items-center">
                  <Button onClick={() => dispatch(subCart(Item))} className="flex w-12 h-9 text-white group  bg-mycolorblue2/85 border-0 focus:outline-none hover:bg-mycolorblue ">
                    <FiMinus />
                  </Button>
                  <div className="mr-2 ml-2  scroll-m-20 text-sm font-semibold tracking-tight">
                    {Item.qty}
                  </div>
                  <Button
                    onClick={() => dispatch(addCart(Item))}
                    className=" text-white w-12 h-9 group  bg-mycolorblue2/85 border-0 focus:outline-none hover:bg-mycolorblue "
                  >
                    <FiPlus />
                  </Button>
                </div>
              </div>
              {/* proce and delete */}
              <div className="flex flex-col items-end gap-4">
                <h3 className="text-sm font-semibold leading-none line-clamp-1">
                  <span>Price:&nbsp;</span>Rs.{Item.price}
                </h3>
                <FaTrash
                  onClick={() => dispatch(delItem(Item.uuid))}
                  className="text-base font-semibold ml-auto mt-2 hover:text-red-500 leading-none line-clamp-1 text-mycolorblue cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardCart;
