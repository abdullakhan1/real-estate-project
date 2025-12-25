import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Home, CheckSquare, Phone, Mail } from 'lucide-react';
import { PROPERTIES } from '../constants';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = PROPERTIES.find(p => p.id === id);

  if (!property) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-navy-900">Property Not Found</h2>
        <Link to="/properties" className="text-gold-600 mt-4 hover:underline">Back to Listings</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-20">
       {/* Hero Images */}
       <div className="h-[50vh] md:h-[60vh] relative overflow-hidden bg-gray-100 group">
         <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-black/30"></div>
         <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white container mx-auto">
            <span className="bg-gold-500 text-navy-900 px-3 py-1 rounded text-sm font-bold uppercase mb-3 inline-block">
              {property.status}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-2">{property.title}</h1>
            <p className="flex items-center text-lg md:text-xl opacity-90">
              <MapPin size={20} className="mr-2" /> {property.location}
            </p>
         </div>
       </div>

       <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
             <div className="flex flex-wrap gap-6 border-b border-gray-100 pb-8 mb-8">
                <div className="flex items-center gap-2 text-navy-900">
                   <Home size={24} className="text-gold-500" />
                   <div>
                     <span className="block text-xs text-gray-500 uppercase">Type</span>
                     <span className="font-bold text-lg">{property.type}</span>
                   </div>
                </div>
                <div className="flex items-center gap-2 text-navy-900">
                   <Bed size={24} className="text-gold-500" />
                   <div>
                     <span className="block text-xs text-gray-500 uppercase">Bedrooms</span>
                     <span className="font-bold text-lg">{property.bedrooms || 'N/A'}</span>
                   </div>
                </div>
                <div className="flex items-center gap-2 text-navy-900">
                   <Home size={24} className="text-gold-500" />
                   <div>
                     <span className="block text-xs text-gray-500 uppercase">Area</span>
                     <span className="font-bold text-lg">{property.sqft} sqft</span>
                   </div>
                </div>
                 <div className="flex items-center gap-2 text-navy-900 ml-auto">
                   <div>
                     <span className="block text-xs text-gray-500 uppercase text-right">Price</span>
                     <span className="font-bold text-2xl text-gold-600">{property.price}</span>
                   </div>
                </div>
             </div>

             <div className="mb-10">
               <h2 className="text-2xl font-bold text-navy-900 mb-4">Overview</h2>
               <p className="text-gray-600 leading-relaxed text-lg">
                 {property.description}
               </p>
             </div>

             <div className="mb-10">
               <h2 className="text-2xl font-bold text-navy-900 mb-6">Amenities</h2>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                 {property.amenities.map((amenity, idx) => (
                   <div key={idx} className="flex items-center gap-3 text-gray-700">
                     <CheckSquare size={18} className="text-gold-500" />
                     {amenity}
                   </div>
                 ))}
               </div>
             </div>
             
             {/* Map Placeholder */}
             <div className="mb-10">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Location Map</h2>
                <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                   <div className="text-center">
                     <MapPin size={40} className="mx-auto mb-2 opacity-50" />
                     <p>Map View (Integrated via Google Maps API)</p>
                     <p className="text-xs">{property.location}</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
             <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 sticky top-24">
               <h3 className="text-xl font-bold text-navy-900 mb-2">Interested?</h3>
               <p className="text-gray-500 text-sm mb-6">Send an inquiry and our team will get back to you shortly.</p>
               
               <form className="space-y-4">
                 <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-gold-500 transition-colors" />
                 <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-gold-500 transition-colors" />
                 <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-gold-500 transition-colors" />
                 <textarea rows={4} placeholder="I'm interested in this property..." className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-gold-500 transition-colors"></textarea>
                 
                 <button type="button" className="w-full bg-navy-900 text-gold-500 font-bold py-3 rounded-lg hover:bg-navy-800 transition-colors">
                   Send Enquiry
                 </button>
               </form>

               <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3">
                 <a href="tel:09819732021" className="flex items-center justify-center gap-2 text-gray-600 hover:text-navy-900">
                   <Phone size={18} /> 09819732021
                 </a>
                 <a href="mailto:info@omestateagency.in" className="flex items-center justify-center gap-2 text-gray-600 hover:text-navy-900">
                   <Mail size={18} /> info@omestateagency.in
                 </a>
               </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default PropertyDetail;