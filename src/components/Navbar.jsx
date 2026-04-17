import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for cleaner class merging
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-5xl rounded-full transition-all duration-500 ease-out">
      <div
        className={cn(
          "w-full px-8 py-4 rounded-full flex items-center justify-between transition-all duration-500",
          scrolled 
            ? "bg-white/60 backdrop-blur-md border border-salvia/20 shadow-lg text-salvia" 
            : "bg-transparent text-white"
        )}
      >
        <div className="font-outfit font-bold tracking-wide text-xl">
          El Método del 1%
        </div>
        <div className="hidden md:flex items-center gap-8 font-jakarta font-medium text-sm">
          <a href="#filosofia" className="hover:opacity-70 transition-opacity">Filosofía</a>
          <a href="#metodo" className="hover:opacity-70 transition-opacity">El Método</a>
          <a href="#comunidad" className="hover:opacity-70 transition-opacity">Comunidad</a>
        </div>
        <button 
          className={cn(
            "px-6 py-2 rounded-full font-jakarta font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95",
            scrolled ? "bg-salvia text-mantequilla" : "bg-white text-carbon"
          )}
        >
          Únete
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
