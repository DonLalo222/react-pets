import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="space-x-4 bg-green-600 text-white p-5 shadow-2xl">
      <div className="inline-block">
        <h1 className="font-bold text-2xl">Info Pets</h1>
      </div>
      <div className="inline-block hover:text-gray-800 ">
        <Link to="/">Home</Link>
      </div>
      <div className="inline-block hover:text-gray-800">
        <Link to="/dogs">Perros</Link>
      </div>
      <div className="inline-block hover:text-gray-800">
        <Link to="/cats">Gatos</Link>
      </div>
    </div>
  );
}
