import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Clock, User, Phone, FileText, ShieldCheck } from 'lucide-react';

const Book: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (9 AM - 12 PM)',
    reason: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('http://localhost:8080/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('idle');
        alert("Failed to book appointment. Backend might be down.");
      }
    } catch (error) {
      console.error(error);
      setStatus('idle');
      alert("Network error connecting to backend.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (
    <div className="bg-emerald-50/50 min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2 mb-4 text-emerald-600 font-bold tracking-widest uppercase text-xs">
            <span className="w-10 h-[2px] bg-emerald-600"></span> Booking
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 leading-tight">
            Take The First Step <br/>
            To Your <span className="text-accent italic">Recovery</span>
          </h1>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            Fill out the form to request your appointment. Our dedicated reception team will review your request and contact you to confirm the best available time slot.
          </p>

          <div className="space-y-6 mb-12">
             {[
               { title: 'Personalized Care', desc: 'Every treatment plan is tailored to you.' },
               { title: 'Secure Data', desc: 'Your health information is always protected.' },
               { title: 'Fast Confirmation', desc: 'We usually respond within 2-4 hours.' }
             ].map((item, i) => (
               <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-accent shadow-sm shrink-0 border border-slate-100">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden"
        >
          {status === 'success' ? (
            <div className="text-center py-12 relative z-10">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-md">
                <CalendarCheck className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-extrabold text-primary mb-4 uppercase tracking-tighter">Request Received!</h3>
              <p className="text-slate-500 mb-8 max-w-sm mx-auto font-medium">Your request has been sent to our doctors. We will call you at your provided number shortly to confirm the appointment.</p>
              <button onClick={() => setStatus('idle')} className="btn-outline w-full">
                BOOK ANOTHER VISIT
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <h3 className="text-2xl font-black text-primary mb-8 uppercase tracking-widest text-center border-b border-slate-100 pb-6">Appointment Form</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-primary/50 mb-2 uppercase tracking-[0.2em] ml-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-accent transition-all font-medium" placeholder="Mark Sullivan" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-primary/50 mb-2 uppercase tracking-[0.2em] ml-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-accent transition-all font-medium" placeholder="+1 123 456 7890" />
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-primary/50 mb-2 uppercase tracking-[0.2em] ml-2">Preferred Date</label>
                  <div className="relative">
                    <CalendarCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input required type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-accent transition-all font-medium text-slate-700" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-primary/50 mb-2 uppercase tracking-[0.2em] ml-2">Time Slot</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-accent transition-all font-medium appearance-none text-slate-700">
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 4 PM)</option>
                      <option>Evening (4 PM - 7 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-primary/50 mb-2 uppercase tracking-[0.2em] ml-2">Reason for Visit</label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                  <textarea name="reason" value={formData.reason} onChange={handleChange} rows={3} className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-accent transition-all font-medium" placeholder="How can we help you?"></textarea>
                </div>
              </div>

              <button disabled={status === 'submitting'} type="submit" className="btn-primary w-full py-5 text-sm uppercase tracking-[0.2em]">
                {status === 'submitting' ? 'SUBMITTING...' : 'CONFIRM BOOKING'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Book;
