"use client"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="font-bold text-lg">MyLogo</div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/ref">ref</Link>
          <Link href="/ReducerForm">ReducerForm</Link>
          <Link href="/Memochangecolor">Memochangecolor</Link>
        </div>
      </div>
    </nav>
  );
}
