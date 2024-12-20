import { StaticImageData } from "next/image";

export type Product = {
    id:number;
    title: string;
    image?: string[] | StaticImageData | undefined;
    slug: string;
    price:number;
    category:string;
    description:string;
    size:string[];
    qty:number;
};

export type Cart = {
    id:number;
    title:string;
    image?: string | StaticImageData | undefined;
    slug:string;
    price:number;
    category:string;
    size:string;
    qty:number;
    uuid:number | string | undefined;
};

