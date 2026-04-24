"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}       
<div className="flex-shrink-0 flex items-center">
  <Link href="/favicon.ico" className="flex items-center">
    <img
      className="h-10 w-auto" // Adjust height (h-8, h-10, h-12) as needed
      src="/favicon.ico" // Path to your logo in /public
      alt="Nova Paint Logo"
    />
  </Link>
</div>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/colours">Colours</NavLink>
            <NavLink href="/ideas">Decorating Ideas</NavLink>
            <NavLink href="/advice">Expert Advice</NavLink>
            <NavLink href="/where-to-buy">Where to Buy</NavLink>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/colours">Colours</MobileNavLink>
            <MobileNavLink href="/ideas">Decorating Ideas</MobileNavLink>
            <MobileNavLink href="/advice">Expert Advice</MobileNavLink>
            <MobileNavLink href="/where-to-buy">Where to Buy</MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-700 hover:text-blue-800 transition duration-200 font-medium">
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block px-2 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
      {children}
    </Link>
  );
}