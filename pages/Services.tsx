import React from 'react';
import { Home, Briefcase, FileText, TrendingUp, Key, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home size={40} />,
      title: "Residential Buying",
      desc: "From penthouses to starter homes, we help you navigate the market to find a home that fits your life."
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Sales & Listings",
      desc: "We market your property using premium photography and targeted campaigns to attract serious buyers."
    },
    {
      icon: <Briefcase size={40} />,
      title: "Commercial Leasing",
      desc: "Find the perfect office or retail space in Mumbai's business hubs like BKC and Lower Parel."
    },
    {
      icon: <Key size={40} />,
      title: "Rental Management",
      desc: "End-to-end property management for landlords, including tenant screening and rent collection."
    },
    {
      icon: <FileText size={40} />,
      title: "Investment Consulting",
      desc: "Data-driven ROI analysis for investors looking to build a high-yield real estate portfolio."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Legal Assistance",
      desc: "Our in-house legal experts ensure smooth documentation, title verification, and registration."
    }
  ];

  return (
    <div className="pt-20 bg-offwhite min-h-screen">
      <div className="bg-navy-900 py-16">
        <div className="container mx-auto px-6 text-center">
           <h1 className="text-4xl font-serif font-bold text-white mb-4">Our Services</h1>
           <p className="text-gray-300 max-w-2xl mx-auto">Comprehensive solutions for every step of your real estate journey.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {services.map((service, idx) => (
             <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border-t-4 border-transparent hover:border-gold-500 group">
                <div className="text-navy-900 group-hover:text-gold-500 transition-colors mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
             </div>
           ))}
         </div>
      </div>
    </div>
  );
};

export default Services;