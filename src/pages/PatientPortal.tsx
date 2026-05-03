import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, Activity, PenTool, CheckCircle, Video, User, MapPin, Calendar, Bell } from 'lucide-react';

const PatientPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trackRecord');
  const [patient, setPatient] = useState<any>(null);
  const [trackRecords, setTrackRecords] = useState<any[]>([]);
  const [assessments, setAssessments] = useState<any[]>([]);
  const [exercises, setExercises] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const PATIENT_ID = 1;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [patientRes, recordsRes, assessRes, exRes] = await Promise.all([
          fetch(`http://localhost:8080/api/patients/${PATIENT_ID}`),
          fetch(`http://localhost:8080/api/patients/${PATIENT_ID}/track-records`),
          fetch(`http://localhost:8080/api/patients/${PATIENT_ID}/assessments`),
          fetch(`http://localhost:8080/api/patients/${PATIENT_ID}/exercises`),
        ]);

        if (patientRes.ok) setPatient(await patientRes.json());
        if (recordsRes.ok) setTrackRecords(await recordsRes.json());
        if (assessRes.ok) setAssessments(await assessRes.json());
        if (exRes.ok) setExercises(await exRes.json());
      } catch (error) {
        console.error("Error fetching data from backend", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const tabs = [
    { id: 'trackRecord', label: 'History', icon: Activity },
    { id: 'assessments', label: 'Assessments', icon: ClipboardList },
    { id: 'exercises', label: 'Exercises', icon: Video },
    { id: 'consent', label: 'Consent', icon: PenTool },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <Activity className="w-12 h-12 text-primary animate-pulse" />
          <span className="font-black text-primary tracking-widest text-xs uppercase">Loading Dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Dashboard Top Header */}
      <div className="bg-primary text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-6">
             <div className="w-20 h-20 rounded-3xl bg-accent flex items-center justify-center border-4 border-white/10 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070" className="w-full h-full object-cover" />
             </div>
             <div>
               <h1 className="text-3xl font-extrabold mb-1">{patient?.name || 'Mark Sullivan'}</h1>
               <div className="flex flex-wrap gap-4 text-emerald-50/60 text-xs font-bold uppercase tracking-widest">
                 <span className="flex items-center gap-1"><User className="w-3 h-3 text-accent" /> Patient ID: #{patient?.id || '001'}</span>
                 <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-accent" /> {patient?.address || 'Wellness City'}</span>
               </div>
             </div>
          </div>
          <div className="flex gap-4">
             <button className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-all relative">
               <Bell className="w-6 h-6" />
               <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-primary"></span>
             </button>
             <button className="px-6 py-3 bg-accent text-primary font-bold rounded-2xl hover:bg-white transition-all text-sm uppercase tracking-widest">
               UPDATE PROFILE
             </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-8 grid lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border border-slate-100 sticky top-32">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-xs font-black transition-all uppercase tracking-widest ${
                    activeTab === tab.id 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'text-slate-400 hover:bg-slate-50 hover:text-primary'
                  }`}
                >
                  <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-accent' : ''}`} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 min-h-[600px] shadow-2xl border border-slate-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <Activity className="w-40 h-40" />
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'trackRecord' && (
                <motion.div
                  key="trackRecord"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="text-2xl font-black text-primary mb-12 uppercase tracking-widest border-b border-slate-50 pb-6">Recovery Timeline</h2>
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-slate-100">
                    {trackRecords.map((record, index) => (
                      <div key={record.id} className="relative flex items-center gap-8 group">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-2xl border-4 border-white ${index === 0 ? 'bg-primary text-accent' : 'bg-slate-100 text-slate-400'} shadow-lg z-10 shrink-0`}>
                          {index === 0 ? <CheckCircle className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-slate-400"></div>}
                        </div>
                        <div className="flex-grow bg-slate-50 rounded-[2rem] p-8 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                          <div className="flex justify-between items-start mb-4">
                             <div>
                               <h3 className="font-black text-primary uppercase tracking-wide text-lg">{record.sessionTitle}</h3>
                               <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">{new Date(record.sessionDate).toLocaleDateString()}</p>
                             </div>
                             <div className="px-3 py-1 bg-white rounded-lg text-[10px] font-black text-primary shadow-sm border border-slate-50">SESSION #{trackRecords.length - index}</div>
                          </div>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed italic">"{record.remarks}"</p>
                        </div>
                      </div>
                    ))}
                    {trackRecords.length === 0 && <p className="text-center text-slate-400 font-bold uppercase tracking-widest py-20">No history found.</p>}
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
                  <h2 className="text-2xl font-black text-primary mb-12 uppercase tracking-widest border-b border-slate-50 pb-6">Expert Assessments</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {assessments.map(assessment => (
                      <div key={assessment.id} className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 hover:bg-white hover:shadow-2xl transition-all group">
                        <div className="flex items-start justify-between mb-8">
                          <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-accent">
                            <ClipboardList className="w-7 h-7" />
                          </div>
                          <div className="text-right">
                             <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</div>
                             <div className="font-bold text-primary">{new Date(assessment.assessmentDate).toLocaleDateString()}</div>
                          </div>
                        </div>
                        <h3 className="font-black text-primary text-xl uppercase tracking-tighter mb-6">{assessment.title}</h3>
                        <div className="space-y-4">
                           {[
                             { label: 'Condition', val: assessment.diagnosis },
                             { label: 'Treatment', val: assessment.treatmentPlan }
                           ].map((item, i) => (
                             <div key={i}>
                               <span className="text-[10px] font-black text-accent uppercase tracking-widest block mb-1">{item.label}</span>
                               <p className="text-sm text-slate-600 font-medium line-clamp-2 group-hover:line-clamp-none transition-all">{item.val}</p>
                             </div>
                           ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {assessments.length === 0 && <p className="text-center text-slate-400 font-bold uppercase tracking-widest py-20">No assessments found.</p>}
                </motion.div>
              )}

              {activeTab === 'exercises' && (
                <motion.div
                  key="exercises"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="text-2xl font-black text-primary mb-12 uppercase tracking-widest border-b border-slate-50 pb-6">Recovery Exercises</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {exercises.map((ex, i) => (
                      <div key={i} className="group cursor-pointer rounded-[2.5rem] overflow-hidden border border-slate-100 bg-white hover:shadow-2xl transition-all">
                        <div className="aspect-video relative overflow-hidden">
                          <img src={ex.imageUrl || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000'} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                          <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                             <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary shadow-xl">
                               <Video className="w-7 h-7 ml-1" />
                             </div>
                          </div>
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white text-primary text-[10px] font-black uppercase tracking-widest rounded-full">{ex.phase || 'RECOVERY'}</span>
                          </div>
                        </div>
                        <div className="p-8">
                          <h4 className="font-black text-primary text-xl mb-4 uppercase tracking-tighter">{ex.title}</h4>
                          <div className="flex justify-between items-center py-4 border-t border-slate-50">
                            <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                               <Calendar className="w-4 h-4 text-accent" /> {ex.frequency}
                            </div>
                            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-lg">{ex.reps}</span>
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
                  <h2 className="text-2xl font-black text-primary mb-12 uppercase tracking-widest border-b border-slate-50 pb-6">Digital Consent</h2>
                  <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100">
                    <h3 className="font-black text-primary uppercase tracking-tight text-xl mb-4">Patient Responsibility Affirmation</h3>
                    <div className="h-64 overflow-y-auto bg-white p-8 rounded-3xl border border-slate-100 text-sm text-slate-500 font-medium leading-relaxed mb-8 shadow-inner">
                      <p className="mb-6">I understand that chiropractic care and physical therapy require consistency and commitment. I agree to follow the recovery plan provided by my specialist and to communicate any changes in my condition immediately.</p>
                      <p className="mb-6">I acknowledge that the healing process varies between individuals and that the duration of treatment is an estimate based on clinical expertise.</p>
                      <p className="mb-6">I authorize the team at Healex to perform the necessary physical evaluations and treatments as discussed during my initial consultation.</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 mb-10 shadow-sm">
                      <input type="checkbox" id="consent" className="w-6 h-6 rounded-lg border-slate-200 text-primary focus:ring-accent" />
                      <label htmlFor="consent" className="text-xs font-black text-primary uppercase tracking-widest cursor-pointer mt-1">I affirm my commitment to this recovery path.</label>
                    </div>
                    <button className="btn-primary w-full py-5 text-sm uppercase tracking-[0.2em]">
                      SIGN & CONFIRM
                    </button>
                  </div>
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
