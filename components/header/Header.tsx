import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Typed from "typed.js";
import Image from "next/image";

function Header() {
  const typed = useRef<Typed | null>(null);
  const typedElem = useRef<HTMLParagraphElement>(null);

  useEffect(function () {
    if (typedElem.current) {
      typed.current = new Typed(typedElem.current, {
        strings: [
          "Software Developer",
          "Software Engineering",
          "Front-end Developer",
          "Freelancer",
        ],
        backDelay: 3500,
        typeSpeed: 50,
        loop: true,
        showCursor: false,
      });
    }
    return function () {
      typed.current && typed.current.destroy();
    };
  }, []);

  return (
    <header className="fixed inset-0 bottom-auto z-40 min-h-[80px] bg-white/80 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex h-full min-h-[80px] items-center justify-between">
        <div className="flex flex-row items-center md:space-x-2">
          <div className="flex flex-col items-start justify-center" data-cursor="-opaque">
            <Link href={"/"}>
              <h2 className="cursor-pointer text-xl">Nata Inditama</h2>
            </Link>
            <p className="min-h-[1rem] overflow-hidden text-sm opacity-90" ref={typedElem}></p>
          </div>
          {/* <nav className="hidden items-center justify-between md:flex md:w-auto md:space-x-5">
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
          </nav> */}
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
