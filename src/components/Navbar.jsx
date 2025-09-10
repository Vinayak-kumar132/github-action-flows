import React from "react";
import { useState, useEffect } from "react";

import logo from "../asset/dialflo_logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu when resizing up
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = [
    { href: "#use-cases", label: "Use Cases" },
    { href: "#pricing", label: "Pricing" },
    { href: "#blogs", label: "Blogs" },
  ];

  return (
     <header className="sticky top-0 z-50  py-4 w-full border-b bg-gradient-to-r from-black to-gray-800 backdrop-blur">
      {/* Container is 11/12 width on lg+ screens, comfortable padding on smaller */}
      <div className="mx-auto w-11/12 max-w-7xl">
        <nav className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
         
          <div className="flex gap-1 ">
            <img
          src={logo}
          className="md:w-170 md:h-14 w-150 h-10"
          />
        
          </div>
          

          {/* Desktop nav */}
          <div className="hidden items-center gap-4 md:gap-12 md:flex ml-10 lg:ml-24">
            
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-md font-medium text-gray-300  hover:scale-105 hover:text-white transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          
           

          </div>

          <div className="hidden md:block">
             <a
              href="https://calendly.com/abhishek-dialflo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl
                        bg-gradient-to-r from-green-500 via-cyan-400 to-gray-400
                        px-5 py-2 text-md  text-black
                        hover:shadow-xl shadow-white hover:scale-105
                        transition-all duration-200 ease-in-out font-bold"
            >
            Claim 100 Customers Free
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl p-2 text-white  hover:scale-110 transition-all duration-200 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {/* Hamburger / Close icons */}
            <svg
              className={`h-6 w-6 ${open ? "hidden" : "block"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg
              className={`h-6 w-6 ${open ? "block" : "hidden"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile nav panel */}
      
      <div
        id="mobile-menu"
        className={`
          md:hidden  absolute inset-x-0 top-full origin-top
          transform transition-all duration-300 ease-in-out
          ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
          bg-gradient-to-r from-black to-gray-800 
          rounded-b-2xl shadow-2xl
        `}
        aria-hidden={!open}
      >
        <div className="mx-auto w-11/12 max-w-7xl p-4 text-right">
          <div className="space-y-1">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-xl px-6 py-2 text-sm font-medium text-gray-100 hover:bg-gray-800/70"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://calendly.com/abhishek-dialflo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex  items-center justify-center gap-2 rounded-xl
                        bg-gradient-to-r from-green-500 via-cyan-400 to-gray-400
                        px-5 py-2 text-md font-semibold text-white
                        hover:shadow-xl hover:scale-105 transition-all duration-200 ease-in-out"
              onClick={() => setOpen(false)}
            >
              Claim 100 Customers Free
            </a>
          </div>
        </div>
      </div>


    </header>
  );
}
