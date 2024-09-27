import React from 'react'
import { useState, useEffect } from 'react';

const Header = () => {
  const [headerClass, setHeaderClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setHeaderClass('header-shadow');
      } else {
        setHeaderClass('');
      }
    });
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className={`flex items-center justify-between bg-navy px-2 py-3 z-20 fixed top-0 w-full ${headerClass}`}>
      <a href="#home" className="text-xl px-2 hover:scale-110 md:text-xl md:px-4 md:py-2 text-green">Brown Jack</a>
      <nav>
        <section className="MOBILE-MENU flex md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 hover:cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 bg-slate"></span>
            <span className="block h-0.5 w-6 ml-2 bg-slate"></span>
            <span className="block h-0.5 w-4 ml-4 bg-slate"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-slate hover:text-blue hover:cursor-pointer"
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
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-evenly">
              <li className="text-lightest-slate hover:text-green text-xl my-2">
                <a href="#about">About</a>
              </li>
              <li className="text-lightest-slate hover:text-green text-xl my-2">
                <a href="#skills">Skills</a>
              </li>
              <li className="text-lightest-slate hover:text-green text-xl my-2">
                <a href="#experience">Experience</a>
              </li>
              <li className="text-lightest-slate hover:text-green text-xl my-2">
                <a href="#projects">Projects</a>
              </li>
              <li className="text-lightest-slate hover:text-green text-xl my-2">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
        <ul className="DESKTOP-MENU hidden md:flex">
          <li>
            <a href="#about" className="md:text-lg md:px-4 text-lightest-slate hover:text-green">About</a>
          </li>
          <li>
            <a href="#skills" className="md:text-lg md:px-4 text-lightest-slate hover:text-green">Skills</a>
          </li>
          <li>
            <a href="#experience" className="md:text-lg md:px-4 text-lightest-slate hover:text-green">Experience</a>
          </li>
          <li>
            <a href="#projects" className="md:text-lg md:px-4 text-lightest-slate hover:text-green">Projects</a>
          </li>
          <li>
            <a href="#contact" className="md:text-lg md:px-4 md:pr-10 text-lightest-slate hover:text-green">Contact</a>          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header
