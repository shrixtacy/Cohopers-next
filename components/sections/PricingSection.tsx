'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-white">
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
            PRICING
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Dedicated Desk Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#004efb] p-8 space-y-6 relative group cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">DEDICATED DESK</h3>
                <div className="text-4xl font-bold text-white">$299.00</div>
              </div>
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>

          {/* Email for Team Box Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#00ffe0] p-8 space-y-6 relative group cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">EMAIL FOR TEAM BOX</h3>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-black line-through opacity-60">$120.00</div>
                  <div className="text-4xl font-bold text-black">$299.00</div>
                </div>
                <p className="text-gray-700 text-sm mt-4">
                  The amenities, such as high-speed internet, printing, keep your productivity.
                </p>
              </div>
              <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}