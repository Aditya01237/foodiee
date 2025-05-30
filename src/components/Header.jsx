import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 shadow-md p-4 pt-4">
      <div className="flex justify-around items-center">
        {/* Left Section: Logo and Location */}
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16 md:w-24 md:h-24"
            src="../../assets/logo/logo2.png"
            alt="logo"
          />
          <p className="cursor-pointer text-sm md:text-base">
            <b>Bangalore</b>, Karnataka
          </p>
        </div>

        {/* Hamburger Menu Button - Visible only on mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Items (Desktop only) */}
        <ul className="hidden md:flex justify-between items-center gap-10 text-lg font-semibold">
          <li className="cursor-pointer">offers</li>
          <li className="cursor-pointer">Help</li>
          <li className="cursor-pointer">👤Aditya</li>
          <li className="cursor-pointer">🛒Cart</li>
        </ul>
      </div>

      {/* Nav Items (Mobile only) */}
      {menuOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-base font-semibold">
          <li className="cursor-pointer">offers</li>
          <li className="cursor-pointer">Help</li>
          <li className="cursor-pointer">👤Aditya</li>
          <li className="cursor-pointer">🛒Cart</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
