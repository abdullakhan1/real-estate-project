import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-navy-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">A Legacy of Trust</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-6">Serving Mumbai's real estate needs since 2010 with integrity and transparency.</p>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
           <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" alt="Team" className="rounded-xl shadow-lg" />
           <div>
             <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Our Story</h2>
             <p className="text-gray-600 mb-6 leading-relaxed">
               Om Estate Agency was founded on a simple premise: Real estate should be simple, transparent, and client-centric. Over the last 15 years, we have grown from a small boutique agency in Bandra to one of Mumbai's most trusted names in luxury and commercial real estate.
             </p>
             <p className="text-gray-600 leading-relaxed">
               Our team of seasoned experts understands the pulse of the city. We don't just sell properties; we match lifestyles and business goals with the perfect spaces.
             </p>
           </div>
        </div>

        <h2 className="text-3xl font-serif font-bold text-center text-navy-900 mb-12">Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
           {[
             { name: "Arjun Khanna", role: "Founder & CEO", img: "https://picsum.photos/seed/ceo/400/400" },
             { name: "Priya Sharma", role: "Head of Residential", img: "https://picsum.photos/seed/head1/400/400" },
             { name: "Sameer Patel", role: "Head of Commercial", img: "https://picsum.photos/seed/head2/400/400" }
           ].map((member, idx) => (
             <div key={idx} className="text-center group">
               <div className="relative overflow-hidden rounded-xl mb-4 mx-auto w-full max-w-xs aspect-square">
                 <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <h3 className="text-xl font-bold text-navy-900">{member.name}</h3>
               <p className="text-gold-600">{member.role}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default About;