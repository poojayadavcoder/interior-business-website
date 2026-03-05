"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RiInstagramLine, 
  RiLinkedinLine, 
  RiWhatsappLine, 
  RiMenu3Line, 
  RiCloseLine 
} from 'react-icons/ri';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header 
        className={`header ${isScrolled || isMenuOpen ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <Link href="/" className="logo" onClick={closeMenu}>
            <div className="logo-container">
              <span className="logo-text">PA <span>Interiors</span></span>
            </div>
          </Link>
          
          <nav className="nav desktop-only">
            <ul className="nav-list">
              <li><Link href="/" className="nav-link">Home</Link></li>
              <li><Link href="/about" className="nav-link">About</Link></li>
              <li><Link href="/services" className="nav-link">Services</Link></li>
              <li><Link href="/projects" className="nav-link">Projects</Link></li>
              <li><Link href="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </nav>

          <div className="header-right">
            <div className="header-socials desktop-only">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="header-icon"><RiInstagramLine /></a>
              <a href="https://www.linkedin.com/in/puneet-agrawal-446001161/" target="_blank" rel="noopener noreferrer" className="header-icon"><RiLinkedinLine /></a>
              <div className="header-divider"></div>
              <a href="https://wa.me/918299844XXX" target="_blank" rel="noopener noreferrer" className="header-whatsapp">
                <RiWhatsappLine /> <span>Chat now</span>
              </a>
            </div>

            <button 
              className="mobile-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Dedicated Close Button for Mobile Menu */}
            <button 
              className="mobile-close-btn"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <RiCloseLine />
            </button>

            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                <li><Link href="/about" onClick={closeMenu}>About</Link></li>
                <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
                <li><Link href="/projects" onClick={closeMenu}>Projects</Link></li>
                <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
              </ul>
              
              <div className="mobile-footer">
                <div className="mobile-socials">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><RiInstagramLine /></a>
                  <a href="https://linkedin.com/in/puneet-agrawal-446001161" target="_blank" rel="noopener noreferrer"><RiLinkedinLine /></a>
                  <a href="tel:+918299844XXX"><RiWhatsappLine /></a>
                </div>
                <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>© 2024 PA Interiors</p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
