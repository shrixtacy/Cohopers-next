'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const handleCTAClick = () => {
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-light-beige">
      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="container-custom">
          <div className="text-center space-y-12 py-20">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-black leading-tight">
                Productivity-first coworking in India — a new way to{' '}
                <span className="text-[#004efb]">Create</span>
                <div className="w-1 h-12 bg-[#004efb] mx-auto mt-4"></div>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
                Cohopers is building productivity-forward coworking spaces across India — and soon, the GCC — where professionals thrive in spaces designed for focus and growth.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <motion.button
                onClick={handleCTAClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Be first in line
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            {/* Illustration/Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center mt-16"
            >
              <motion.div 
                className="relative group cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="w-full max-w-4xl h-96 bg-cover bg-center rounded-lg shadow-2xl"
                  style={{
                    backgroundImage: 'url(/images/hero/header.png)'
                  }}
                />
                
                {/* Enhanced overlay with hover effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"
                  whileHover={{ 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent, transparent)',
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Subtle border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-transparent"
                  whileHover={{
                    borderColor: 'rgba(0, 78, 251, 0.3)',
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}