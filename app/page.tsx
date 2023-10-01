"use client";

import hero from "./images/hero.png";
import Image from "next/image";
import Logo from "@/components/Logo";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-between">
      {/* Navbar */}
      {/* <nav className="p-4 container "></nav> */}
      <>
        <nav className="bg-white text-slate-900  md:p-4 ">
          <div className="container mx-auto flex justify-between items-center">
            <Logo />

            <div className="hidden md:flex space-x-4">
              <button className="text-white bg-slate-900 px-4 py-2 rounded">
                Login
              </button>
              <button className="text-slate-900 px-4 py-2 rounded border border-slate-900">
                Sign Up
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {/* Replace below with your hamburger icon */}
                <RxHamburgerMenu size={20} />
              </button>
            </div>
          </div>

          {/* Slide-out menu */}
          {menuOpen && (
            <div className="absolute top-0 right-0 w-64 h-full bg-white text-slate-900 md:hidden transition-transform transform translate-x-0 z-10 shadow-lg">
              <div className="flex justify-end">
                <button onClick={() => setMenuOpen(false)} className="p-4">
                  <GrClose />
                </button>
              </div>

              <ul className="flex flex-col space-y-4 p-4">
                <li>
                  <button className="w-full text-left">Login</button>
                </li>
                <li>
                  <button className="w-full text-left">Sign Up</button>
                </li>
              </ul>
            </div>
          )}
        </nav>

        {/* Overlay */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-0"
          ></div>
        )}
      </>

      {/* Hero Section */}
      <div
        className="flex flex-col md:flex-row items-center justify-center container
      "
      >
        {/* Illustration */}
        <div className=" md:w-1/2 mb-8 md:mb-0">
          <Image
            src={hero}
            width={500}
            height={500}
            alt="no"
            className="w-contain"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Welcome to Inaikk!
          </h2>
          <p className="mb-8">
            Connect with strangers through video, voice, or messages. Add tags
            and match with interesting people around the world.
          </p>
          <button className="text-white bg-slate-900 px-4 py-2 rounded">
            Get Started
          </button>
        </div>
      </div>
      <footer className="p-4">
        <div className="flex justify-center">
          <div>{/* Social icons can go here */}</div>
          <div>© {new Date().getFullYear()} Inaikk. All rights reserved.</div>
        </div>
      </footer>

      {/* Footer */}
    </div>
  );
}
