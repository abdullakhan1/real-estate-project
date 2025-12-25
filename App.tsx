import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, Linkedin, Twitter, Youtube, MapPin } from 'lucide-react';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AIChatBot from './components/AIChatBot';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-900 text-gray-300 py-2 text-xs hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
             <span className="flex items-center gap-2"><Phone size={12} className="text-gold-500"/> 09819732021</span>
             <span className="flex items-center gap-2"><Mail size={12} className="text-gold-500"/> info@omestateagency.in</span>
             <span className="flex items-center gap-2"><MapPin size={12} className="text-gold-500"/> Lokhandwala, Andheri (W)</span>
          </div>
          <div className="flex gap-4">
             <a href="#" className="hover:text-white">Schedule a Visit</a>
             <span>|</span>
             <a href="#" className="hover:text-white">Login</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold tracking-tighter flex items-center gap-2">
            <span className={`text-3xl ${scrolled ? 'text-navy-900' : 'text-white drop-shadow-md'}`}>Om</span>
            <span className={`text-gold-500 ${!scrolled && 'drop-shadow-md'}`}>Estate Agency</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-semibold uppercase tracking-wide hover:text-gold-500 transition-colors ${scrolled ? 'text-navy-900' : 'text-white drop-shadow-sm'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-gold-500 text-navy-900 px-6 py-2 rounded-full font-bold hover:bg-white transition-all text-sm shadow-md">
              Enquire Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden ${scrolled ? 'text-navy-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-navy-900 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-serif font-bold text-white">Om Estate Agency</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white">
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
             {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white hover:text-gold-500"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gold-500 text-navy-900 text-center py-3 rounded-lg font-bold mt-4"
              >
                Enquire Now
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-6">
       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Om <span className="text-gold-500">Estate Agency</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Mumbai's premier real estate agency helping you buy, sell, and rent luxury properties with confidence.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"><Instagram size={16} /></a>
               <a href="#" className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"><Linkedin size={16} /></a>
               <a href="#" className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"><Twitter size={16} /></a>
               <a href="#" className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"><Youtube size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-gold-500 transition-colors">Home</Link></li>
              <li><Link to="/properties" className="hover:text-gold-500 transition-colors">Properties</Link></li>
              <li><Link to="/services" className="hover:text-gold-500 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-gold-500 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Popular Areas */}
          <div>
            <h4 className="font-bold text-lg mb-6">Popular Areas</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/properties" className="hover:text-gold-500 transition-colors">Bandra West</Link></li>
              <li><Link to="/properties" className="hover:text-gold-500 transition-colors">South Mumbai</Link></li>
              <li><Link to="/properties" className="hover:text-gold-500 transition-colors">Juhu</Link></li>
              <li><Link to="/properties" className="hover:text-gold-500 transition-colors">Powai</Link></li>
              <li><Link to="/properties" className="hover:text-gold-500 transition-colors">Navi Mumbai</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-gold-500 shrink-0" size={18} />
                <span>Shop No.G-3, Lokhandwala Complex, Andheri (W), Mumbai - 400053</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-gold-500 shrink-0" size={18} />
                <span>09819732021</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-gold-500 shrink-0" size={18} />
                <span>info@omestateagency.in</span>
              </li>
            </ul>
          </div>
       </div>

       <div className="border-t border-navy-800 pt-6 text-center text-xs text-gray-500">
         <p>© 2025 Om Estate Agency Mumbai | RERA Reg. No. P518000xxxx | All Rights Reserved.</p>
       </div>
    </footer>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <AIChatBot />
      </div>
    </Router>
  );
};

export default App;