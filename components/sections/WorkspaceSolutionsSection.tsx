'use client';

import { motion } from 'framer-motion';

const solutions = [
  { icon: '🏢', title: 'COOL COWORKING' },
  { icon: '💼', title: 'MEETING ROOMS' },
  { icon: '🌐', title: 'HIGH-SPEED INTERNET' },
  { icon: '📊', title: 'FLEXIBLE ACCOUNTS' },
  { icon: '🎓', title: 'LEARNING OPPORTUNITIES' },
  { icon: '👔', title: 'PROFESSIONAL ENVIRONMENT' },
  { icon: '🎉', title: 'SPACE FOR EVENTS' },
  { icon: '🅿️', title: 'PARKING SPACE' },
];

export default function WorkspaceSolutionsSection() {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#004efb] text-white px-4 py-2 text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            Our New Location Is Now Open
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            FLEXIBLE WORKSPACE SOLUTIONS
          </h2>
        </motion.div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center space-y-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-sm font-semibold text-black uppercase tracking-wide">
                {solution.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
