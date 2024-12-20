"use client"
import Bestsellingcard from "@/components/ui/Bestsellingcard";
import { useAppSelector } from "../store/hooks";

const Categorypage = ({params}:{params:{catrgories:string}}) => {
    const products = useAppSelector((state)=>state.product)
  const bestSell = products.filter((val)=>val.category == params.catrgories)
  return (
    <div>
      <div className="text-center ">
        <h1 className="sm:text-3xl text-2xl font-serif title-font text-mycolorblue mb-4">
          <strong>{params.catrgories}</strong>
        </h1>
        <div className="flex mt-3 justify-center">
          <div className="w-24 h-1 rounded-full bg-mycolorblue/90 inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-7">
        {bestSell.map((items: any, i) => (
          <Bestsellingcard
            key={i}
            src={items.image[0]}
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            slug={items.slug}
          />
        ))}
      </div>
    </div>
  )
}

export default Categorypage
