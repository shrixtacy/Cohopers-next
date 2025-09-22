'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  { id: 1, name: '24/7 Access' },
  { id: 2, name: 'High-Speed WiFi' },
  { id: 3, name: 'Meeting Rooms' },
  { id: 4, name: 'Premium Coffee' },
  { id: 5, name: 'Print & Scan' }
];

// Split services into 5 rows (one service per row)
const servicesPerRow = 1;
const serviceRows: typeof services[] = [];
for (let i = 0; i < services.length; i += servicesPerRow) {
  serviceRows.push(services.slice(i, i + servicesPerRow));
}

export default function ServicesFlowSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="section-padding theme-bg-primary theme-transition">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold theme-accent-primary mb-8">
            Our Services
          </h2>
          <p className="text-lg md:text-xl theme-text-primary max-w-4xl mx-auto leading-relaxed">
            Everything you need to work productively and comfortably in our spaces
          </p>
        </motion.div>

        {/* 4 Rows of Services */}
        <div className="space-y-0 -mx-8">
          {/* Top line */}
          <div className="h-0.5 theme-bg-accent-primary w-full"></div>
          
          {serviceRows.map((row, rowIndex) => (
            <div key={rowIndex}>
              <div 
                className={`py-6 text-center overflow-hidden transition-all duration-500 px-8 ${
                  hoveredService === row[0].id ? 'theme-bg-accent-primary' : 'theme-bg-primary'
                }`}
                onMouseEnter={() => setHoveredService(row[0].id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <motion.div
                  className="flex gap-6 min-w-max justify-center"
                  animate={{ 
                    x: hoveredService === row[0].id ? ['0%', '-100%'] : '0%'
                  }}
                  transition={{
                    duration: hoveredService === row[0].id ? 15 : 0,
                    ease: 'linear',
                    repeat: hoveredService === row[0].id ? Infinity : 0,
                    repeatType: 'loop'
                  }}
                >
                  {/* First set of text */}
                  <motion.h3 
                    className={`text-2xl font-semibold whitespace-nowrap transition-all duration-500 ${
                      hoveredService === row[0].id ? 'text-white' : 'theme-accent-primary'
                    }`}
                    animate={{
                      scale: hoveredService === row[0].id ? 1.05 : 1,
                      opacity: hoveredService === row[0].id ? 1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {row[0].name}
                  </motion.h3>
                  
                  {/* Additional texts with fade-in animation - 10 copies for more scrolling */}
                  <motion.div
                    className="flex gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredService === row[0].id ? 1 : 0,
                      y: hoveredService === row[0].id ? 0 : 20
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {hoveredService === row[0].id && (
                      <>
                        <h3 className="text-2xl font-semibold text-white whitespace-nowrap">
                          {row[0].name}
                        </h3>
                        <h3 className="text-2xl font-semibold text-white whitespace-nowrap">
                          {row[0].name}
                        </h3>
                        <h3 className="text-2xl font-semibold text-white whitespace-nowrap">
                          {row[0].name}
                        </h3>
                        <h3 className="text-2xl font-semibold text-white whitespace-nowrap">
                          {row[0].name}
                        </h3>
                        <h3 className="text-2xl font-semibold text-white whitespace-nowrap">
                          {row[0].name}
                        </h3>
                        <h3 className="text-2xl font-semibold text-white whitespace-nowrap">
                          {row[0].name}
                        </h3>
                        <h3 className="text-2xl font-semibold text-white whitespace-nowrap">
                          {row[0].name}
                        </h3>
                        <h3 className="text-2xl font-semibold text-white whitespace-nowrap">
                          {row[0].name}
                        </h3>
                        <h3 className="text-2xl font-semibold text-white whitespace-nowrap">
                          {row[0].name}
                        </h3>
                        <h3 className="text-2xl font-semibold text-white whitespace-nowrap">
                          {row[0].name}
                        </h3>
                      </>
                    )}
                  </motion.div>
                </motion.div>
              </div>
              {/* Line between services */}
              <div className="h-0.5 theme-bg-accent-primary w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

