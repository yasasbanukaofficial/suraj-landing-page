"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import NavLink from "../ui/NavLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["About", "Classes", "Contact"];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] flex items-center justify-between px-6 md:px-20 py-5 bg-white/70 backdrop-blur-xl border-b border-white/20">
        <Link
          href="/"
          className="relative z-[110] hover:opacity-80 transition-opacity"
        >
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={60}
            height={40}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800">
          {navItems.map((item) => (
            <NavLink
              key={item}
              txt={item}
              href={`#${item.toLowerCase()}`}
              showBg={item === "Contact"}
            />
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[110] md:hidden p-2 bg-black text-white rounded-md transition-transform active:scale-90"
        >
          {isOpen ? (
            <X size={20} strokeWidth={2.5} />
          ) : (
            <Menu size={20} strokeWidth={2.5} />
          )}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[90] bg-white/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-bold tracking-tight text-gray-900 transition-all duration-700 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item}
            </Link>
          ))}

          <div
            className={`mt-10 pt-10 border-t border-gray-100 w-2/3 text-center transition-all duration-1000 delay-150 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
              Follow Our Journey
            </p>
            <div className="flex justify-center gap-6 mt-4 text-gray-600">
              <span className="text-xs">IG</span>
              <span className="text-xs">FB</span>
              <span className="text-xs">TW</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
