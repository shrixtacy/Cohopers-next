'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const companies = [
  { name: 'Microsoft', logo: '🏢' },
  { name: 'Google', logo: '🔍' },
  { name: 'Apple', logo: '🍎' },
  { name: 'Amazon', logo: '📦' },
  { name: 'Meta', logo: '📘' },
  { name: 'Tesla', logo: '⚡' },
  { name: 'Netflix', logo: '🎬' },
  { name: 'Spotify', logo: '🎵' },
  { name: 'Uber', logo: '🚗' },
  { name: 'Airbnb', logo: '🏠' },
  { name: 'Slack', logo: '💬' },
  { name: 'Zoom', logo: '📹' },
  { name: 'Adobe', logo: '🎨' },
  { name: 'Salesforce', logo: '☁️' },
  { name: 'Shopify', logo: '🛒' },
  { name: 'Stripe', logo: '💳' },
  { name: 'GitHub', logo: '🐙' },
  { name: 'Figma', logo: '🎯' },
  { name: 'Notion', logo: '📝' },
  { name: 'Linear', logo: '📊' },
];

export default function LogoCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            TRUSTED BY LEADING COMPANIES
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Join hundreds of successful businesses that call our coworking spaces home
          </p>
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
                ...(isPaused && { duration: 0 })
              }}
              className="flex gap-12 min-w-full"
            >
              {[...companies, ...companies, ...companies].map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 flex flex-col items-center justify-center space-y-3 group cursor-pointer"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-3xl group-hover:bg-[#004efb] group-hover:text-white transition-all duration-300">
                    {company.logo}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-[#00ffe0] transition-colors duration-300">
                    {company.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-[#00ffe0]">500+</div>
            <div className="text-gray-600 font-semibold">Companies</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-[#00ffe0]">50+</div>
            <div className="text-gray-600 font-semibold">Countries</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-[#00ffe0]">99%</div>
            <div className="text-gray-600 font-semibold">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}