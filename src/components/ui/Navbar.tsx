"use client";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemo } from "./Navlink";
import Image from "next/image";
import logo from "../../../public/logo.jpg";
import { useAppSelector } from "@/app/store/hooks";

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div className="bg-mycolorblue">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="p-0 text- xl lg:hidden">
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <details>
                  <summary>Dresses</summary>
                  <ul className="p-2  w-40">
                    <li>
                      <Link href={"/Junaid-Jamshed"}>J.</Link>
                    </li>
                    <li>
                      <Link href={"/Alkaram"}>Alkaram</Link>
                    </li>
                    <li>
                      <Link href={"/Bonanza-Satrangi"}>Bonanza Satrangi</Link>
                    </li>
                    <li>
                      <Link href={"/Gul-Ahmed"}>Gul Ahmed</Link>
                    </li>
                    <li>
                      <Link href={"/Limelight"}>Lime Light</Link>
                    </li>
                    <li>
                      <Link href={"/Maria-B"}>Maria B</Link>
                    </li>
                    <li>
                      <Link href={"/Sana-Safinaz"}>Sana Safinaz</Link>
                    </li>
                    <li>
                      <Link href={"/Saya"}>Saya</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <Image
            src={logo}
            alt="logo"
            className="hidden lg:block ml-8"
            width={150}
          />
        </div>
        <div className="navbar-center">
          <Image
            src={logo}
            alt="logo"
            className="block lg:hidden"
            width={150}
          />
          <div className="lg:flex hidden text-white font-serif">
            <NavigationMenuDemo />
          </div>
        </div>
        <div className="navbar-end">
          <Link href={"/card"}>
            <div
              tabIndex={0}
              role="button"
              className=" lg:mr-5 text-white cursor-pointer group btn btn-ghost btn-circle hover:bg-mycolorblue2"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cart.length > 0 && (
                  <span className="badge badge-sm indicator-item font-semibold text-mycolorblue2/60  group-hover:text-mycolorblue group-hover:bg-white">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
