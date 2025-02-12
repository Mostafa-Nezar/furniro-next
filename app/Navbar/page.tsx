"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Search } from "lucide-react";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isSubscribed = true;

  function SubscribeIcon() {
    return !isSubscribed ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M20 12V7h2v6h-2m0 4h2v-2h-2m-10-2c2.67 0 8 1.34 8 4v3H2v-3c0-2.66 5.33-4 8-4m0-9a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1m0-9A2.1 2.1 0 0 0 7.9 8a2.1 2.1 0 0 0 2.1 2.1A2.1 2.1 0 0 0 12.1 8A2.1 2.1 0 0 0 10 5.9"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ai ai-PersonCheck"
      >
        <circle cx="12" cy="7" r="5" />
        <path d="M17 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7" />
        <path d="M17 16.5l1.5 1.5 2.5-3" />
      </svg>
    );
  }

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-black text-2xl font-bold">
          <Image src={"/images/logo.jpg"} alt="" width={50} height={50} />
        </span>
        <span className="text-black text-3xl poppins-bold">Furniro</span>
      </div>

      {/* Hamburger Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden navbar-toggler text-black border-4 rounded-lg p-1 px-3 border-black"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="text-black">
          <svg
            width="20"
            height="26"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </span>
      </button>

      {/* Links - Desktop */}
      <ul
        className={`md:flex space-x-6 text-lg font-medium absolute md:static top-16 left-0 w-full md:w-auto bg-white shadow-md md:shadow-none md:p-0 p-4 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link href="/" className="text-red-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop" className="text-black hover:text-gray-600">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-black hover:text-gray-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-black hover:text-gray-600">
            Contact
          </Link>
        </li>
      </ul>
{/* Links - Mobile */}
<ul
  className={`md:hidden flex flex-col items-center gap-4 absolute top-20 left-0 w-full bg-white shadow-md p-4 transition-all ${
    isOpen ? "block" : "hidden"
  }`}
>
  <li>
    <Link href="/" className="text-red-300 text-lg poppins hover:text-gray-600">
      Home
    </Link>
  </li>
  <li>
    <Link href="/shop" className="text-black text-lg poppins hover:text-gray-600">
      Shop
    </Link>
  </li>
  <li>
    <Link href="/about" className="text-black text-lg poppins hover:text-gray-600">
      About
    </Link>
  </li>
  <li>
    <Link href="/contact" className="text-black text-lg poppins hover:text-gray-600">
      Contact
    </Link>
  </li>
</ul>

      {/* Icons - Desktop */}
      <div className="hidden md:flex items-center gap-6 relative">
        <SubscribeIcon />
        <Search className="w-5 h-5 text-black cursor-pointer" />
        <Heart className="w-5 h-5 text-black cursor-pointer" />
        <div className="relative">
          <ShoppingCart className="w-5 h-5 text-black cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            42
          </span>
        </div>
      </div>

      {/* Icons - Mobile */}
      <div
        className={`md:hidden flex flex-col items-center gap-4 absolute top-64 left-0 w-full bg-white shadow-md p-4 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <SubscribeIcon />
        <Search className="w-5 h-5 text-black cursor-pointer" />
        <Heart className="w-5 h-5 text-black cursor-pointer" />
        <div className="relative">
          <ShoppingCart className="w-5 h-5 text-black cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            42
          </span>
        </div>
      </div>
    </nav>
  );
}
