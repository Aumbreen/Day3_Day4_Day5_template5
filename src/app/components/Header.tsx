'use client';

import { useState } from 'react';
import { Search, ShoppingCart, Heart, Phone, Mail, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#252B42] text-white flex flex-wrap justify-between items-center px-4 py-2 md:flex-nowrap">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <a href="tel:(225) 555-0118" className="hover:underline">(225) 555-0118</a>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a href="mailto:michelle.rivera@example.com" className="hover:underline">michelle.rivera@example.com</a>
        </div>

        <h6 className="hidden md:block text-sm font-bold">Follow us and get a chance to win 80% off!</h6>

        <div className="flex items-center gap-3">
          <h6 className="text-sm font-bold">Follow Us:</h6>
          <Link href="https://instagram.com" target="_blank"><Instagram className="w-5 h-5" /></Link>
          <Link href="https://youtube.com" target="_blank"><Youtube className="w-5 h-5" /></Link>
          <Link href="https://facebook.com" target="_blank"><Facebook className="w-5 h-5" /></Link>
          <Link href="https://twitter.com" target="_blank"><Twitter className="w-5 h-5" /></Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">Bandage</Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/Contact" className="hover:underline">Contact</Link></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            ☰
          </button>

          {/* Utility Links */}
          <div className="hidden md:flex space-x-4 items-center">
            <Search className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
            <Heart className="w-5 h-5" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-100 p-4">
            <ul className="space-y-3">
              <li><Link href="/" className="block py-2 hover:bg-gray-200">Home</Link></li>
              <li><Link href="/shop" className="block py-2 hover:bg-gray-200">Shop</Link></li>
              <li><Link href="aAbout" className="block py-2 hover:bg-gray-200">About</Link></li>
              <li><Link href="/contact" className="block py-2 hover:bg-gray-200">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
