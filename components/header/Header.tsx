import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="fixed inset-0 bottom-auto z-40 min-h-[80px] bg-white/80 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex h-full min-h-[80px] items-center justify-between">
        <div className="flex flex-row items-center md:space-x-2">
          <nav className="items-center justify-between hidden md:flex md:w-auto md:space-x-5">
            <Link href="/">
              <a className="nav-link nav-link-grow-up">
                <span>Home</span>
              </a>
            </Link>
            <Link href="/about">
              <a className="nav-link nav-link-grow-up">
                <span>About</span>
              </a>
            </Link>
            <a href="#" className="nav-link nav-link-grow-up">
              <span>Services</span>
            </a>
            <Link href="contact">
              <a className="nav-link nav-link-grow-up">
                <span>Contact</span>
              </a>
            </Link>
          </nav>
        </div>
        <div className="flex space-x-4">
          {/* <button
            type="button"
            className="btn rounded border border-neutral-800 bg-neutral-900 px-5 py-2.5 text-center font-medium text-neutral-100 hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-neutral-300"
          >
            Get started
          </button> */}
          <button className="button is-dark">Get started</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
