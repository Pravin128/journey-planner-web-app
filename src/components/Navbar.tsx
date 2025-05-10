
import { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-sky-500">TripWise</Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-slate-700 hover:text-sky-500 transition-colors">Home</Link>
          <Link to="/trips" className="text-slate-700 hover:text-sky-500 transition-colors">My Trips</Link>
          <Link to="/explore" className="text-slate-700 hover:text-sky-500 transition-colors">Explore</Link>
          <Button variant="default" className="bg-sky-500 hover:bg-sky-600">
            Create Trip
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto px-4 pt-4 pb-6 bg-white">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-slate-700 hover:text-sky-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/trips" className="text-slate-700 hover:text-sky-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>My Trips</Link>
            <Link to="/explore" className="text-slate-700 hover:text-sky-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Explore</Link>
            <Button variant="default" className="bg-sky-500 hover:bg-sky-600 w-full">
              Create Trip
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
