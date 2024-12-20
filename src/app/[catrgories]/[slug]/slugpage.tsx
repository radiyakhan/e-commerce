"use client"
import { Button } from "@/components/ui/button";
import SlugComponents from "@/components/ui/SlugComponents";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useState } from "react";
import { addToCart } from "@/app/store/features/cart";
import AddToCartToastify from "@/components/AddToCartToastify";
import Link from "next/link";

const Slugpage = ({params}:{params:{slug:string}}) => {
    const products = useAppSelector((state)=>state.product)
  const slug = products.filter((val)=>val.slug == params.slug);
  const dispatch = useAppDispatch();
  const [cartItem, setCartItem] = useState({
        id:slug[0].id,
        title: slug[0].title,
        image: slug[0].image,
        slug: slug[0].slug,
        price:slug[0].price,
        category:slug[0].category,
        size:slug[0].size[0],
        qty: slug[0].qty,
  });
  return (
    <div>
        <div className="body-font overflow-hidden">
      <div className="container px-2 py-20 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <SlugComponents image={slug[0].image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-5 ">
            <h2 className="text-xs title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-mycolorblue text-4xl title-font font-medium mb-2">
              {slug[0].title}
            </h1>
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-mycolorblue2"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-mycolorblue2"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-mycolorblue2"
                />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-mycolorblue2"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-mycolorblue2"
              />
            </div>
            <p className="leading-relaxed mt-2 mb-5">
              {slug[0].description}
            </p>
            <div className="flex mt-4 items-center border-gray-100 ">
              <div className="flex items-center">
                <span className="mr-3 text-mycolorblue/80">Size</span>
                <div className="relative">
                  <select onChange={(e)=>setCartItem({...cartItem, size:e.target.value})} className="rounded border appearance-none border-mycolorblue/60  focus:outline-none focus:ring-2 focus:ring-mycolorblue/50 focus:border-mycolorblue2 text-base pl-3 pr-10">
                  {slug[0].size.map((item,i)=>(
                    <option key={i}>{item}</option>
                ))}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center  text-mycolorblue2 pointer-events-none flex items-center justify-center">
                    <IoIosArrowDown />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-mycolorblue/80">Quantity</span>
              <Button onClick={()=>setCartItem({...cartItem, qty: cartItem.qty <= 1 ? 1: --cartItem.qty})} className="flex ml-3 text-white group lg:w-[96px] w-[98px] bg-mycolorblue2/85 border-0 focus:outline-none hover:bg-mycolorblue rounded">
                <FiMinus />
                Less
              </Button>
              <div className="mr-2 ml-2 scroll m-10 text-base font-semibold tracking-tighter">
                {cartItem.qty}
              </div>
              <Button onClick={()=>setCartItem({...cartItem, qty: ++cartItem.qty})} className=" text-white  group lg:w-[104px] w-[105px] bg-mycolorblue2/85 border-0 focus:outline-none hover:bg-mycolorblue rounded">
                <FiPlus />
                Add
              </Button>
            </div>

            <div className="divider"></div>
            <div className="flex w-[300px]">
              <span className="title-font mt-2 font-medium text-base text-gray-900">
                Rs.{cartItem.price * cartItem.qty}
              </span>
              {/* <Button onClick={()=> dispatch(addToCart(cartItem))} className=" text-white ml-2 group lg:w-full w-full bg-mycolorblue2/85 border-0 focus:outline-none hover:bg-mycolorblue rounded">
                <MdShoppingCartCheckout className="group group-hover:animate-bounce duration-300" />
                Add to cart
              </Button> */}
              <AddToCartToastify cartItem={cartItem}/>
              <Link href={'/payment'}>
              <Button className="flex ml-3 text-white group lg:w-full w-full bg-mycolorblue2/85 border-0 focus:outline-none hover:bg-mycolorblue rounded">
                <IoBagHandleOutline className="group group-hover:animate-bounce duration-300" />
                Shop Now
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Slugpage
