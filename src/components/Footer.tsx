import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, Phone, Mail, MapPin, } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      {/* Decorative Mandala/Pattern Placeholder from Images */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4">
        <Activity className="w-[600px] h-[600px]" strokeWidth={0.5} />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div className="space-y-6">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="bg-white/10 p-2.5 rounded-xl border border-white/20">
              <Activity className="w-8 h-8 text-accent" />
            </div>
            <div>
              <span className="text-3xl font-extrabold text-white block leading-none tracking-tight">HEALEX</span>
              <span className="text-xs font-bold text-accent tracking-[0.2em] uppercase">Physiotherapy</span>
            </div>
          </NavLink>
          <p className="text-emerald-50/70 text-[15px] leading-relaxed max-w-sm">
            We are team licensed physiotherapists dedicate to help you move better, feel stronger, live pain-free. Through personalized care, expert guidance, & proven techniques, support recovery.
          </p>
          <div className="flex gap-4">
            {[Phone, Phone, Phone, Phone].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 text-accent uppercase tracking-widest">Working Hours</h4>
          <ul className="space-y-4 text-emerald-50/80 font-medium">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Mon-Wed:</span>
              <span className="text-accent">8:00 AM - 7:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Thu-Sat:</span>
              <span className="text-accent">9:00 AM - 5:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday:</span>
              <span className="text-emerald-300">Full Day Closed</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 text-accent uppercase tracking-widest">Top Links</h4>
          <ul className="grid grid-cols-2 gap-4 text-emerald-50/80 font-medium">
            <li><NavLink to="/" className="hover:text-accent">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-accent">About Us</NavLink></li>
            <li><NavLink to="/services" className="hover:text-accent">Services</NavLink></li>
            <li><NavLink to="/patient-portal" className="hover:text-accent">Portal</NavLink></li>
            <li><NavLink to="/book" className="hover:text-accent">Booking</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-accent">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 text-accent uppercase tracking-widest">Contact Us</h4>
          <ul className="space-y-5 text-emerald-50/80 font-medium">
            <li className="flex gap-4">
              <MapPin className="w-6 h-6 text-accent shrink-0" />
              <span>421 Alen, Mexico 4233</span>
            </li>
            <li className="flex gap-4">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <span>+1 123 456 7890</span>
            </li>
            <li className="flex gap-4">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <span>info@healextherapy.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-50/50 font-medium">
        <p>© Copyright 2025 Healex. All Right Reserved</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-accent">Terms Of Condition</a>
          <a href="#" className="hover:text-accent">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
