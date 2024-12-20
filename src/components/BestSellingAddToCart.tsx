"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { MdShoppingCartCheckout } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { addToCart } from "@/app/store/features/cart";
import { toast, ToastContainer, Zoom } from "react-toastify";

const BestSellingAddToCart = ({ slug }: { slug: string }) => {
  const products = useAppSelector((state) => state.product).find(
    (val) => val.slug == slug
  );
  const dispatch = useAppDispatch();
  const [cartItem, setCartItem] = useState({
    id: products?.id,
    title: products?.title,
    image: products?.image,
    slug: products?.slug,
    price: products?.price,
    category: products?.category,
    size: products?.size[0],
    qty: products?.qty,
  });
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
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className=" text-white group bg-mycolorblue2/85 border-0 focus:outline-none hover:bg-mycolorblue rounded">
            <MdShoppingCartCheckout className="group group-hover:animate-bounce duration-300" />
            Add to cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-44">
          <div className="flex items-center border-gray-100 ">
            <div className="flex items-center">
              <span className="mr-3 text-mycolorblue/80">Size</span>
              <div className="relative">
                <select
                  onChange={(e) =>
                    setCartItem({ ...cartItem, size: e.target.value })
                  }
                  className="rounded border appearance-none border-mycolorblue/60  focus:outline-none focus:ring-2 focus:ring-mycolorblue/50 focus:border-mycolorblue2 text-base pl-3 pr-10"
                >
                  {products?.size.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center  text-mycolorblue2 pointer-events-none flex items-center justify-center">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
          </div>
          <div onClick={notify} className="w-fit">
            <Button
              onClick={() => dispatch(addToCart(cartItem))}
              className=" text-white w-full mt-2 group bg-mycolorblue2/85 border-0 focus:outline-none hover:bg-mycolorblue rounded"
            >
              <MdShoppingCartCheckout className="group group-hover:animate-bounce duration-300" />
              Add to cart
            </Button>
          </div>
          
        </PopoverContent>
      </Popover>
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
    </div>
  );
};

export default BestSellingAddToCart;
