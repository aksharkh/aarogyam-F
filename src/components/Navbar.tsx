import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Patient Portal', path: '/patient-portal' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-6 md:px-12 lg:px-24 hidden md:flex justify-between items-center text-xs font-medium">
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><MapPin className="w-3 h-3 text-accent" /> 123 Health Ave, Wellness City</span>
          <span className="flex items-center gap-2"><Mail className="w-3 h-3 text-accent" /> info@aarogyam.com</span>
        </div>
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><Phone className="w-3 h-3 text-accent" /> (555) 123-4567</span>
          <NavLink to="/contact" className="hover:text-accent transition-colors underline decoration-accent">Contact Us</NavLink>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2.5">
            <div className="bg-primary p-2 rounded-xl">
              <Activity className="w-7 h-7 text-accent" />
            </div>
            <div>
              <span className="text-2xl font-extrabold text-primary block leading-none tracking-tight">HEALEX</span>
              <span className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase">Physiotherapy</span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-8 text-[15px] font-bold text-primary/80 uppercase tracking-wide">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path} 
                  to={link.path} 
                  className={({ isActive }) => `hover:text-primary transition-all relative group ${isActive ? 'text-primary' : ''}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                </NavLink>
              ))}
            </div>
            <NavLink to="/book" className="btn-primary py-2.5 px-7 text-sm">
              GET STARTED
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-primary py-2 border-b border-slate-50"
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/book" onClick={() => setIsOpen(false)} className="btn-primary mt-4">
              BOOK APPOINTMENT
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
