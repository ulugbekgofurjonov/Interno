"use client";

import Link from "next/link";
import { navLinks } from "@/data/navLinks";
import React, { useState } from "react";
import Container from "../ui/Container";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      data-aos="fade-down"
      className="bg-white shadow-sm sticky top-0 z-50 py-4"
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="">
            <img
              src="/Images/logo.png"
              alt="Interno Logo"
              className="w-32 md:w-40 lg:w-48 h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-[#292F36] hover:text-[#c19a6b] transition-colors font-jost font-normal text-[20px]"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // X icon (close)
              <svg
                className="w-6 h-6 transition-transform duration-300 rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon (menu)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`
            md:hidden border-t border-gray-100
            transition-all duration-300 ease-in-out
            overflow-hidden
            ${isOpen ? "max-h-96 opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"}
          `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="block py-3 text-gray-600 hover:text-[#c19a6b] transition-colors font-sans"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
};

export default Header;
