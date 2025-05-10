
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-sky-400">TripWise</Link>
            <p className="mt-4 text-slate-300 text-sm">
              Simplifying trip planning and management for travelers around the world.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/trips" className="text-slate-300 hover:text-white transition-colors">My Trips</Link></li>
              <li><Link to="/explore" className="text-slate-300 hover:text-white transition-colors">Explore</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-medium mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-slate-300 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-4 text-sm">Subscribe to our newsletter for travel tips and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 text-sm text-slate-900 rounded-l focus:outline-none"
              />
              <button className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-r text-sm transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex mt-6 space-x-4">
              <a href="#" aria-label="Facebook" className="text-slate-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-slate-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} TripWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
