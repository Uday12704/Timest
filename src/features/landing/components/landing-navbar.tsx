"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Plans", href: "#plans" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#B87333]/20 bg-[#F7E9D5]/90 shadow-sm backdrop-blur-xl"
          : "bg-[#F7E9D5]"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img src="logo.png" alt="logo" className="w-25"/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-[#B87333]/15 bg-white/35 p-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#432818]/65 transition-all duration-200 hover:bg-[#B87333]/10 hover:text-[#432818]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Login */}
        <Link
          href="/login"
          className="hidden items-center justify-center rounded-xl bg-[#432818] px-6 py-2.5 text-sm font-semibold text-[#F7E9D5] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B87333] hover:shadow-md md:inline-flex"
        >
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B87333]/20 text-[#432818] transition-colors hover:bg-[#B87333]/10 md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-[#B87333]/15 transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="px-6 py-5">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#432818]/70 transition-colors hover:bg-[#B87333]/10 hover:text-[#432818]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center rounded-xl bg-[#432818] px-6 py-3 text-sm font-semibold text-[#F7E9D5] transition-colors hover:bg-[#B87333]"
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}