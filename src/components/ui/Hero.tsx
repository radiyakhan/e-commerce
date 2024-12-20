import React from "react";
import { Button } from "./button";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-[83vh] custom-img bg-fixed bg-center bg-no-repeat ">
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-serif">
              <span className="text-mycolorblue2">
                <strong>Welcome</strong>
              </span>
              <strong> Girls</strong>
            </h1>
            <p className="mb-5 text-base">
              Upgrade your wardrobe with our timeless, stylish pieces designed
              for every occasion. Crafted with quality and comfort in mind, our
              collection moves with you throughout the day. From work to
              weekends, find versatile looks that fit your lifestyle. Shop now
              and experience fashion that feels as good as it looks.
            </p>
            <Button className="outline outline-offset-3 outline-2 text-lg group hover:rounded-full duration-300 hover:outline-mycolorblue2 hover:animate-bounce hover:outline-4">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
