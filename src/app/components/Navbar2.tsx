'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { UserPlus } from 'lucide-react';
import Link from 'next/link';
import LoginForm from './Login'; // Import the LoginForm component

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);  // Toggle modal state
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-between items-center px-6 lg:px-16 h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h3 className="font-Montserrat font-semibold text-xl">Bandage</h3>
          </div>

          {/* Menu Links */}
          <ul className="flex space-x-6 font-Montserrat text-sm text-gray-600 font-semibold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <ChevronRight />
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            {/* Login Button */}
            <button
              onClick={toggleLoginModal}
              className="bg-white text-blue-400 text-center font-semibold"
            >
              sign up
            </button>
            <UserPlus />
            <button className="w-[214px] h-[52px] bg-blue-400 rounded-lg flex items-center justify-between px-4 py-2 text-white font-semibold">
              Become a Member
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-4">
            <h3 className="font-Montserrat font-semibold text-xl">Bandage</h3>
          </div>

          {/* Hamburger Menu Button */}
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="bg-gray-100 text-black flex flex-col items-center py-4 space-y-3">
            <ul className="space-y-2 font-Montserrat text-base">
              <li>
                <Link href="/">Home</Link>
              </li>
              <ChevronRight />
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <button onClick={toggleMenu} className="text-sm text-gray-600 font-Montserrat">
              - Close Menu -
            </button>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full">
            {/* Pass toggleLoginModal as prop to LoginForm */}
            <LoginForm toggleLoginModal={toggleLoginModal} />
          </div>
        </div>
      )}
    </>
  );
}
