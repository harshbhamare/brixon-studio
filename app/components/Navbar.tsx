'use client';

import Image from "next/image";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image 
          src="/images/logo.png" 
          alt="Brixon Tech Logo" 
          width={140} 
          height={50} 
          priority
        />
      </div>

      <div className={styles.links}>
        <a href="#about">About us</a>
        <a href="#services">Our work</a>
      </div>

      <button 
        className={styles.mobileMenu}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={styles.mobileMenuDropdown}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About us</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Our work</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
