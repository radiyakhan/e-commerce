"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Junaid Jamshed",
    href: "/Junaid-Jamshed",
    description:
      "J. is a leading Pakistani brand known for its fusion of traditional and contemporary styles, offering high-quality apparel and accessories for every occasion.",
  },
  {
    title: "Alkaram",
    href: "/Alkaram",
    description:
      "Alkaram is a premium fashion brand known for its vibrant, high-quality fabrics and elegant designs, offering a perfect blend of tradition and modernity for every occasion.",
  },
  {
    title: "Bonanza Satrangi",
    href: "/Bonanza-Satrangi",
    description:
      "Bonanza Satrangi is a vibrant fashion brand offering a diverse range of stylish and affordable clothing, combining modern trends with traditional craftsmanship for every occasion.",
  },
  {
    title: "Gul Ahmed",
    href: "/Gul-Ahmed",
    description:
      "Gul Ahmed is a leading fashion brand known for its premium fabrics and timeless designs, offering a perfect blend of tradition, elegance, and contemporary style for every season.",
  },
  {
    title: "Lime Light",
    href: "/Limelight",
    description:
      "Limelight is a trendy fashion brand offering stylish, affordable clothing and accessories that blend contemporary designs with everyday comfort.",
  },
  {
    title: "Maria B",
    href: "/Maria-B",
    description:
      "Maria B is a renowned fashion brand offering elegant and chic designs, blending traditional craftsmanship with modern flair for timeless, sophisticated style.",
  },
  {
    title: "Sana-Safinaz",
    href: "/Sana-Safinaz",
    description:
      "Sana Safinaz is a luxury fashion brand known for its timeless elegance, intricate designs, and perfect blend of traditional craftsmanship with modern style.",
  },
  {
    title: "Saya",
    href: "/Saya",
    description:
      "Saya is a contemporary fashion brand offering stylish, sophisticated, and versatile clothing with a perfect blend of modern cuts and traditional elegance.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dresses</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <Link key={component.title}
                href={component.href} legacyBehavior passHref>
                <ListItem  title={component.title}>
                  {component.description}
                </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-mycolorblue/80 hover:text-black focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-black">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
