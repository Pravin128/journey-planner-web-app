
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-sky-600 to-sky-400 text-white py-16 md:py-24 px-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Perfect Journey</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Create, manage and share your travel experiences with TripWise.
            Your all-in-one travel companion.
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Start Planning
            </Button>
            
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              Explore Destinations
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 hidden lg:block w-1/3 h-full">
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 right-0 bg-white rounded-tl-3xl p-6 shadow-xl">
            <div className="flex items-center mb-3">
              <MapPin className="text-orange-500 mr-2" size={20} />
              <span className="text-slate-800 font-medium">Popular Destinations</span>
            </div>
            <div className="flex space-x-3">
              <div className="w-16 h-16 rounded-lg bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1534351590666-13e3e96b5017')`}}></div>
              <div className="w-16 h-16 rounded-lg bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1552465011-b4e21bf6e79a')`}}></div>
              <div className="w-16 h-16 rounded-lg bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963')`}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
