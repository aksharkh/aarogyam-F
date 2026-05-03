import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <span className="text-cyan-600 font-bold uppercase tracking-widest text-sm mb-4 block">About Aarogyam</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Pioneering <span className="text-cyan-600">Rehabilitation.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
          Founded with a vision to integrate advanced physiotherapy techniques with compassionate care. We are committed to helping you achieve a pain-free, active life.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-cyan-50 border-8 border-white"
        >
          <img src="https://images.unsplash.com/photo-1551076805-e166946ce258?q=80&w=2103&auto=format&fit=crop" alt="Clinic Interior" className="w-full h-full object-cover" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Our Philosophy</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">We believe in evidence-based practice combined with personalized attention. Every body is different, and every treatment plan should be too.</p>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-cyan-100 p-2 rounded-lg text-cyan-600">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">The Team</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">Our physiotherapists hold advanced degrees and continuous certifications in orthopedics, sports medicine, and neuro-rehabilitation.</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">State-of-the-Art Facility</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">Equipped with the latest rehabilitation technology, including digital assessment tools and advanced therapeutic modalities.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
