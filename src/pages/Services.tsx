import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Wind, UserCheck, ShieldCheck, HeartPulse, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    { title: 'Chiropractic Care', icon: Activity, desc: 'Aligning your spine to improve overall nervous system function and relieve chronic pain.' },
    { title: 'Massage Therapy', icon: Zap, desc: 'Deep tissue and restorative massage techniques to release muscle tension and stress.' },
    { title: 'Manual Therapy', icon: Wind, desc: 'Hands-on techniques to manipulate joints and soft tissues for improved mobility.' },
    { title: 'Post-Injury Rehab', icon: UserCheck, desc: 'Specialized programs designed to help athletes and active individuals return to peak performance.' },
    { title: 'Neurological Rehab', icon: ShieldCheck, desc: 'Helping patients recover from strokes, nerve injuries, and other neurological conditions.' },
    { title: 'Pediatric Physio', icon: HeartPulse, desc: 'Gentle care for children to support their physical development and healing.' }
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-primary text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center items-center gap-2 mb-4 text-accent font-bold tracking-[0.2em] uppercase text-xs">
            <span className="w-10 h-[2px] bg-accent"></span> Our Expertise
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Specialized Care For <br/>
            <span className="text-accent italic">Every Stage of Recovery</span>
          </h1>
          <p className="text-lg text-emerald-50/70 leading-relaxed max-w-2xl mx-auto font-medium">
            Discover our comprehensive range of services designed to help you live a pain-free and active lifestyle.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-900/5 hover:border-accent hover:shadow-yellow-500/5 transition-all group"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all mb-8 shadow-sm">
                <srv.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{srv.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8">{srv.desc}</p>
              <NavLink to="/book" className="flex items-center gap-2 font-bold text-primary hover:text-accent transition-all uppercase tracking-widest text-xs">
                BOOK SESSION <ArrowRight className="w-4 h-4" />
              </NavLink>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Focus Section from Images */}
      <section className="section-padding bg-emerald-50/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-primary mb-8">Modern Technology For Precise Treatment</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">We utilize state-of-the-art diagnostic and therapeutic equipment to ensure that every treatment is precise and effective.</p>
            <div className="grid grid-cols-2 gap-6">
               <div className="p-6 bg-white rounded-3xl border border-white shadow-sm">
                  <h4 className="font-bold text-primary mb-2 italic">Laser Therapy</h4>
                  <p className="text-xs text-slate-500">Accelerating cellular repair and reducing inflammation.</p>
               </div>
               <div className="p-6 bg-white rounded-3xl border border-white shadow-sm">
                  <h4 className="font-bold text-primary mb-2 italic">Digital Analysis</h4>
                  <p className="text-xs text-slate-500">Precise postural and movement analysis for accurate care.</p>
               </div>
            </div>
          </div>
          <div className="relative rounded-[4rem] overflow-hidden">
             <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
