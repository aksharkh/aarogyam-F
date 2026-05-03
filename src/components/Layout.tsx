import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      {/* Soft background glow for medical/healing aesthetic */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-200/40 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-200/30 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-grow pt-24 relative z-10" // Account for fixed navbar
        >
          {children}
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Layout;
