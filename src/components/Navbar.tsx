import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm h-[72px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="AceMart Group Logo" className="h-10 w-auto object-contain" />
              <span className="font-heading font-bold text-xl text-gray-900 tracking-tight">AceMart Group</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Services</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">About Us</Link>
            <Link to="/why-us" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Why Choose Us</Link>
            <Link to="/markets" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Markets</Link>
            <Link 
              to="/contact"
              className="px-5 py-2.5 rounded-md text-white font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: theme.colors.primary, borderRadius: theme.borderRadius.button }}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">About Us</Link>
            <Link to="/why-us" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">Why Choose Us</Link>
            <Link to="/markets" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">Markets</Link>
            <div className="pt-4 px-3">
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-md text-white font-medium transition-all"
                style={{ backgroundColor: theme.colors.primary, borderRadius: theme.borderRadius.button }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
