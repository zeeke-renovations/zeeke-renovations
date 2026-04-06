import { Link } from "react-router";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#FF8C42]">Zeeke</span> Renovations
            </div>
            <p className="text-gray-300 mb-4">
              Residential renovation services <br />
              <br />
              Chelsea, AL and surrounding areas <br />
              <br />
              Clean work, clear communication, and dependable scheduling
            </p>
            {/* Social Media Links (disabled for now) */}
            
            {/*
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF8C42] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF8C42] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF8C42] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF8C42] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[#FF8C42]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[#FF8C42] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-[#FF8C42] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-[#FF8C42] transition-colors"
                >
                  Gallery
                </Link>
              </li>
              {/* Hidden - can be re-enabled later
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#FF8C42] transition-colors"
                >
                  About
                </Link>
              </li>
              */}
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#FF8C42] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-[#FF8C42]">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Bathroom Remodeling</li>
              <li>Attic / Basement Renovations</li>
              <li>Kitchen Renovation</li>
              <li>Interior / Exterior Painting</li>
              <li>Outdoor Spaces</li>
              <li>Full Home Remodeling</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-[#FF8C42]">Contact Us</h3>
            <ul className="space-y-3">
              {/*
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#FF8C42] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                 60 Chelsea Corners</span>
              </li>
              */}
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#FF8C42] flex-shrink-0" />
                <span className="text-gray-300">(205) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#FF8C42] flex-shrink-0" />
                <span className="text-gray-300">info@zeeke.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Zeeke Renovations LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}