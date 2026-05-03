import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    { title: 'Manual Therapy', desc: 'Hands-on techniques to mobilize joints, massage soft tissues, and reduce tension.' },
    { title: 'Exercise Therapy', desc: 'Customized exercise protocols to build strength, improve flexibility, and restore function.' },
    { title: 'Post-Surgical Rehab', desc: 'Guided recovery protocols following orthopedic surgeries like ACL repair or joint replacement.' },
    { title: 'Sports Injury Clinic', desc: 'Targeted assessments and sport-specific training to return athletes to play safely.' },
    { title: 'Postural Correction', desc: 'Ergonomic assessments and exercises to fix imbalances causing chronic neck and back pain.' },
    { title: 'Electrotherapy', desc: 'Use of ultrasound, TENS, and laser therapy to accelerate tissue healing and manage pain.' }
  ];

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Treatments</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Evidence-based physiotherapy tailored to your unique condition.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((srv, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-cyan-400 hover:shadow-xl transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
              {idx + 1}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{srv.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{srv.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
