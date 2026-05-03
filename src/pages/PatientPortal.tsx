import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ClipboardList, ActivitySquare, PenTool, CheckCircle, Video } from 'lucide-react';

const PatientPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trackRecord');

  const tabs = [
    { id: 'trackRecord', label: 'Track Record & Progress', icon: ActivitySquare },
    { id: 'assessments', label: 'Initial Assessments', icon: ClipboardList },
    { id: 'exercises', label: 'Prescribed Exercises', icon: Video },
    { id: 'consent', label: 'Consent Undertaking', icon: PenTool },
  ];

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Patient Portal</h1>
        <p className="text-slate-500">Welcome back, John Doe. Here is your recovery dashboard.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 sticky top-28">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === tab.id 
                      ? 'bg-cyan-50 text-cyan-700' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-cyan-600' : 'text-slate-400'}`} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-grow">
          <div className="bg-white rounded-3xl p-8 min-h-[600px] shadow-lg shadow-slate-200/50 border border-slate-100">
            <AnimatePresence mode="wait">
              {activeTab === 'trackRecord' && (
                <motion.div
                  key="trackRecord"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Track Record & Remarks</h2>
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                    {/* Timeline Item 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-cyan-100 text-cyan-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-slate-800">Session 3</span>
                          <time className="text-xs font-semibold text-cyan-600">May 1, 2026</time>
                        </div>
                        <p className="text-sm text-slate-600">Patient reported 40% reduction in lower back pain. Mobility in lumbar spine has improved. Continued manual therapy and introduced core stabilization exercises.</p>
                      </div>
                    </div>
                    {/* Timeline Item 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-slate-800">Session 2</span>
                          <time className="text-xs text-slate-500">Apr 24, 2026</time>
                        </div>
                        <p className="text-sm text-slate-600">Focus on myofascial release. Tolerated treatment well. Mild soreness post-treatment as expected.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'assessments' && (
                <motion.div
                  key="assessments"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Initial Assessment</h2>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                      <div>
                        <h3 className="font-bold text-slate-800">Physiotherapy Evaluation Report</h3>
                        <p className="text-sm text-slate-500">Date of Consultation: April 15, 2026</p>
                      </div>
                      <FileText className="w-8 h-8 text-cyan-600" />
                    </div>
                    <div className="space-y-4 text-sm">
                      <div>
                        <span className="font-bold text-slate-700 block mb-1">Chief Complaint:</span>
                        <p className="text-slate-600">Chronic lower back pain radiating to left glute, exacerbated by sitting for prolonged periods.</p>
                      </div>
                      <div>
                        <span className="font-bold text-slate-700 block mb-1">Objective Findings:</span>
                        <p className="text-slate-600">Decreased lumbar flexion (40 deg). Positive straight leg raise on left at 60 deg. Muscle spasm in left erector spinae.</p>
                      </div>
                      <div>
                        <span className="font-bold text-slate-700 block mb-1">Diagnosis:</span>
                        <p className="text-slate-600">L4-L5 discogenic pain with mild left-sided sciatica.</p>
                      </div>
                      <div>
                        <span className="font-bold text-slate-700 block mb-1">Treatment Plan:</span>
                        <p className="text-slate-600">Manual therapy, core strengthening, postural correction. 2 sessions/week for 4 weeks.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'exercises' && (
                <motion.div
                  key="exercises"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">Prescribed Exercises</h2>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Phase 1: Core Activation</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: 'Pelvic Tilts', reps: '3 sets of 10 reps', freq: 'Daily', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop' },
                      { title: 'Bird Dog', reps: '3 sets of 8 reps per side', freq: 'Daily', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop' },
                      { title: 'Cat-Cow Stretch', reps: '2 sets of 15 reps', freq: 'Twice Daily', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop' }
                    ].map((ex, i) => (
                      <div key={i} className="border border-slate-200 rounded-xl overflow-hidden group cursor-pointer hover:border-cyan-300 transition-colors">
                        <div className="aspect-video bg-slate-100 relative">
                          <img src={ex.img} alt={ex.title} className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                          <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                               <Video className="w-5 h-5 text-cyan-600 ml-1" />
                             </div>
                          </div>
                        </div>
                        <div className="p-4 bg-white">
                          <h4 className="font-bold text-slate-800 mb-1">{ex.title}</h4>
                          <div className="flex justify-between text-xs text-slate-500">
                            <span>{ex.reps}</span>
                            <span className="font-semibold text-cyan-600">{ex.freq}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'consent' && (
                <motion.div
                  key="consent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Consent & Undertaking</h2>
                  <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mb-6">
                    <h3 className="font-bold text-amber-800 mb-2">Informed Consent for Physiotherapy Treatment</h3>
                    <p className="text-sm text-amber-700/80 mb-4">Please read the following information carefully before signing.</p>
                    <div className="h-48 overflow-y-auto bg-white p-4 rounded-lg border border-amber-100 text-sm text-slate-600 mb-4">
                      <p className="mb-2">1. I hereby consent to the performance of physiotherapy assessments and treatments by the registered physiotherapists at Aarogyam Clinic.</p>
                      <p className="mb-2">2. I understand that the treatments may include manual therapy, exercise prescription, electrotherapy, and other modalities as deemed necessary.</p>
                      <p className="mb-2">3. I acknowledge that while physiotherapy is generally safe, there are potential risks, including temporary soreness or exacerbation of symptoms.</p>
                      <p className="mb-2">4. I have the right to ask questions about my treatment and may withdraw my consent at any time.</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="consent" className="w-5 h-5 rounded border-amber-300 text-amber-600 focus:ring-amber-500" />
                      <label htmlFor="consent" className="text-sm font-bold text-amber-900 cursor-pointer">I have read, understood, and agree to the terms above.</label>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-cyan-600 transition-colors">
                    Sign & Submit Consent
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;
