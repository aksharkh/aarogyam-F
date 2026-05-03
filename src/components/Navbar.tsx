import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, UserCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 top-0 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="bg-cyan-100 p-2 rounded-lg group-hover:bg-cyan-200 transition-colors">
            <Activity className="w-6 h-6 text-cyan-600" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-slate-800 block leading-tight">Aarogyam</span>
            <span className="text-[10px] font-semibold text-cyan-600 tracking-wider uppercase block">Physio & Rehab</span>
          </div>
        </NavLink>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <NavLink to="/" className={({ isActive }) => `transition-colors hover:text-cyan-600 ${isActive ? 'text-cyan-600' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `transition-colors hover:text-cyan-600 ${isActive ? 'text-cyan-600' : ''}`}>
            About Clinic
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `transition-colors hover:text-cyan-600 ${isActive ? 'text-cyan-600' : ''}`}>
            Services
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <NavLink to="/patient-portal" className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-cyan-600 transition-colors">
            <UserCircle className="w-5 h-5" />
            Patient Portal
          </NavLink>
          <NavLink to="/book" className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-cyan-600/30 transition-all hover:-translate-y-0.5">
            Book Appointment
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
