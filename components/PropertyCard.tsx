import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Home, MapPin } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-navy-900 text-gold-500 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
          {property.type}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white font-bold text-lg">{property.price}</p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-serif font-semibold text-navy-900 mb-2 truncate">{property.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={16} className="mr-1 text-gold-600" />
          {property.location}
        </div>
        
        <div className="flex justify-between items-center border-t border-gray-100 pt-4">
          <div className="flex gap-4 text-sm text-gray-600">
            {property.bedrooms > 0 && (
                <div className="flex items-center gap-1">
                <Bed size={16} />
                <span>{property.bedrooms} Beds</span>
                </div>
            )}
            <div className="flex items-center gap-1">
              <Home size={16} />
              <span>{property.sqft} sqft</span>
            </div>
          </div>
          <Link
            to={`/properties/${property.id}`}
            className="text-navy-900 font-medium hover:text-gold-600 text-sm flex items-center gap-1 transition-colors"
          >
            Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;