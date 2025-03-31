import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/services";

const Navbar = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesDropdownOpen, setMobileServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const toggleMobileServicesDropdown = () => {
    setMobileServicesDropdownOpen(!mobileServicesDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-md' : 'bg-black/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="h-10 w-48 bg-white text-black font-montserrat font-bold text-xl flex items-center justify-center rounded cursor-pointer">
                BlockForgeLab
              </div>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/">
              <div className={`font-montserrat hover:text-white transition-colors font-medium cursor-pointer ${isActive('/') ? 'text-white font-bold' : 'text-white'}`}>
                Home
              </div>
            </Link>
            <div ref={servicesDropdownRef} className="relative group">
              <div 
                className={`font-montserrat hover:text-white transition-colors font-medium cursor-pointer flex items-center ${isActive('/services') ? 'text-white font-bold' : 'text-white'}`}
                onClick={toggleServicesDropdown}
              >
                Services
                <ChevronDown size={16} className={`ml-1 transform transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              {servicesDropdownOpen && (
                <motion.div 
                  className="absolute left-0 mt-2 w-64 bg-black border border-gray-700 rounded-md shadow-lg z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-2">
                    {services.map((service, index) => (
                      <Link key={index} href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <div 
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors cursor-pointer"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          {service.title}
                        </div>
                      </Link>
                    ))}
                    <Link href="/services">
                      <div 
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors border-t border-gray-700 mt-1 pt-1 cursor-pointer"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        All Services
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
            <Link href="/about">
              <div className={`font-montserrat hover:text-white transition-colors font-medium cursor-pointer ${isActive('/about') ? 'text-white font-bold' : 'text-white'}`}>
                About
              </div>
            </Link>
            <Link href="/portfolio">
              <div className={`font-montserrat hover:text-white transition-colors font-medium cursor-pointer ${isActive('/portfolio') ? 'text-white font-bold' : 'text-white'}`}>
                Portfolio
              </div>
            </Link>
            <Link href="/testimonials">
              <div className={`font-montserrat hover:text-white transition-colors font-medium cursor-pointer ${isActive('/testimonials') ? 'text-white font-bold' : 'text-white'}`}>
                Testimonials
              </div>
            </Link>
            <Link href="/contact">
              <div className={`font-montserrat hover:text-white transition-colors font-medium cursor-pointer ${isActive('/contact') ? 'text-white font-bold' : 'text-white'}`}>
                Contact
              </div>
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
              <div 
                className={`font-montserrat hover:text-white transition-colors font-medium px-4 py-2 cursor-pointer ${isActive('/') ? 'text-white font-bold' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </div>
            </Link>
            <div>
              <div 
                className={`font-montserrat hover:text-white transition-colors font-medium px-4 py-2 flex items-center justify-between ${isActive('/services') ? 'text-white font-bold' : 'text-white'}`}
                onClick={toggleMobileServicesDropdown}
              >
                <span>Services</span>
                <ChevronDown size={16} className={`transform transition-transform duration-200 ${mobileServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              {mobileServicesDropdownOpen && (
                <motion.div
                  className="pl-8 flex flex-col space-y-2 py-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {services.map((service, index) => (
                    <Link key={index} href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div 
                        className="text-sm text-white hover:text-gray-300 py-1 cursor-pointer"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesDropdownOpen(false);
                        }}
                      >
                        {service.title}
                      </div>
                    </Link>
                  ))}
                  <Link href="/services">
                    <div 
                      className="text-sm text-white hover:text-gray-300 py-1 font-medium cursor-pointer"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesDropdownOpen(false);
                      }}
                    >
                      View All Services
                    </div>
                  </Link>
                </motion.div>
              )}
            </div>
            <Link href="/about">
              <div 
                className={`font-montserrat hover:text-white transition-colors font-medium px-4 py-2 cursor-pointer ${isActive('/about') ? 'text-white font-bold' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </div>
            </Link>
            <Link href="/portfolio">
              <div 
                className={`font-montserrat hover:text-white transition-colors font-medium px-4 py-2 cursor-pointer ${isActive('/portfolio') ? 'text-white font-bold' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </div>
            </Link>
            <Link href="/testimonials">
              <div 
                className={`font-montserrat hover:text-white transition-colors font-medium px-4 py-2 cursor-pointer ${isActive('/testimonials') ? 'text-white font-bold' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </div>
            </Link>
            <Link href="/contact">
              <div 
                className={`font-montserrat hover:text-white transition-colors font-medium px-4 py-2 cursor-pointer ${isActive('/contact') ? 'text-white font-bold' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </div>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
