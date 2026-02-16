"use client";

import { useState } from "react";
import Link from "next/link";
import HamburgerIcon from "../icons/HamburgerIcon";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const bgClass = pathname === "/contact" ? "bg-tertiary" : "bg-primary";

  const linkClass = (path: string) =>
    `text-primary text-[21px] hover:text-accent font-medium py-2 transition-colors duration-200 
   ${pathname.startsWith(path) ? "underline underline-offset-8 decoration-1" : ""}`;

  return (
    <>
      <header className={`sticky top-0 z-50 w-full ${bgClass}`}>
        <div className="py-3.5 px-4 sm:px-10 lg:px-19 2xl:px-28">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-primary hover:bg-secondary lg:hidden transition-colors duration-200 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <HamburgerIcon
                isOpen={isMenuOpen}
                className="w-7 sm:w-9 lg:w-10"
              />
            </button>

            <Link
              href="/"
              className="text-xl sm:text-3xl lg:text-[41px] 2xl:text-[46px] font-medium text-primary whitespace-nowrap animate-fade-in-up"
            >
              Lilac Template
            </Link>

            <nav className="hidden lg:flex space-x-15.5 2xl:space-x-20 animate-fade-in-up">
              <Link href="/blog" className={linkClass("/blog")}>
                Blog
              </Link>

              <Link href="/contact" className={linkClass("/contact")}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-primary lg:hidden z-40 animate-fade-in-up"
          style={
            {
              top: "73px",
              "--animation-duration": "0.3s",
            } as React.CSSProperties
          }
        >
          <div className="h-full flex flex-col items-center justify-center space-y-8">
            <Link
              href="/blog"
              className="text-primary text-3xl hover:text-accent font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-primary text-3xl hover:text-accent font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
