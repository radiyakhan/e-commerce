import Bestselling from "@/components/ui/Bestselling";
import Categories from "@/components/ui/Categories";
import Deal from "@/components/ui/Deal";
import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Deal/>
      <Categories/>
      <Bestselling/>
    </div>
  );
}
