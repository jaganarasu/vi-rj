import React from "react";

const Header = () => (
  <header className="flex justify-between items-center mb-6">
    <h1 className="text-3xl font-bold text-pink-600">MoBooM</h1>
    <input
      type="text"
      placeholder="Search products..."
      className="p-2 border rounded-lg w-1/3"
    />
  </header>
);

export default Header;
