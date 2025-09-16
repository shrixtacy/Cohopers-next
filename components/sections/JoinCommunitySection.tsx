'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function JoinCommunitySection() {
  return (
    <section className="section-padding bg-white">
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
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            JOIN A COMMUNITY OF INNOVATORS AND ENTREPRENEURS
          </h2>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Light Beige */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-100 p-8 space-y-6"
          >
            <h3 className="text-2xl font-bold text-black">THE BEST LOCATION</h3>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris.
            </p>
            <button className="btn-outline">
              READ MORE
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Middle Column - Light Grey */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-100 p-8 space-y-6"
          >
            <h3 className="text-2xl font-bold text-black">THE FEATURE LIST</h3>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris.
            </p>
            <button className="btn-outline">
              READ MORE
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Right Column - Black */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black p-8 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">SPACE FOR EVERYONE</h3>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris.
            </p>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-3 transition-all duration-300 inline-flex items-center gap-2">
              READ MORE
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
