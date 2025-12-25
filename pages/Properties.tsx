import React, { useState, useEffect } from 'react';
import { Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';

const Properties: React.FC = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('All');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Set to 4 to demonstrate pagination with 6 mock items

  const toggleType = (type: string) => {
    setSelectedType(prev => {
        const newSelection = prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type];
        setCurrentPage(1); // Reset to first page on filter change
        return newSelection;
    });
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedLocation(e.target.value);
      setCurrentPage(1); // Reset to first page on filter change
  };

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Filtering logic
  const filteredProperties = PROPERTIES.filter(prop => {
    const typeMatch = selectedType.length === 0 || selectedType.includes(prop.type);
    const locMatch = selectedLocation === 'All' || prop.location.includes(selectedLocation);
    return typeMatch && locMatch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const displayedProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-offwhite min-h-screen pt-20 pb-20">
      <div className="bg-navy-900 py-12 mb-10">
         <div className="container mx-auto px-6">
            <h1 className="text-4xl font-serif font-bold text-white">Explore Properties</h1>
            <p className="text-gray-300 mt-2">Curated listings across Mumbai's prime locations</p>
         </div>
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button 
          onClick={() => setFilterOpen(true)}
          className="lg:hidden flex items-center justify-center gap-2 bg-white p-3 rounded-lg shadow-sm font-semibold text-navy-900"
        >
          <Filter size={20} /> Filters
        </button>

        {/* Sidebar Filters */}
        <div className={`
          fixed inset-0 z-50 bg-white p-6 transform transition-transform duration-300 lg:relative lg:transform-none lg:w-1/4 lg:bg-transparent lg:p-0 lg:z-0
          ${filterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="flex justify-between items-center lg:hidden mb-6">
             <h2 className="text-xl font-bold text-navy-900">Filters</h2>
             <button onClick={() => setFilterOpen(false)}><X /></button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
             {/* Type Filter */}
             <div className="mb-8">
               <h3 className="font-bold text-navy-900 mb-4">Property Type</h3>
               <div className="space-y-2">
                 {['Residential', 'Commercial', 'Luxury', 'Rental', 'New Project'].map(type => (
                   <label key={type} className="flex items-center gap-3 cursor-pointer">
                     <input 
                       type="checkbox" 
                       checked={selectedType.includes(type)}
                       onChange={() => toggleType(type)}
                       className="w-5 h-5 rounded text-gold-500 focus:ring-navy-900"
                     />
                     <span className="text-gray-600">{type}</span>
                   </label>
                 ))}
               </div>
             </div>

             {/* Location Filter */}
             <div className="mb-8">
               <h3 className="font-bold text-navy-900 mb-4">Location</h3>
               <select 
                 value={selectedLocation}
                 onChange={handleLocationChange}
                 className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-navy-900"
               >
                 <option value="All">All Mumbai</option>
                 <option value="Worli">South Mumbai (Worli, etc)</option>
                 <option value="Bandra">Bandra / Khar</option>
                 <option value="Andheri">Andheri / Juhu</option>
                 <option value="Navi Mumbai">Navi Mumbai</option>
               </select>
             </div>

             {/* Price Range (Visual Only for Demo) */}
             <div className="mb-8">
               <h3 className="font-bold text-navy-900 mb-4">Price Range</h3>
               <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-navy-900" />
               <div className="flex justify-between text-xs text-gray-500 mt-2">
                 <span>₹1 Cr</span>
                 <span>₹50 Cr+</span>
               </div>
             </div>

             <button 
              onClick={() => { setSelectedType([]); setSelectedLocation('All'); setCurrentPage(1); }}
              className="w-full py-2 text-sm text-gray-500 hover:text-navy-900 underline"
             >
               Reset Filters
             </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="lg:w-3/4">
          <div className="mb-6 flex justify-between items-center">
             <p className="text-gray-600">
                Showing <span className="font-bold text-navy-900">{displayedProperties.length}</span> of <span className="font-bold text-navy-900">{filteredProperties.length}</span> properties
             </p>
          </div>

          {filteredProperties.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {displayedProperties.map(prop => (
                 <PropertyCard key={prop.id} property={prop} />
               ))}
             </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl">
              <p className="text-gray-500">No properties found matching your criteria.</p>
              <button 
                 onClick={() => { setSelectedType([]); setSelectedLocation('All'); setCurrentPage(1); }}
                 className="mt-4 text-gold-600 font-bold"
              >
                Clear Filters
              </button>
            </div>
          )}
          
          {/* Enhanced Pagination */}
          {filteredProperties.length > 0 && totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-3">
              {/* Previous Button */}
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-navy-900 font-medium hover:border-gold-500 hover:text-gold-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-navy-900 transition-all duration-300"
              >
                <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              {/* Page Numbers */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold text-sm transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-navy-900 text-gold-500 shadow-lg scale-105'
                        : 'bg-white border border-gray-200 text-gray-500 hover:border-gold-500 hover:text-navy-900'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-navy-900 font-medium hover:border-gold-500 hover:text-gold-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-navy-900 transition-all duration-300"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;