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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                CONNECT, COLLABORATE, AND GROW BUSINESS
              </h1>
              
              <div className="flex justify-start">
                <motion.button
                  onClick={handleCTAClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  BOOK TEST DAY
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Image with Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                <div
                  className="w-full h-96 lg:h-[500px] bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600)'
                  }}
                />
                
                {/* Overlay Box */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6 rounded-b-lg">
                  <p className="text-sm leading-relaxed">
                    CS IS A FLEXIBLE MODERN WORKSPACES ARE DESIGNED TO INSPIRE CREATIVITY PRODUCTIVITY. 
                    WHETHER YOU'RE A FREELANCER OR ESTABLISHED BUSINESS OWNER, YOU'LL FIND MANY WAYS 
                    YOU'LL FIND TO SUCCESS IN OUR COWORKING SPACES.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}