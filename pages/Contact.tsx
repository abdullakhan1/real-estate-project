import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif font-bold text-navy-900 mb-12 text-center">Get in Touch</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 shadow-2xl rounded-2xl overflow-hidden">
          {/* Contact Info & Map */}
          <div className="bg-navy-900 text-white p-12 flex flex-col justify-between relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
             
             <div>
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-gold-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Head Office</h4>
                      <p className="text-gray-300">Shop No.G-3, Ground Floor, Kamdhenu Shopping Centre, Lokhandwala Complex Rd, Swami Samarth Nagar, Lokhandwala Complex, Andheri West, Mumbai, Maharashtra 400053</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-gold-500 shrink-0" />
                    <p className="text-gray-300">09819732021</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-gold-500 shrink-0" />
                    <p className="text-gray-300">info@omestateagency.in</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="text-gold-500 shrink-0" />
                    <p className="text-gray-300">Mon–Sat: 9:30 AM – 7:00 PM</p>
                  </div>
                </div>
             </div>
             
             {/* Map Placeholder */}
             <div className="mt-12 h-64 bg-navy-800 rounded-lg flex items-center justify-center border border-navy-700">
               <span className="text-gray-400">Google Map Embed</span>
             </div>
          </div>

          {/* Form */}
          <div className="bg-white p-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                   <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-navy-900" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                   <input type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-navy-900" />
                 </div>
               </div>
               
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-navy-900" />
               </div>

               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Interested In</label>
                  <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-navy-900">
                    <option>Buying a Property</option>
                    <option>Selling a Property</option>
                    <option>Renting</option>
                    <option>Investment Advice</option>
                    <option>Other</option>
                  </select>
               </div>

               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-navy-900"></textarea>
               </div>

               <button type="button" className="w-full bg-navy-900 text-gold-500 font-bold py-4 rounded-lg hover:bg-navy-800 transition-colors">
                 Submit Inquiry
               </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;