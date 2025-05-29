import React from "react";

const Header = () => {
  return (
    <div className="flex justify-around items-center p-4 pt-4 bg-gray-50 shadow-md">
      <div className="flex items-center gap-6">
        <img
          className="w-24 h-24 "
          src="../../assets/logo/logo2.png"
          alt=""
          srcset=""
        />
        <p className="cursor-pointer"><b>Bangalore</b>, Karnataka </p>
      </div>
      <div>
        <ul className="flex justify-between items-center gap-10 text-lg font-semibold">
          <li className="cursor-pointer">offers</li>
          <li className="cursor-pointer">Help</li>
          <li className="cursor-pointer">👤Aditya</li>
          <li className="cursor-pointer">🛒Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
