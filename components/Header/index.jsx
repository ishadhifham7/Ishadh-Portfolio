"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";

const NAV_ITEMS = config.NAV_ITEMS;

/* -------------------- NavLink -------------------- */
const NavLink = ({ href, label, isMobile = false }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative">
      <motion.span
        className={`relative ${
          isMobile ? "px-4 py-3 text-base" : "px-4 py-2"
        } text-gray-300 hover:text-white transition-colors ${
          isActive ? "text-white" : ""
        }`}
        whileHover={{ scale: isMobile ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {label}
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-secondary/30 rounded-lg backdrop-blur-sm"
            layoutId="activeNavBackground"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ zIndex: -1 }}
          />
        )}
      </motion.span>
    </Link>
  );
};

/* -------------------- Logo -------------------- */
const Logo = ({ isMobile = false }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Link
      href="/"
      className="flex items-center gap-2 hover:opacity-90 transition-opacity"
    >
      <img src="/logo3.png" alt="logo" className="w-6 h-6 object-contain" />
      {!isMobile && (
        <span className="hidden sm:inline text-gray-300 font-semibold text-lg">
          {config.developer.name} Ifham
        </span>
      )}
    </Link>
  </motion.div>
);

/* -------------------- Navigation -------------------- */
const Navigation = ({ isMobile = false, onLinkClick }) => (
  <nav className={isMobile ? "flex flex-col gap-4" : "hidden md:flex gap-2"}>
    {NAV_ITEMS.map((item) => (
      <div key={item.href} onClick={onLinkClick}>
        <NavLink {...item} isMobile={isMobile} />
      </div>
    ))}
  </nav>
);

/* -------------------- Contact Button -------------------- */
const ContactButton = ({ isMobile = false, onLinkClick }) => (
  <div
    className={`flex items-center gap-3 ${isMobile ? "justify-center" : ""}`}
    onClick={onLinkClick}
  >
    {/* Download CV */}
    <a
      href="/Ishadh Ifham CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download
      className="
        inline-flex items-center justify-center
        rounded-xl
        border border-[#2c2c2c]
        px-2 py-1
        bg-black
        text-[#dcdcdc]
        text-base
        hover:scale-105
        transition
        whitespace-nowrap
      "
    >
      Download CV
    </a>

    {/* LinkedIn */}
    <Link
      href="https://www.linkedin.com/in/ishadh-ifham-b5a7a2357"
      target="_blank"
    >
      <Button
        className="
          rounded-2xl
          text-xl text-white
          bg-transparent
          hover:bg-transparent
          hover:scale-110
          transition-transform
        "
      >
        <FaLinkedin />
      </Button>
    </Link>
  </div>
);

/* -------------------- Header -------------------- */
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="
          w-full
          bg-transparent
          text-white
          py-6
          mb-4
        "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className="
            max-w-[1400px]
            mx-auto
            flex
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-12
          "
        >
          <Logo />

          {/* Desktop Nav */}
          <Navigation />

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <ContactButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* ---------------- Mobile Menu ---------------- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs
             bg-black/95 z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <div className="flex flex-col h-full p-6">
                {/* Logo */}
                <Logo isMobile />

                {/* Navigation */}
                <div className="mt-8 flex-1">
                  <Navigation
                    isMobile
                    onLinkClick={() => setIsMobileMenuOpen(false)}
                  />
                </div>

                {/* Bottom Buttons */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  <ContactButton
                    isMobile
                    onLinkClick={() => setIsMobileMenuOpen(false)}
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
