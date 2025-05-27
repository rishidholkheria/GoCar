// ResizableNavbar.jsx
"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

const ResizableNavbar = ({ onScrollTo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About Us", section: "about" },
    { name: "Our Fleet", section: "fleet" },
    { name: "Holiday Plans", section: "holidays" },
  ];

  return (
    <div className="relative w-4/6 mx-auto z-999">
      <Navbar className="p-3">
        <NavBody className="px-8 bg-[#151001]">
          <NavbarLogo />
          <div className="flex gap-6 text-md text-white">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => onScrollTo(item.section)}
                className="hover:underline"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <NavbarButton className="bg-[#ffbf00]" variant="primary">
              Book Now
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav className="absolute w-full mx-auto z-999 bg-[#151001] text-white">
          <MobileNavHeader className="px-4">
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onScrollTo(item.section);
                  setIsMobileMenuOpen(false);
                }}
                className="block text-left w-full px-4 py-2 hover:bg-[#333]"
              >
                {item.name}
              </button>
            ))}
            <div className="flex w-full flex-col gap-4 px-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#FFBF00]"
              >
                Login
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default ResizableNavbar;
  