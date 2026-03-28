"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/activities", label: "Activities" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#0B1F3B] shadow-lg"
          : "bg-[#0B1F3B]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="text-white font-bold text-lg md:text-xl font-poppins tracking-tight group-hover:text-[#F2A93B] transition-colors duration-200">
              Kamuskay Kamara
            </span>
            <span className="text-[#F2A93B] text-xs md:text-sm font-medium italic">
              It&apos;s all about the solution.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[var(--color-gold)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
// ...removed Kamuskay4SGA nav link...
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white rounded-md hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 bg-[#0B1F3B] z-40 flex flex-col px-6 pt-8 pb-12 overflow-y-auto"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-4 text-2xl font-bold border-b border-white/10 transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-[var(--color-gold)]"
                      : "text-white hover:text-[var(--color-gold)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {/* Kamuskay4SGA mobile nav link removed */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
