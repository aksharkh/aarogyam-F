import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Activity, Star, Users, Calendar, Award } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto section-padding grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6 text-accent font-bold tracking-[0.2em] uppercase text-sm">
              <span className="w-10 h-[2px] bg-accent"></span>
              Feel Better, Move Freely, Live Fully
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 text-white">
              Chiropractic Care That Brings You <br/>
              <span className="text-accent italic">Back to Life</span>
            </h1>
            <p className="text-lg text-emerald-50/80 mb-10 max-w-xl leading-relaxed">
              Our expert team focuses on personalized treatments that target the root cause of discomfort helping you move better, feel stronger, and reach your goals.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <NavLink to="/book" className="btn-primary">
                BOOK AN APPOINTMENT <ArrowRight className="w-5 h-5" />
              </NavLink>
              <button className="flex items-center gap-3 text-white font-bold hover:text-accent transition-colors group">
                <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-primary transition-all">
                  <Play className="w-5 h-5 fill-current ml-1" />
                </div>
                PLAY VIDEO
              </button>
            </div>
            
            <div className="mt-16 flex gap-12 border-t border-white/10 pt-8">
              <div>
                <span className="text-3xl font-extrabold text-accent block">10K+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-50/60">Patients Healed</span>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-accent block">99%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-50/60">Success Rate</span>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-accent block">12+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-50/60">Expert Doctors</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-[4rem] overflow-hidden border-8 border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
                alt="Physiotherapy session" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>
            {/* Floating Special Offer Badge */}
            <div className="absolute -top-10 -right-10 bg-accent text-primary w-40 h-40 rounded-full flex flex-col items-center justify-center text-center p-4 border-8 border-white shadow-2xl rotate-12">
               <span className="text-[10px] font-black tracking-widest uppercase">Special</span>
               <span className="text-3xl font-black leading-none">OFFER</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Science-Back Treatment Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
               <img src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=1974&auto=format&fit=crop" className="rounded-3xl shadow-lg w-full h-64 object-cover" />
               <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-lg w-full h-80 object-cover" />
            </div>
            <div className="space-y-4">
               <img src="https://images.unsplash.com/photo-1586773860418-d3b97950569e?q=80&w=2073&auto=format&fit=crop" className="rounded-3xl shadow-lg w-full h-80 object-cover" />
               <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" className="rounded-3xl shadow-lg w-full h-64 object-cover" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4 text-emerald-600 font-bold tracking-widest uppercase text-xs">
              <span className="w-10 h-[2px] bg-emerald-600"></span> About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Science-Back Treatment Personalized Recovery Plans Results That Last
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              At our clinic, believe recovery is more than just physical it's emotional, personal transformative. That's why we take the time to understand your story, your pain, and your goals expert.
            </p>
            <ul className="space-y-4 mb-10">
              {['Restoring Movement', 'Rebuilding Lives', 'We Don\'t Just Treat Injuries'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-bold text-primary">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <NavLink to="/about" className="btn-primary inline-flex">
              SCHEDULE A SESSION
            </NavLink>
          </div>
        </div>
      </section>

      {/* Therapy Categories */}
      <section className="section-padding bg-emerald-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-2 mb-4 text-emerald-600 font-bold tracking-widest uppercase text-xs">
              <span className="w-10 h-[2px] bg-emerald-600"></span> Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Therapy That Adapts To You, Not The Other Way Around</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Massage, Chiropractic', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920' },
              { title: 'Manual Therapy', img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1920' },
              { title: 'Neurological Rehab', img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1920' },
              { title: 'Sports Medicine', img: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=1920' },
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={srv.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">{srv.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">Providing high-quality care that focuses on your specific needs.</p>
                  <NavLink to="/services" className="text-primary font-bold flex items-center gap-2 group-hover:text-accent transition-colors">
                    READ MORE <ArrowRight className="w-4 h-4" />
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="section-padding bg-primary text-white relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-[3rem] overflow-hidden">
             <img src="https://images.unsplash.com/photo-1519824141121-9974545783d3?q=80&w=2071&auto=format&fit=crop" className="w-full h-[600px] object-cover" />
             <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4 text-accent font-bold tracking-widest uppercase text-xs">
              <span className="w-10 h-[2px] bg-accent"></span> Why Healex
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Personalized Care & Discovery We Guide Every Step</h2>
            <div className="space-y-8">
              {[
                { title: 'Personalized Treatment Plan', icon: Award },
                { title: 'Qualified & Licensed Experts', icon: Users },
                { title: 'Modern Facilities & Equipments', icon: Activity },
                { title: 'Affordable Pricing Models', icon: Calendar },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-accent text-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-yellow-500/10">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-emerald-50/60 leading-relaxed">Ensuring every step of your recovery is handled with utmost professional care.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4 text-emerald-600 font-bold tracking-widest uppercase text-xs">
                <span className="w-10 h-[2px] bg-emerald-600"></span> Our Team
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold">Your Healing, Powered By People Who Care</h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><ArrowRight className="w-5 h-5 rotate-180" /></button>
              <button className="w-12 h-12 rounded-full border border-slate-200 bg-accent text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"><ArrowRight className="w-5 h-5" /></button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Joshua Jones', role: 'Lead Massage Therapist', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070' },
              { name: 'Dennis Callis', role: 'Postnatal Expert', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070' },
              { name: 'Kenneth Allen', role: 'Recover Therapist', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2070' },
              { name: 'Alex Buckmaster', role: 'Holistic Massage', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070' },
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative h-[400px] rounded-[3rem] overflow-hidden mb-6">
                  <img src={member.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-8">
                    <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-2">{member.role}</p>
                    <h4 className="text-white text-2xl font-bold">{member.name}</h4>
                  </div>
                </div>
                <div className="text-center group-hover:hidden transition-all">
                  <h4 className="text-xl font-bold text-primary">{member.name}</h4>
                  <p className="text-slate-500 text-sm font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-emerald-50/30">
        <div className="max-w-7xl mx-auto bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3">
             <div className="relative rounded-[3rem] overflow-hidden aspect-square">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" />
             </div>
          </div>
          <div className="flex-grow">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-accent fill-accent" />)}
            </div>
            <p className="text-2xl md:text-3xl font-bold text-primary italic leading-relaxed mb-10">
              "The team at Healex provided exceptional care. After my sports injury, I thought I'd never run again, but their recovery plan worked wonders. I'm now back on the field stronger than ever!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974" className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="text-lg font-extrabold text-primary">Mark Sullivan</h5>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Professional Athlete</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding pb-0 bg-white">
        <div className="max-w-7xl mx-auto bg-primary rounded-[4rem] px-12 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Ready To Take The First Step Toward A Pain-Free Life?</h2>
            <p className="text-emerald-50/70 text-lg">Don't let pain hold you back any longer. Join 10,000+ happy patients today.</p>
          </div>
          <div className="relative z-10">
            <div className="flex bg-white rounded-full p-2 w-full md:w-[450px]">
              <input type="email" placeholder="Your Email Address" className="flex-grow px-6 py-4 bg-transparent text-primary font-bold focus:outline-none" />
              <button className="bg-accent text-primary px-8 py-4 rounded-full font-black tracking-widest uppercase text-sm hover:bg-white transition-colors shadow-lg">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        
        {/* Visual overlap from image */}
        <div className="max-w-7xl mx-auto h-32 bg-white"></div>
      </section>
    </div>
  );
};

export default Home;
