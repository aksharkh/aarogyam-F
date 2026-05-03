import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Clock, User, Phone, FileText } from 'lucide-react';

const Book: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Mock submission
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="py-24 px-6 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Book Consultation</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">Select a preferred date and time for your visit. Our reception will confirm your appointment shortly.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100"
      >
        {status === 'success' ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CalendarCheck className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Request Sent</h3>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">Your appointment request has been received. Our team will call you to confirm the exact time slot.</p>
            <button onClick={() => setStatus('idle')} className="text-cyan-600 font-bold hover:underline">
              Book another appointment
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2"><User className="w-4 h-4"/> Full Name</label>
                <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2"><Phone className="w-4 h-4"/> Phone Number</label>
                <input required type="tel" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2"><CalendarCheck className="w-4 h-4"/> Preferred Date</label>
                <input required type="date" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2"><Clock className="w-4 h-4"/> Preferred Time</label>
                <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none">
                  <option>Morning (9 AM - 12 PM)</option>
                  <option>Afternoon (12 PM - 4 PM)</option>
                  <option>Evening (4 PM - 7 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2"><FileText className="w-4 h-4"/> Reason for Visit</label>
              <textarea rows={3} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="Briefly describe your pain or condition..."></textarea>
            </div>

            <button disabled={status === 'submitting'} type="submit" className="w-full py-4 mt-4 bg-slate-900 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all disabled:opacity-50">
              {status === 'submitting' ? 'Sending...' : 'Request Appointment'}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Book;
