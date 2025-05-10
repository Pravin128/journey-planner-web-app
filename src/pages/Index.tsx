
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Navigation } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      
      {/* How It Works Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-slate-800">How TripWise Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Plan, organize, and enjoy your trips with our simple three-step process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-sky-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">Choose Destination</h3>
            <p className="text-slate-600">
              Browse popular destinations or search for your dream location to start planning your trip.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-sky-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">Plan Your Trip</h3>
            <p className="text-slate-600">
              Add activities, accommodations, and transportation details to create your perfect itinerary.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Navigation className="text-sky-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">Enjoy Your Journey</h3>
            <p className="text-slate-600">
              Access your trip details anytime, anywhere and share your adventures with friends and family.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button className="bg-sky-500 hover:bg-sky-600">
            Start Planning Now
          </Button>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Adventure?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who use TripWise to create unforgettable experiences.
            Sign up today for free and start your journey!
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Sign Up Free
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
