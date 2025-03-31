import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-md' : 'bg-black/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center">
              <div className="h-10 w-48 bg-white text-black font-montserrat font-bold text-xl flex items-center justify-center rounded">
                BlockForgeLab
              </div>
            </a>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/">
              <a className={`font-montserrat hover:text-white transition-colors font-medium ${isActive('/') ? 'text-white font-bold' : 'text-white'}`}>
                Home
              </a>
            </Link>
            <Link href="/services">
              <a className={`font-montserrat hover:text-white transition-colors font-medium ${isActive('/services') ? 'text-white font-bold' : 'text-white'}`}>
                Services
              </a>
            </Link>
            <Link href="/about">
              <a className={`font-montserrat hover:text-white transition-colors font-medium ${isActive('/about') ? 'text-white font-bold' : 'text-white'}`}>
                About
              </a>
            </Link>
            <Link href="/portfolio">
              <a className={`font-montserrat hover:text-white transition-colors font-medium ${isActive('/portfolio') ? 'text-white font-bold' : 'text-white'}`}>
                Portfolio
              </a>
            </Link>
            <Link href="/testimonials">
              <a className={`font-montserrat hover:text-white transition-colors font-medium ${isActive('/testimonials') ? 'text-white font-bold' : 'text-white'}`}>
                Testimonials
              </a>
            </Link>
            <Link href="/contact">
              <a className={`font-montserrat hover:text-white transition-colors font-medium ${isActive('/contact') ? 'text-white font-bold' : 'text-white'}`}>
                Contact
              </a>
            </Link>
          </div>
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-black w-full py-4 shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/">
              <a 
                className={`font-montserrat hover:text-white transition-colors font-medium px-4 py-2 ${isActive('/') ? 'text-white font-bold' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </Link>
            <Link href="/services">
              <a 
                className={`font-montserrat hover:text-white transition-colors font-medium px-4 py-2 ${isActive('/services') ? 'text-white font-bold' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
            </Link>
            <Link href="/about">
              <a 
                className={`font-montserrat hover:text-white transition-colors font-medium px-4 py-2 ${isActive('/about') ? 'text-white font-bold' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </Link>
            <Link href="/portfolio">
              <a 
                className={`font-montserrat hover:text-white transition-colors font-medium px-4 py-2 ${isActive('/portfolio') ? 'text-white font-bold' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </a>
            </Link>
            <Link href="/testimonials">
              <a 
                className={`font-montserrat hover:text-white transition-colors font-medium px-4 py-2 ${isActive('/testimonials') ? 'text-white font-bold' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
            </Link>
            <Link href="/contact">
              <a 
                className={`font-montserrat hover:text-white transition-colors font-medium px-4 py-2 ${isActive('/contact') ? 'text-white font-bold' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
