import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalZoom() {
  const [activeImg, setActiveImg] = useState<{ src: string; rect: DOMRect } | null>(null);

  useEffect(() => {
    const handleImgClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' && target.closest('.prose')) {
        const rect = target.getBoundingClientRect();
        setActiveImg({ src: (target as HTMLImageElement).src, rect });
      }
    };
    
    // Make prose images indicate they are zoomable
    const applyCursor = () => {
      const images = document.querySelectorAll('.prose img');
      images.forEach(img => {
        (img as HTMLElement).style.cursor = 'zoom-in';
      });
    };
    
    // Initial apply and also observer for page transitions if needed
    applyCursor();
    document.addEventListener('astro:page-load', applyCursor);
    document.addEventListener('click', handleImgClick);
    
    return () => {
      document.removeEventListener('click', handleImgClick);
      document.removeEventListener('astro:page-load', applyCursor);
    };
  }, []);

  return (
    <AnimatePresence>
      {activeImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center cursor-zoom-out"
          onClick={() => setActiveImg(null)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[#080B12]/90 backdrop-blur-sm"
          />
          <motion.img
            src={activeImg.src}
            initial={{ 
              position: 'fixed',
              top: activeImg.rect.top,
              left: activeImg.rect.left,
              width: activeImg.rect.width,
              height: activeImg.rect.height,
              borderRadius: '0.5rem',
              zIndex: 51
            }}
            animate={{ 
              top: '50%',
              left: '50%',
              width: 'auto',
              height: 'auto',
              maxWidth: '90vw',
              maxHeight: '90vh',
              x: '-50%',
              y: '-50%',
              borderRadius: '0.75rem',
            }}
            exit={{ 
              top: activeImg.rect.top,
              left: activeImg.rect.left,
              width: activeImg.rect.width,
              height: activeImg.rect.height,
              x: 0,
              y: 0,
              opacity: 0
            }}
            transition={{ 
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
            className="shadow-2xl"
          />
        </div>
      )}
    </AnimatePresence>
  );
}
