import React from "react";
import { FaRegGrinStars } from "react-icons/fa";
import { MdLockOpen, MdOutlineLocalShipping } from "react-icons/md";
import { PiHeadsetDuotone } from "react-icons/pi";
import { TbTruckReturn } from "react-icons/tb";

const Services = () => {
  return (
    <div>
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-serif title-font text-mycolorblue mb-4">
              <strong>My Services</strong>
            </h1>
            <div className="flex mt-3 justify-center">
              <div className="w-24 h-1 rounded-full bg-mycolorblue/90 inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-mycolorblue2/10 text-mycolorblue2 mb-5 flex-shrink-0">
                <MdOutlineLocalShipping className="w-12 h-12 hover:animate-bounce" />
              </div>
              <div className="flex-grow">
                <h2 className=" text-lg title-font font-medium hover:text-2xl duration-300 text-mycolorblue/90 mb-3">
                  Shipping & Delivery
                </h2>
                <p className="leading-relaxed text-sm text-darkblue/80">
                  We offer fast and reliable shipping options, including
                  standard and expedited delivery. Choose the best option for
                  your needs with clear delivery timelines. Enjoy hassle-free
                  delivery to your doorstep.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-mycolorblue2/10 text-mycolorblue2 mb-5 flex-shrink-0">
                <TbTruckReturn className="w-12 h-12 hover:animate-bounce" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg title-font font-medium  hover:text-2xl duration-300 text-mycolorblue/90 mb-3">
                  Return & Refund
                </h2>
                <p className="leading-relaxed text-base">
                  We make returns and refunds simple and stress-free. If you are
                  not satisfied, return your items easily within our specified
                  return window. Our straightforward process ensures customer
                  satisfaction every time.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-mycolorblue2/10 text-mycolorblue2 mb-5 flex-shrink-0">
                <PiHeadsetDuotone className="w-12 h-12 hover:animate-bounce" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg title-font font-medium hover:text-2xl duration-300 text-mycolorblue/90  mb-3">
                  Customer Support
                </h2>
                <p className="leading-relaxed text-base">
                  Our dedicated customer service team is always ready to help.
                  Whether you have a question, need assistance, or face an
                  issue, we are here to provide prompt solutions. Contact us
                  anytime via chat, email, or phone.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-mycolorblue2/10 text-mycolorblue2 mb-5 flex-shrink-0">
                <FaRegGrinStars className="w-12 h-12 hover:animate-bounce" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg title-font font-medium hover:text-2xl duration-300 text-mycolorblue/90  mb-3">
                  Best Quality
                </h2>
                <p className="leading-relaxed text-base">
                  Discover the finest quality with our 100% authentic products,
                  sourced directly from trusted brands. We guarantee genuine
                  beauty essentials that deliver real results, so you can shop
                  with confidence and peace of mind!
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-mycolorblue2/10 text-mycolorblue2 mb-5 flex-shrink-0">
                <MdLockOpen className="w-12 h-12 hover:animate-bounce" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg title-font font-medium hover:text-2xl duration-300 text-mycolorblue/90  mb-3">
                  Secure Checkout & Payment
                </h2>
                <p className="leading-relaxed text-base">
                  Enjoy a seamless and secure checkout experience with multiple
                  payment methods available. We prioritize your security with
                  encrypted transactions. Shop confidently with secure payment
                  gateways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
