import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm flex justify-between items-center">
        {/* Logo and Navigation Items */}
        <div className="flex items-center">
          <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
          <span className="text-xl tracking-tight">VirtuaIR</span>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sign In and Create an Account */}
        <div className="hidden lg:flex justify-end items-center space-x-4">
          <a href="#" className="py-2 px-3 border rounded-md">
            Sign In
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
          >
            Create an account
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden md:flex items-center">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="lg:hidden fixed top-0 right-0 z-20 bg-neutral-900 w-full h-full p-12">
          {/* Close Button */}
          <button
            onClick={toggleNavbar}
            className="absolute top-4 right-4 text-white"
          >
            <X size={24} />
          </button>
          <ul className="space-y-4 mt-12">
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col space-y-4">
            <a href="#" className="px-2 py-3 border rounded-md text-center">
              Sign In
            </a>
            <a
              href="#"
              className="px-2 py-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-center"
            >
              Create an account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
