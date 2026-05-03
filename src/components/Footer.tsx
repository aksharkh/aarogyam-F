import React from 'react';
import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Activity className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block leading-tight">Aarogyam</span>
              <span className="text-[10px] font-semibold text-cyan-400 tracking-wider uppercase block">Physio & Rehab</span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
            Restoring movement, relieving pain, and renewing lives. Our expert team provides personalized physiotherapy and rehabilitation services to get you back to your best.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About the Clinic</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Treatments</Link></li>
            <li><Link to="/patient-portal" className="hover:text-cyan-400 transition-colors">Patient Portal</Link></li>
            <li><Link to="/book" className="hover:text-cyan-400 transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li>123 Healing Way</li>
            <li>Wellness City, WC 10020</li>
            <li className="pt-2">care@aarogyam.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Aarogyam Physiotherapy Clinic. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-slate-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
