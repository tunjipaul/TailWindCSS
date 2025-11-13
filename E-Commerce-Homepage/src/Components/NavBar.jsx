import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-blue-600">OTP</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Products
          </a>
          <a href="#" className="hover:text-blue-600">
            Categories
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </div>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="text-2xl cursor-pointer">&#9776;</span>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white px-4 py-2 flex flex-col space-y-2">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Products
          </a>
          <a href="#" className="hover:text-blue-600">
            Categories
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
