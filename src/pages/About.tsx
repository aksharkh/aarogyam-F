import React from 'react';
// import { motion } from 'framer-motion';
import { CheckCircle, Award, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-emerald-50/50 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-2 mb-4 text-emerald-600 font-bold tracking-widest uppercase text-xs">
            <span className="w-10 h-[2px] bg-emerald-600"></span> Who We Are
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 leading-tight">
            Leading The Way In <br/>
            <span className="text-accent italic">Personalized Recovery</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Healex was founded on the principle that every patient deserves a treatment plan as unique as their fingerprint. We combine science-backed techniques with compassionate care.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
             <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" className="w-full h-[600px] object-cover" />
             <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
          </div>
          <div className="space-y-12">
            <div>
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-yellow-500/20">
                     <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
               </div>
               <p className="text-slate-600 leading-relaxed">To provide exceptional chiropractic and physiotherapy care that empowers individuals to regain their strength, mobility, and confidence through evidence-based practices.</p>
            </div>
            
            <div>
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-accent shadow-lg shadow-primary/20">
                     <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
               </div>
               <p className="text-slate-600 leading-relaxed">To be the global leader in physical rehabilitation, recognized for our commitment to innovation, excellence, and life-changing results for our patients.</p>
            </div>

            <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
               <h4 className="text-xl font-bold text-primary mb-4">Why Patients Trust Us?</h4>
               <ul className="grid grid-cols-2 gap-4">
                 {['Expert Doctors', 'Modern Tech', 'Affordable Care', 'Global Standards'].map(item => (
                   <li key={item} className="flex items-center gap-2 font-bold text-primary/80">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">The Values That Drive Us</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { title: 'Compassion', icon: Heart, desc: 'We listen to your story and treat you with the kindness and respect you deserve.' },
            { title: 'Excellence', icon: Award, desc: 'We never stop learning and improving to bring you the best possible outcomes.' },
            { title: 'Integrity', icon: CheckCircle, desc: 'Honesty and transparency are at the core of every treatment plan we suggest.' },
          ].map((val, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 text-center hover:bg-white hover:text-primary transition-all group">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-yellow-500/10 group-hover:bg-primary group-hover:text-white transition-all">
                <val.icon className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold mb-4">{val.title}</h4>
              <p className="opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
