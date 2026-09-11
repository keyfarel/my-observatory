import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type OrbitData = {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  focusTitle: string;
  focusItems: string[];
  workTitle?: string;
  workItems?: string[];
};

const orbitData: OrbitData[] = [
  {
    id: "2023",
    year: "2023",
    title: "THE FOUNDATION",
    subtitle: "Core Algorithms & Java",
    description: "My first year in college laid the foundational groundwork for my engineering journey. I focused heavily on understanding programming syntax, core algorithms, and data structures, primarily using Java.",
    focusTitle: "FOCUS",
    focusItems: ["Java", "Data Structures", "Algorithms"],
  },
  {
    id: "2024",
    year: "2024",
    title: "THE EXPLORATION",
    subtitle: "Web Systems & Infrastructure",
    description: "I expanded my knowledge into how computers and networks communicate. I learned the fundamentals of operating systems and basic networking, while simultaneously building my first database-driven web applications using PHP.",
    focusTitle: "FOCUS",
    focusItems: ["PHP Web Dev", "Databases", "OS & Networking"],
  },
  {
    id: "2025",
    year: "2025",
    title: "THE EXPANSION",
    subtitle: "AI, Vision & SIC Batch 7",
    description: "I participated in Samsung Innovation Campus Batch 7, which sparked an early interest in IoT while I built web applications using Laravel. Academically, I also dove into the fundamentals of Artificial Intelligence and Computer Vision.",
    focusTitle: "FOCUS",
    focusItems: ["SIC Batch 7", "Computer Vision", "ML & AI", "Web Dev"],
  },
  {
    id: "2026",
    year: "2026",
    title: "THE INTEGRATION",
    subtitle: "IoT & PT INKA Internship",
    description: "A very busy year! I am currently working as a Web Development Intern at PT INKA (Persero) and participating in Samsung Innovation Campus Batch 8. My core focus right now is a mix of modern web development using Next.js and building physical IoT systems.",
    focusTitle: "CURRENT FOCUS",
    focusItems: ["Next.js", "Laravel", "IoT Systems", "Web Dev"],
  }
];

export default function Orbit() {
  const [activeId, setActiveId] = useState<string>("2026");

  const activeData = orbitData.find(d => d.id === activeId) || orbitData[2];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mt-12 font-mono relative">
      
      {/* Left: Navigation Timeline */}
      <div className="lg:col-span-5 relative">
        <div className="text-muted-star/50 text-[10px] tracking-widest uppercase mb-16 ml-8 hidden lg:block">Timeline</div>
        
        <div className="flex flex-col gap-16 relative pl-8">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-muted-star/50 to-transparent"></div>
          
          {orbitData.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button 
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`group flex-shrink-0 relative text-left cursor-pointer transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
              >
                <div className={`absolute -left-[37px] top-1 flex items-center justify-center w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'border border-solar-gold bg-deep-space shadow-[0_0_10px_rgba(244,184,96,0.5)]' 
                    : 'bg-muted-star/30 group-hover:bg-starlight'
                }`}></div>
                
                <div className="font-mono text-sm">
                  <div className={`mb-4 ${isActive ? 'text-solar-gold font-bold' : 'text-muted-star'}`}>{item.year}</div>
                  <div className="text-starlight uppercase tracking-wide mb-1">{item.title}</div>
                  {item.year !== 'NEXT' ? (
                    <div className="text-muted-star font-sans text-sm">{item.subtitle}</div>
                  ) : (
                    <div className="text-starlight uppercase">...</div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right: Content Detail */}
      <div className="lg:col-span-7 lg:pl-16 pt-16 lg:pt-0 border-t lg:border-t-0 border-muted-star/20 mt-16 lg:mt-0 relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full"
          >
            <div className="text-solar-gold text-sm tracking-widest mb-8 hidden lg:block">{activeId}</div>
            
            <div className="mb-12">
              <h3 className="text-starlight text-lg tracking-widest uppercase mb-4">{activeData.title}</h3>
              <p className="text-muted-star font-sans text-base max-w-md leading-relaxed mb-6">{activeData.subtitle}</p>
              <p className="text-muted-star/70 font-sans text-sm max-w-lg leading-relaxed">{activeData.description}</p>
            </div>

            <div className="w-12 h-px bg-muted-star/30 mb-12"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <div className="text-muted-star/50 text-[10px] tracking-widest uppercase mb-6">{activeData.focusTitle}</div>
                <ul className="space-y-3 text-sm text-starlight">
                  {activeData.focusItems.map((focus, i) => (
                    <li key={i}>{focus}</li>
                  ))}
                </ul>
              </div>
              
              {activeData.workTitle && activeData.workItems && (
                <div>
                  <div className="text-muted-star/50 text-[10px] tracking-widest uppercase mb-6">{activeData.workTitle}</div>
                  <ul className="space-y-3 text-sm text-starlight">
                    {activeData.workItems.map((work, i) => (
                      <li key={i}>{work}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
