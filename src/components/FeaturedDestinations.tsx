
import { useState } from 'react';
import { Trip } from '@/types/trip';
import TripCard from './TripCard';

const FeaturedDestinations = () => {
  const [trips] = useState<Trip[]>([
    {
      id: '1',
      title: 'Summer in Santorini',
      destination: 'Santorini, Greece',
      startDate: 'Jun 12, 2025',
      endDate: 'Jun 20, 2025',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
      description: 'Enjoy the beautiful white buildings and crystal clear waters of this Mediterranean paradise.'
    },
    {
      id: '2',
      title: 'Tokyo Adventure',
      destination: 'Tokyo, Japan',
      startDate: 'Jul 8, 2025',
      endDate: 'Jul 22, 2025',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26',
      description: 'Experience the perfect blend of tradition and modernity in Japan\'s vibrant capital.'
    },
    {
      id: '3',
      title: 'Bali Retreat',
      destination: 'Bali, Indonesia',
      startDate: 'Aug 5, 2025',
      endDate: 'Aug 15, 2025',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      description: 'Relax on beautiful beaches and explore lush rice terraces in this tropical paradise.'
    },
    {
      id: '4',
      title: 'New York City Tour',
      destination: 'New York, USA',
      startDate: 'Sep 10, 2025',
      endDate: 'Sep 17, 2025',
      image: 'https://images.unsplash.com/photo-1496588152823-86ff7695e68f',
      description: 'Visit iconic landmarks and experience the energy of the city that never sleeps.'
    }
  ]);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3 text-slate-800">Popular Destinations</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover our most loved destinations and start planning your next adventure
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
