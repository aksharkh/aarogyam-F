import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, HeartPulse, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Accepting New Patients
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Reclaim Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-500">Mobility & Life.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed font-light">
              Advanced physiotherapy and holistic rehabilitation tailored specifically to your body's needs. We don't just treat symptoms; we heal the source.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] flex items-center gap-2 hover:-translate-y-1">
                Book Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/patient-portal" className="px-8 py-4 bg-white border border-slate-200 hover:border-cyan-200 text-slate-700 hover:text-cyan-600 font-bold rounded-full transition-all flex items-center gap-2 shadow-sm">
                Patient Portal
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative">
              {/* Note: Replacing with a generic rehab/physio image since no specific video was provided */}
              <img src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=2069&auto=format&fit=crop" alt="Physiotherapy session" className="w-full h-full object-cover" />
              
              {/* Floating glass badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-10 glass-panel p-4 rounded-2xl flex items-center gap-4"
              >
                <div className="bg-emerald-100 p-3 rounded-full">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Certified Experts</p>
                  <p className="text-xs text-slate-500">10+ Years Experience</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-10 glass-panel p-4 rounded-2xl flex items-center gap-4"
              >
                <div className="bg-cyan-100 p-3 rounded-full">
                  <Activity className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">98% Success Rate</p>
                  <p className="text-xs text-slate-500">In Pain Recovery</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Specialties</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Comprehensive care designed to restore function, alleviate pain, and prevent future injuries.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: HeartPulse, title: 'Sports Rehabilitation', desc: 'Accelerated recovery programs for athletes to return to peak performance safely.', color: 'text-rose-500', bg: 'bg-rose-50', border: 'border-rose-100' },
              { icon: Activity, title: 'Orthopedic Physio', desc: 'Treatment for joint, muscle, and ligament issues, including post-operative care.', color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-100' },
              { icon: Stethoscope, title: 'Neurological Rehab', desc: 'Specialized therapy for stroke, Parkinson\'s, and other neurological conditions.', color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-100' },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-3xl border ${service.border} bg-white shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all cursor-pointer`}
              >
                <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Portal Teaser */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Digital Recovery Companion</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Log into our state-of-the-art Patient Portal to access your track records, view initial assessments, sign digital consent forms, and follow your prescribed exercise routines from home.
            </p>
            <Link to="/patient-portal" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-cyan-50 transition-colors">
              Access Portal Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="w-full md:w-1/3 glass-panel border-slate-700 bg-slate-800/50 p-8 rounded-3xl">
             <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">1</div>
                  <span className="font-semibold">Track your progress</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">2</div>
                  <span className="font-semibold">View prescribed exercises</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">3</div>
                  <span className="font-semibold">Digital consent forms</span>
                </li>
             </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
