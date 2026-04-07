import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    // { to: "/about", label: "About" }, // Hidden - can be re-enabled later
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1a2332]/95 backdrop-blur-md shadow-lg"
          : "bg-[#1a2332]/95 backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 min-w-0">
            <motion.div
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[#FF8C42]">Zeeke</span> Renovations
            </motion.div>
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative text-white hover:text-[#FF8C42] transition-colors duration-300 ${
                    location.pathname === link.to ? "text-[#FF8C42]" : ""
                  }`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF8C42]"
                      layoutId="activeNav"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Phone Number */}
            <a
              href="tel:555-555-5555"
              className="flex items-center space-x-2 text-white hover:text-[#FF8C42] transition-colors duration-300"
            >
              <Phone size={18} />
              <span className="font-medium">555-555-5555</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-[#1a2332]/98 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-white hover:text-[#FF8C42] transition-colors py-2 ${
                    location.pathname === link.to ? "text-[#FF8C42]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}