import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONSTELLATIONS, normalizeCoordinates } from '../../utils/astronomy';

interface Project {
  id: string;
  slug?: string;
  data: {
    title: string;
    domain: string;
  };
}

interface MapProps {
  projects: Project[];
}

export default function ConstellationMap({ projects }: MapProps) {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [transitioningStar, setTransitioningStar] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { stars, lines, constellationName } = useMemo(() => {
    const count = Math.max(1, Math.min(10, projects.length));
    const constellation = CONSTELLATIONS[count];
    const normalizedStars = normalizeCoordinates(constellation.stars);
    
    const mappedStars = normalizedStars.map((star, index) => {
      const project = projects[index];
      return {
        ...star,
        project
      };
    });

    return {
      constellationName: constellation.name,
      stars: mappedStars,
      lines: constellation.lines
    };
  }, [projects]);

  return (
    <>
      <AnimatePresence>
        {transitioningStar && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }} 
            className="fixed inset-0 bg-deep-space z-[100] pointer-events-none" 
          />
        )}
      </AnimatePresence>

      <div 
        ref={containerRef}
        className="relative w-full h-full min-h-[320px] border border-muted-star/20 rounded-sm bg-deep-space/50"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setHoveredProject(null);
          }
        }}
      >
        {/* Constellation Name Watermark / HUD Badge */}
        <motion.div 
          className="absolute top-4 right-4 md:bottom-6 md:left-6 md:top-auto md:right-auto font-mono text-[10px] md:text-xs tracking-[0.2em] pointer-events-none z-20 flex items-center md:items-start md:flex-col gap-3 md:gap-0 bg-deep-space/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none px-4 py-2 md:p-0 rounded-full md:rounded-none border border-muted-star/30 md:border-transparent shadow-lg md:shadow-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="text-muted-star/30 mb-2 md:mb-4 uppercase hidden md:block">CONSTELLATION</div>
          <div className="text-starlight/90 md:text-muted-star/50 uppercase">{constellationName}</div>
          <div className="w-1 h-1 rounded-full bg-muted-star/50 md:hidden"></div>
          <div className="text-solar-gold/90 md:text-muted-star/30">{projects.length} PROJECTS</div>
        </motion.div>

        {/* Constellation Canvas - Shifted to avoid HUD on mobile */}
        <div className="absolute inset-0 md:transform-none -translate-x-3 translate-y-6 scale-[1.15] md:scale-100 origin-center transition-transform duration-300">
          {/* Edges / Lines between nodes */}
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            {lines.map(([starA, starB], i) => {
              const s1 = stars.find(s => s.name === starA);
              const s2 = stars.find(s => s.name === starB);
              if (!s1 || !s2) return null;
              
              return (
                <motion.line 
                  key={`line-${i}`}
                  x1={`${s1.x}%`} 
                  y1={`${s1.y}%`} 
                  x2={`${s2.x}%`} 
                  y2={`${s2.y}%`} 
                  stroke="#7E8998" 
                  strokeWidth="1"
                  strokeOpacity="0.2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject ? 0.05 : 1 }}
                  transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeInOut" }}
                />
              );
            })}
            {/* Highlighted lines when hovering a star */}
            {hoveredProject && lines.map(([starA, starB], i) => {
              const s1 = stars.find(s => s.name === starA);
              const s2 = stars.find(s => s.name === starB);
              if (!s1 || !s2) return null;
              
              if (s1.project?.id === hoveredProject.id || s2.project?.id === hoveredProject.id) {
                return (
                  <line 
                    key={`line-highlight-${i}`}
                    x1={`${s1.x}%`} 
                    y1={`${s1.y}%`} 
                    x2={`${s2.x}%`} 
                    y2={`${s2.y}%`} 
                    stroke="#F4B860" 
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                  />
                );
              }
              return null;
            })}
          </svg>

        {/* Nodes / Stars */}
        {stars.map((star, i) => {
          const isHovered = hoveredProject?.id === star.project?.id && star.project !== undefined;
          const isTransitioning = transitioningStar === star.project?.id;
          const projectHref = star.project ? `/projects/${star.project.id || star.project.slug}` : '#';

          const handleClick = (e: React.MouseEvent) => {
            if (!isHovered && star.project) {
              e.preventDefault();
              setHoveredProject(star.project);
            } else if (star.project) {
              e.preventDefault();
              setTransitioningStar(star.project.id);
              setTimeout(() => {
                window.location.href = projectHref;
              }, 500);
            }
          };

          return (
            <motion.div 
              key={star.name}
              className={`absolute -translate-x-1/2 -translate-y-1/2 ${isHovered || isTransitioning ? 'z-50' : 'z-10'}`}
              style={{ left: `${star.x}%`, top: `${star.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isTransitioning 
                  ? { scale: 8, opacity: 0, filter: "brightness(2) drop-shadow(0 0 20px #fff)" }
                  : { scale: 1, opacity: 1 }
              }
              transition={
                isTransitioning
                  ? { duration: 0.6, ease: "easeInOut" }
                  : { duration: 0.5, delay: i * 0.1, type: 'spring' }
              }
              onMouseEnter={() => !transitioningStar && star.project && setHoveredProject(star.project)}
              onMouseLeave={() => !transitioningStar && setHoveredProject(null)}
            >
              {star.project ? (
                <a 
                  href={projectHref} 
                  onClick={handleClick} 
                  className="block relative cursor-pointer group p-1.5 md:p-3"
                  aria-label={`View project: ${star.project.data.title}`}
                >
                  {/* Star Core */}
                  <div 
                    className={`w-3 h-3 md:w-3 md:h-3 rounded-full transition-all duration-300 mx-auto ${isHovered ? 'scale-150 bg-starlight shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'bg-solar-gold shadow-[0_0_8px_rgba(244,184,96,0.4)] group-hover:scale-110 group-hover:bg-starlight group-hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]'}`}
                  />
                
                {/* Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 md:w-56 p-4 bg-nebula-surface/90 backdrop-blur-sm border border-muted-star/30 z-50 cursor-pointer shadow-xl"
                    >
                      <div className="font-mono text-[10px] text-muted-star/70 uppercase tracking-widest mb-2 border-b border-muted-star/20 pb-1 flex justify-between">
                        <span>STAR</span>
                        <span>{star.name}</span>
                      </div>
                      <h3 className="font-display font-bold text-starlight uppercase mb-1 text-sm md:text-base">{star.project.data.title}</h3>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-mono text-[10px] text-solar-gold capitalize">{star.project.data.domain}</span>
                        {star.project.data.date && (
                          <span className="font-mono text-[9px] text-muted-star/50">{new Date(star.project.data.date).getFullYear()}</span>
                        )}
                      </div>
                      <div className="font-mono text-[9px] text-muted-star border border-muted-star/30 inline-block px-2 py-1 tracking-widest">
                        VIEW PROJECT →
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                </a>
              ) : (
              <div className="w-2 h-2 md:w-2 md:h-2 bg-muted-star/40 rounded-full mx-auto" title={star.name} />
            )}
          </motion.div>
        );
      })}
        </div>
      </div>
    </>
  );
}
