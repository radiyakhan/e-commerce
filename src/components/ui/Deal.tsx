import Image from "next/image";
import React from "react";
import img1 from "../../../public/deal1.jpg"
import img2 from "../../../public/deal2.jpg"
import img3 from "../../../public/deal3.jpg"

const Deal = () => {
  return (
    <div >
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-serif title-font text-mycolorblue mb-4">
          <strong>Mega Deals</strong>
        </h1>
        <div className="flex mt-3 justify-center">
          <div className="w-24 h-1 rounded-full bg-mycolorblue/90 inline-flex"></div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
  <div className="container px-5 pb-16 mx-auto">
    <div className="flex flex-col">
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image className="object-cover opacity-70 object-center h-full w-full"
          alt="deal"
          src={img1}/>
        </div>
        
      </div>

      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image className="object-cover opacity-70 object-center h-full w-full"
          alt="deal"
          src={img2}/>
        </div>
      </div>


      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image className="object-cover opacity-70 object-center lg:h-full w-full"
          alt="deal"
          src={img3}/>
        </div>
      </div>

    </div>
  </div>
</section>


    </div>
  );
};

export default Deal;
