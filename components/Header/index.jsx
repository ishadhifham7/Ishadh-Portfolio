"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  FaDiscord,
  FaGithub,
  FaMapPin,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const NAV_ITEMS = config.NAV_ITEMS;

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
            className="absolute inset-0 bg-secondary/30  rounded-lg backdrop-blur-sm"
            layoutId="activeNavBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              zIndex: -1,
            }}
          />
        )}
      </motion.span>
    </Link>
  );
};

const Logo = ({ isMobile = false }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    suppressHydrationWarning
  >
    <Link
      href="/"
      className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
    >
      <motion.div whileHover={{ opacity: 0.5 }} whileTap={{ scale: 0.95 }}>
        <img
          src="/logo3.png" // path to your image
          alt="icon"
          className="w-6 h-6 object-contain"
        />
      </motion.div>
      <motion.span
        className={`text-gray-300 font-semibold ${
          isMobile ? "hidden" : "text-base sm:text-lg"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        suppressHydrationWarning
      >
        <span className="hidden sm:inline">{config.developer.name} Ifham</span>
        {/* <span className="sm:hidden">{config.developer.name}</span> */}
      </motion.span>
    </Link>
  </motion.div>
);

const Navigation = ({ isMobile = false, onLinkClick }) => (
  <motion.nav
    className={
      isMobile ? "flex flex-col space-y-4" : "hidden md:flex space-x-2"
    }
    initial={isMobile ? { opacity: 0 } : { opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: isMobile ? 0 : 0.3, duration: 0.5 }}
    suppressHydrationWarning
  >
    {NAV_ITEMS.map((item, index) => (
      <motion.div
        key={item.href}
        initial={isMobile ? { opacity: 0, x: -20 } : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: isMobile ? index * 0.1 : 0.1 * index }}
        onClick={onLinkClick}
        suppressHydrationWarning
      >
        <NavLink {...item} isMobile={isMobile} />
      </motion.div>
    ))}
  </motion.nav>
);

const ContactButton = ({ isMobile = false, onLinkClick }) => (
  <motion.div
    className={`flex items-center ${
      isMobile ? "w-full justify-center mt-4" : ""
    }`}
    initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: isMobile ? 0.5 : 0.4, duration: 0.5 }}
    onClick={onLinkClick}
    suppressHydrationWarning
  >
    <Link
      href={"https://www.linkedin.com/in/ishadh-ifham-b5a7a2357"}
      target="_blank"
      className={isMobile ? "w-full" : ""}
    >
      <Button
        className={`
    ${isMobile ? "w-full" : ""}
    rounded-2xl
    sm:p-5
    text-xl sm:text-2xl
    text-white
    bg-transparent
    hover:bg-transparent
    active:bg-transparent
    focus:bg-transparent
    hover:scale-110
    transition-transform duration-200 ease-out
  `}
      >
        <FaLinkedin />
      </Button>
    </Link>

    {/**/}
    <Link
      href={"https://x.com/"}
      target="_blank"
      className={isMobile ? "w-full" : ""}
    >
      <Button
        className={`
    ${isMobile ? "w-full" : ""}
    rounded-2xl
    sm:p-5
    text-xl sm:text-2xl
    text-white
    bg-transparent
    hover:bg-transparent
    active:bg-transparent
    focus:bg-transparent
    hover:scale-110
    transition-transform duration-200 ease-out
  `}
      >
        <img
          src="/X2.svg" // Add the X ur that is in the public folder here
          alt="X / Twitter"
          className="h-5 w-auto hover:scale-110 transition-transform duration-200 text-white ease-out"
        />
      </Button>
    </Link>
  </motion.div>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="py-4 sm:py-6 md:py-9 z-50 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        suppressHydrationWarning
      >
        <div className="container mx-auto flex items-center justify-between md:px-64 px-4 sm:px-6">
          <Logo />
          <Navigation />
          <div className="hidden md:block">
            <ContactButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
              suppressHydrationWarning
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-md border-l border-white/10 z-50 md:hidden overflow-y-auto"
              suppressHydrationWarning
            >
              <div className="flex flex-col h-full p-6">
                {/* Mobile Logo */}
                <div className="mb-8">
                  <Logo isMobile={true} />
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1">
                  <Navigation isMobile={true} onLinkClick={closeMobileMenu} />
                </div>

                {/* Mobile Contact Button */}
                <ContactButton isMobile={true} onLinkClick={closeMobileMenu} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
