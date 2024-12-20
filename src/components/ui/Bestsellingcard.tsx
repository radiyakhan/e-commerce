import React from 'react'
import Image from "next/image";
import { Button } from "./button";
import { IoBagHandleOutline } from "react-icons/io5";
import Link from 'next/link';
import BestSellingAddToCart from '../BestSellingAddToCart';

const Bestsellingcard = ({
    src,
    alt,
    title,
    description,
    price,
    category,
    slug,
}:{
    src:string
    alt:string
    title:string
    description:string
    price:number
    category:string
    slug:string

}) => {
  return (
    <div>
        <div className="text-gray-600 body-font overflow-hidden">
            <div className="container pt-16">
              <div>
              <Link href={`/${category}/${slug}`}>
                <Image
                  src={src}
                  alt={alt}
                  width={250}
                  height={330}
                  className=" h-[330px] object-center hover:scale-105 hover:duration-300 rounded"
                  />
                  </Link>
                <div className="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0">
                  {title &&
                  <h1 className="text-mycolorblue text-xl title-font font-medium mb-1">
                  {title}
                </h1>}
                  {description &&
                  <p className="leading-relaxed line-clamp-1 text-[14px] w-[250px]">
                  {description}
                </p>}

                  <div className="flex flex-col w-[300px]">
                    {price &&
                    <span className="title-font mb-2 mt-2 font-medium text-base text-gray-900">
                    Rs.{price}
                  </span>}
                    <div className='flex '>
                    <div >
                    <BestSellingAddToCart slug={slug}/>
                    </div>
                    <Link href={'/payment'}>
                    <Button  className="flex ml-3 text-white group w-[120px] bg-mycolorblue2/85 border-0 focus:outline-none hover:bg-mycolorblue rounded">
                    <IoBagHandleOutline className="group group-hover:animate-bounce duration-300" />
                      Shop Now
                    </Button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </div>
  )
}

export default Bestsellingcard
