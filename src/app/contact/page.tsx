import { Button } from "@/components/ui/button";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center ">
            <h1 className="sm:text-3xl text-2xl font-serif title-font text-mycolorblue mb-4">
              <strong>Contact Us</strong>
            </h1>
            <div className="flex mt-3 mb-12 justify-center">
              <div className="w-24 h-1 rounded-full bg-mycolorblue/90 inline-flex" />
            </div>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form action="https://formspree.io/f/xvgoenad" method="POST">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-mycolorblue"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-mycolorblue2 focus:bg-white focus:ring-2 focus:ring-mycolorblue2/15 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder={"Your name"}
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-mycolorblue"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-mycolorblue2 focus:bg-white focus:ring-2 focus:ring-mycolorblue2/15 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder={"abc@email.com"}
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-mycolorblue"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-mycolorblue2 focus:bg-white focus:ring-2 focus:ring-mycolorblue2/15 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      placeholder={"Enter your message here"}
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <Button className="flex ml-3 mx-auto text-white group w-[120px] bg-mycolorblue2/85 border-0 focus:outline-none hover:bg-mycolorblue rounded">
                    Shop Now
                  </Button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-mycolorblue2">radiyakhan59@gmail.com</a>
                  <p className="leading-normal my-5 text-mycolorblue">
                    Follow me for more updates
                  </p>
                  <span className="inline-flex">
                    <a
                      className="text-gray-800  hover:text-mycolorblue2"
                      target="_blank"
                      href={
                        "https://www.facebook.com/profile.php?id=100083278800324&mibextid=ZbWKwL"
                      }
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      className="ml-3 text-gray-800   hover:text-mycolorblue2"
                      target="_blank"
                      href={"https://www.linkedin.com/in/radiya-khan-133b112ba"}
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      className="ml-3 font-bold text-gray-800 text-base hover:text-mycolorblue2"
                      target="_blank"
                      href={
                        "https://www.instagram.com/radiya._.345?igsh=NzQ5MTZnMTNxN2lv"
                      }
                    >
                      <FiInstagram />
                    </a>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
