"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-veltrix-red via-veltrix-yellow to-veltrix-green bg-clip-text text-transparent">
                Veltrix Digital
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/" className="hover:text-veltrix-green transition px-3 py-2">
                Home
              </Link>
              <Link href="/services" className="hover:text-veltrix-green transition px-3 py-2">
                Services
              </Link>
              <Link href="/portfolio" className="hover:text-veltrix-green transition px-3 py-2">
                Portfolio
              </Link>
              <Link href="/about" className="hover:text-veltrix-green transition px-3 py-2">
                About
              </Link>
              <Link href="/contact" className="hover:text-veltrix-green transition px-3 py-2">
                Contact
              </Link>
              <Link 
                href="/dashboard" 
                className="bg-veltrix-green text-black px-4 py-2 rounded-lg hover:scale-105 transition"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-veltrix-green focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-glass">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block hover:bg-white/10 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/services" className="block hover:bg-white/10 px-3 py-2 rounded-md">
              Services
            </Link>
            <Link href="/portfolio" className="block hover:bg-white/10 px-3 py-2 rounded-md">
              Portfolio
            </Link>
            <Link href="/about" className="block hover:bg-white/10 px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="/contact" className="block hover:bg-white/10 px-3 py-2 rounded-md">
              Contact
            </Link>
            <Link href="/dashboard" className="block bg-veltrix-green text-black px-3 py-2 rounded-md">
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
