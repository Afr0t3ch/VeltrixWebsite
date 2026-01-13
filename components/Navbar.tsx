"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-veltrix-green to-veltrix-yellow rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-veltrix-dark">V</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">Veltrix Digital</span>
              <span className="text-xs text-gray-400">Powering Digital Possibilities</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-veltrix-green transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-veltrix-green transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-veltrix-green transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-veltrix-green transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-veltrix-green transition-colors">
              Contact
            </Link>
            <Link 
              href="/dashboard" 
              className="px-6 py-2 bg-veltrix-green text-veltrix-dark rounded-lg font-semibold hover:shadow-glow transition-all"
            >
              Dashboard
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 pb-4">
            <Link href="/" className="hover:text-veltrix-green transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="hover:text-veltrix-green transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/services" className="hover:text-veltrix-green transition-colors" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-veltrix-green transition-colors" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-veltrix-green transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link 
              href="/dashboard" 
              className="px-6 py-2 bg-veltrix-green text-veltrix-dark rounded-lg font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </nav>
        )}
      </div>

      {/* Gradient Bar */}
      <div className="h-1 bg-gradient-to-r from-veltrix-red via-veltrix-yellow to-veltrix-green"></div>
    </header>
  );
}
