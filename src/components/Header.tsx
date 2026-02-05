"use client";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-[#1f2a44] flex items-center justify-center text-white font-bold mr-3">
            FH
          </div>
          <div>
            <h1 className="text-sm font-bold text-[#1f2a44] leading-tight">
              FUTURE HOUSE UNITED<br />
              <span className="text-xs font-normal">GENERAL TRADING & CONTRACTING CO.</span>
            </h1>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {["HOME", "ABOUT US", "SECTORS", "GROUP COMPANIES", "CONTACT US"].map((item) => (
            <a 
              key={item}
              href="#" 
              className="text-xs font-medium text-gray-700 hover:text-[#c9a25d] transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>
        
        <button 
          className="md:hidden" 
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {["HOME", "ABOUT US", "SECTORS", "GROUP COMPANIES", "CONTACT US"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-xs font-medium text-gray-700 hover:text-[#c9a25d] transition-colors tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}