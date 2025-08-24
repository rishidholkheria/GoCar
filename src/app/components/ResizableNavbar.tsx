"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ onScrollTo }: { onScrollTo: (section: string) => void }) => {
  const navItems = [
    { name: "About Us", section: "about" },
    { name: "Find your Ride", section: "fleet" },
    { name: "Blogs", link: "/blogs" },
    { name: "Travel Deals", section: "holidays" },
    { name: "Contact Us", section: "contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-md border-b border-white/10"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <div className="text-white font-bold text-xl tracking-wider h-full">
          <img src="/assets/gocar-logo.png" alt="GOCCAR" className="h-10" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-white text-sm font-medium">
          {navItems.map((item, idx) =>
            item.link ? (
              <Link
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition px-4 py-2 rounded-xl hover:bg-white/10 hover:backdrop-blur-sm"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={idx}
                onClick={() => onScrollTo(item.section)}
                className="transition px-4 py-2 rounded-xl hover:bg-white/10 hover:backdrop-blur-sm"
              >
                {item.name}
              </button>
            )
          )}
        </div>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <button
            onClick={() => onScrollTo("contact")}
            className="bg-[#FFBF00] text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm py-4 px-6 flex flex-col gap-3 text-white text-sm">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                onScrollTo(item.section);
                setIsOpen(false);
              }}
              className="text-left w-full py-2 hover:bg-white/10 rounded-md"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => setIsOpen(false)}
            className="bg-[#FFBF00] text-black mt-2 px-4 py-2 rounded-full font-semibold"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
