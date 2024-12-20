import Image from 'next/image'
import React from 'react'
import img1 from "../../../public/c1.jpg"
import img2 from "../../../public/c2.jpg"
import img3 from "../../../public/c3.jpg"
import img4 from "../../../public/c4.jpg"
import img5 from "../../../public/c5.jpg"
import img6 from "../../../public/c6.jpg"
import img7 from "../../../public/c7.jpg"
import img8 from "../../../public/c8.jpg"
import Link from 'next/link'

const Categories = () => {
  return (
    <div >
        <div className="text-center mt-10 mb-20">
        <h1 className="sm:text-3xl text-2xl font-serif title-font text-mycolorblue mb-4">
          <strong>Categories</strong>
        </h1>
        <div className="flex mt-3 justify-center">
          <div className="w-24 h-1 rounded-full bg-mycolorblue/90 inline-flex"></div>
        </div>
      </div>


      <section className="text-gray-600 body-font">
  <div className="container px-5 pb-16 mx-auto">
    <div className="flex flex-wrap -m-4">

        {/* 1 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={"/Junaid-Jamshed"} className="block relative h-48 hover:scale-105 hover:duration-300 rounded overflow-hidden">
         <Image alt='j.' src={img1}/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-mycolorblue title-font text-lg font-medium">
            Junaid Jamshed
          </h2>
          <p className="mt-1">Elevate your style with J. Brand where luxury meets comfort in every stitch. Discover the perfect fit for every occasion today!</p>
        </div>
      </div>

        {/* 2 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={"/Alkaram"} className="block relative h-48 hover:scale-105 hover:duration-300 rounded overflow-hidden">
          <Image alt='alkaram' src={img2}/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-mycolorblue title-font text-lg font-medium">
            Alkaram
          </h2>
          <p className="mt-1">Experience timeless elegance with Alkaram exquisite fabrics and designs. Dress in style, comfort, and sophistication every day!</p>
        </div>
      </div>

        {/* 3 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={"/Bonanza-Satrangi"} className="block relative h-48 hover:scale-105 hover:duration-300 rounded overflow-hidden">
          <Image alt='bonanza' src={img3}/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-mycolorblue title-font text-lg font-medium">
            Bonanza Satrangi
          </h2>
          <p className="mt-1">Unveil your unique style with Bonanza Satrangi vibrant collections. Trendy, versatile, and crafted for every occasion!</p>
        </div>
      </div>

        {/* 4 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={"/Gul-Ahmed"} className="block relative h-48 hover:scale-105 hover:duration-300 rounded overflow-hidden">
          <Image alt='gulahmed' src={img4}/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-mycolorblue title-font text-lg font-medium">
            Gul Ahmed
          </h2>
          <p className="mt-1">Embrace elegance and tradition with Gul Ahmed premium fabrics. Unmatched quality and timeless designs, perfect for every season!</p>
        </div>
      </div>

        {/* 5 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={"/Limelight"} className="block relative h-48 hover:scale-105 hover:duration-300 rounded overflow-hidden">
          <Image alt='limelight' src={img5}/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-mycolorblue title-font text-lg font-medium">
            Limelight
          </h2>
          <p className="mt-1">Step into the world of fashion with Limelight stylish and affordable collections. Trendy, chic, and perfect for every wardrobe!</p>
        </div>
      </div>

        {/* 6 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={"/Maria-B"} className="block relative h-48 hover:scale-105 hover:duration-300 rounded overflow-hidden">
          <Image alt='maria' src={img6}/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-mycolorblue title-font text-lg font-medium">
            Maria B
          </h2>
          <p className="mt-1">Indulge in luxury with Maria B exquisite designs and premium fabrics. Redefining elegance, one outfit at a time!</p>
        </div>
      </div>

        {/* 7 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={"/Sana-Safinaz"} className="block relative h-48 hover:scale-105 hover:duration-300 rounded overflow-hidden">
          <Image alt='sana' src={img7}/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-mycolorblue title-font text-lg font-medium">
            Sana Safinaz
          </h2>
          <p className="mt-1">Experience the epitome of luxury with Sana Safinaz stunning collections. Timeless designs that celebrate elegance and sophistication!</p>
        </div>
      </div>

        {/* 8 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={"/Saya"} className="block relative h-48 hover:scale-105 hover:duration-300 rounded overflow-hidden">
          <Image alt='saya' src={img8}/>
        </Link >
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-mycolorblue title-font text-lg font-medium">
            Saya
          </h2>
          <p className="mt-1">Discover the perfect blend of comfort and style with Saya chic collections. Fashion-forward, affordable, and always on trend!</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Categories
