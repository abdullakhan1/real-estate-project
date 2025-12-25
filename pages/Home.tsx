import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home as HomeIcon, Briefcase, FileText, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { PROPERTIES, TESTIMONIALS, BLOG_POSTS } from '../constants';
import PropertyCard from '../components/PropertyCard';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop" 
            alt="Mumbai Skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">
            Find Your Dream Property <br /> in <span className="text-gold-500">Mumbai</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
            Luxury apartments, premium offices, and investment-ready spaces — handpicked by experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/properties" className="bg-gold-500 text-navy-900 hover:bg-gold-600 px-8 py-3 rounded-full font-semibold transition-all">
              Explore Properties
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-navy-900 px-8 py-3 rounded-full font-semibold transition-all">
              Book Consultation
            </Link>
          </div>

          {/* Search Bar Overlay */}
          <div className="bg-white p-4 rounded-lg shadow-xl max-w-4xl mx-auto hidden md:flex items-center gap-4">
             <div className="flex-1 border-r border-gray-200 px-4">
               <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Location</label>
               <select className="w-full outline-none text-navy-900 bg-transparent font-medium">
                 <option>All Locations</option>
                 <option>South Mumbai</option>
                 <option>Bandra</option>
                 <option>Andheri</option>
               </select>
             </div>
             <div className="flex-1 border-r border-gray-200 px-4">
               <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Type</label>
               <select className="w-full outline-none text-navy-900 bg-transparent font-medium">
                 <option>Residential</option>
                 <option>Commercial</option>
                 <option>Luxury</option>
               </select>
             </div>
             <div className="flex-1 px-4">
               <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Budget</label>
               <select className="w-full outline-none text-navy-900 bg-transparent font-medium">
                 <option>Any Budget</option>
                 <option>₹1 Cr - ₹3 Cr</option>
                 <option>₹3 Cr - ₹10 Cr</option>
                 <option>₹10 Cr+</option>
               </select>
             </div>
             <button className="bg-navy-900 hover:bg-navy-800 text-white p-4 rounded-lg transition-colors">
               <Search size={24} />
             </button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-offwhite">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-3">Hot Listings in Mumbai</h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.slice(0, 3).map(prop => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/properties" className="inline-flex items-center text-navy-900 font-semibold hover:text-gold-600 transition-colors border-b-2 border-transparent hover:border-gold-600 pb-1">
              View All Properties <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
             <div className="mb-6 md:mb-0">
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-2">What We Offer</h2>
               <p className="text-gray-600">Comprehensive real estate solutions tailored for you.</p>
             </div>
             <Link to="/services" className="text-gold-600 font-semibold hover:text-navy-900 transition-colors">
               See All Services &rarr;
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <HomeIcon size={32} />, title: "Buying", desc: "Expert guidance to find your dream home." },
              { icon: <TrendingUp size={32} />, title: "Selling", desc: "Get the best market price for your asset." },
              { icon: <Briefcase size={32} />, title: "Investment", desc: "Maximize returns with data-driven advice." },
              { icon: <FileText size={32} />, title: "Legal", desc: "Hassle-free documentation and verification." }
            ].map((service, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg hover:border-gold-500 transition-all group">
                <div className="w-16 h-16 rounded-full bg-navy-50 flex items-center justify-center text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-500 transition-colors mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-navy-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Choose <br /><span className="text-gold-500">Om Estate Agency?</span></h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We blend local expertise with global standards to deliver results that exceed expectations. Whether you are looking for a sea-facing apartment or a high-yield commercial space, we have the network and knowledge to make it happen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { num: "15+", label: "Years Experience" },
                  { num: "400+", label: "Properties Closed" },
                  { num: "800+", label: "Happy Clients" },
                ].map((stat, idx) => (
                  <div key={idx} className="border-l-4 border-gold-500 pl-4">
                    <div className="text-3xl font-bold">{stat.num}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop" alt="Meeting" className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl hidden md:block">
                 <div className="flex items-center gap-4">
                   <div className="bg-green-100 p-3 rounded-full text-green-600">
                     <CheckCircle size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-navy-900">RERA Registered</p>
                     <p className="text-xs text-gray-500">100% Compliant Agency</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-offwhite">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-serif font-bold text-center text-navy-900 mb-12">Client Stories</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {TESTIMONIALS.map(t => (
               <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-4 mb-6">
                   <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                   <div>
                     <h4 className="font-bold text-navy-900">{t.name}</h4>
                     <p className="text-xs text-gray-500 uppercase">{t.role}</p>
                   </div>
                 </div>
                 <p className="text-gray-600 italic">"{t.content}"</p>
               </div>
             ))}
           </div>
        </div>
      </section>
      
      {/* Blog Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
           <div className="flex justify-between items-end mb-10">
              <h2 className="text-3xl font-serif font-bold text-navy-900">Market Insights</h2>
              <Link to="/blog" className="hidden sm:block text-navy-900 font-semibold hover:text-gold-600">View Blog</Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.map(post => (
                <div key={post.id} className="group cursor-pointer">
                   <div className="overflow-hidden rounded-lg mb-4">
                     <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                   </div>
                   <div className="flex items-center gap-2 text-xs text-gold-600 font-bold uppercase mb-2">
                      <span>{post.category}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500 font-normal">{post.date}</span>
                   </div>
                   <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-2">{post.title}</h3>
                   <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative container mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to find your Mumbai dream home?</h2>
           <Link to="/contact" className="inline-block bg-gold-500 text-navy-900 hover:bg-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-gold-500/20">
             Contact Our Experts
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;