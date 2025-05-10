
import { Calendar, MapPin } from 'lucide-react';
import { Trip } from '@/types/trip';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TripCardProps {
  trip: Trip;
}

const TripCard = ({ trip }: TripCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={trip.image} 
          alt={trip.destination} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      
      <CardContent className="pt-4">
        <div className="flex items-center text-orange-500 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{trip.destination}</span>
        </div>
        
        <h3 className="font-semibold text-lg mb-1 text-slate-800">{trip.title}</h3>
        
        <div className="flex items-center text-slate-500 mb-2">
          <Calendar size={16} className="mr-1" />
          <span className="text-sm">
            {trip.startDate} - {trip.endDate}
          </span>
        </div>
        
        <p className="text-slate-600 text-sm line-clamp-2">{trip.description}</p>
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <Button variant="outline" className="w-full border-sky-500 text-sky-500 hover:bg-sky-50">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TripCard;
