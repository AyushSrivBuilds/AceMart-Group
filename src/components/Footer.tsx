import { theme } from '../theme';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-20 pb-8 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="AceMart Group Logo" className="h-10 w-auto object-contain brightness-0 invert" />
              <span className="font-heading font-bold text-xl text-white tracking-tight">AceMart Group</span>
            </a>
            <p className="text-sm leading-relaxed mb-6 font-body">
              Your trusted B2B partner for end-to-end FMCG sourcing, compliance, and global supply chain solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-heading tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm font-body">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#markets" className="hover:text-white transition-colors">Markets We Serve</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-heading tracking-wide uppercase text-sm">Services</h4>
            <ul className="space-y-4 text-sm font-body">
              <li><a href="#" className="hover:text-white transition-colors">Global Sourcing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Assurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Logistics & Warehousing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trade Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Export Documentation</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-heading tracking-wide uppercase text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm font-body">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-500 mt-0.5 shrink-0" />
                <span>123 Global Trade Center, Business District, Mumbai, India 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gray-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gray-500 shrink-0" />
                <span>contact@acemartgroup.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body">
          <p>© 2026 AceMart Group. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a 
              href="#" 
              className="termly-display-preferences hover:text-white transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Consent Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
