"use client";
import { Button } from "@/components/ui/button";
import CardCart from "@/components/ui/CardCart";
import { useAppSelector } from "../store/hooks";

const CardPage = () => {
  const cart = useAppSelector((state) => state.cart);
  const total = cart.reduce((total, ary) => {
    return total + (ary.price  * ary.qty);
  }, 0);
  return (
    <div>
      <div className="grid lg:grid-cols-3 mr-4 grid-cols-1">
        {/* item */}
        <div className="ml-4 col-span-2">
          <CardCart />
        </div>
        {/* summary */}
        <div className="bg-slate-300 p-5 ml-4 rounded-xl">
          {/* heading */}
          <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-mycolorblue uppercase">
            Order Summary
          </h2>
          {/* divider */}
          <div className="divider mt-0 mb-1"></div>
          {/* prices */}
          <div className="text-sm font-medium tracking-tight text-black">
            <div className="flex items-center justify-between">
              <h2>Sub Total</h2>
              <h2>Rs. {total}</h2>
            </div>
            {/* delivery */}
            <div className="flex items-center justify-between">
              <h2>Delivery Charges</h2>
              <h2>Rs. TBD</h2>
            </div>
            {/* services */}
            <div className="flex items-center justify-between">
              <h2>Sells Tax</h2>
              <h2>TBD</h2>
            </div>
            {/* divider */}
            <div className="divider mt-0 mb-1"></div>
            {/* Estimated total */}
            <div className="flex items-center font-semibold tracking-tight uppercase justify-between">
              <h2>Total</h2>
              <h2>Rs. {total}</h2>
            </div>
            {/* divider */}
            <div className="divider mt-0 mb-1"></div>
            {/* checkout button */}
            <Button className=" text-white  group w-full bg-mycolorblue2/85 border-0 focus:outline-none hover:bg-mycolorblue rounded">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
