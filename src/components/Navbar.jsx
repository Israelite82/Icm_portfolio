import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4 md:py-6 relative">
        {/* Logo */}
        <img
          src="/heroImg.png"
          alt="Hero"
          className="w-32 h-12 md:w-45 md:h-13"
        />

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 ml-16"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-10 text-sm text-gray-300 ml-auto mr-20">
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/" className="text-gray-300 hover:text-[-[#473be9]">
              Home
            </Link>
          </li>
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/about" className="text-gray-300 hover:text-[-[#473be9]">
              About
            </Link>
          </li>
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link
              to="/research"
              className="text-gray-300 hover:text-[-[#473be9]"
            >
              Research
            </Link>
          </li>
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/blog" className="text-gray-300 hover:text-[-[#473be9]">
              Blog
            </Link>
          </li>
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/books" className="text-gray-300 hover:text-[-[#473be9]">
              Books
            </Link>
          </li>
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/teaching" className="text-gray-300 hover:text-[#473be9]">
              Teaching
            </Link>
          </li>
        </ul>

        {/* Subscribe Button - Always Visible */}
        <button className="bg-[#6B0F1A] hover:bg-red-800 transition px-4 md:px-5 py-2 md:py-3 rounded-lg text-xs md:text-sm">
          Subscribe
        </button>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Mobile Menu Drawer - Slides from Left */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#0b1227]/50 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close X Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300"
          >
            ×
          </button>

          <div className="flex flex-col p-6 pt-20 gap-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-[#F2E8D5] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-[#F2E8D5] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/research"
              className="text-gray-300 hover:text-[#F2E8D5] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Research
            </Link>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-[#F2E8D5] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/books"
              className="text-gray-300 hover:text-[#F2E8D5] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Books
            </Link>
            <Link
              to="/teaching"
              className="text-gray-300 hover:text-[#F2E8D5] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Teaching
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
