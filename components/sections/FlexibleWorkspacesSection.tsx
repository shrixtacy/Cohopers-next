'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FlexibleWorkspacesSection() {
  return (
    <section className="section-padding bg-black text-white">
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
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            OUR FLEXIBLE WORKSPACES ARE DESIGNED TO BE COMFORTABLE, SO YOU CAN FOCUS ON WHAT REALLY MATTERS -{' '}
            <span className="text-[#00ffe0] underline decoration-[#00ffe0] decoration-4 underline-offset-4">
              YOUR WORK
            </span>
          </h2>
          
          <div className="flex justify-between items-center mt-12">
            <p className="text-gray-300 text-lg max-w-2xl">
              Experience the perfect blend of productivity and comfort in our modern coworking spaces.
            </p>
            <div className="text-2xl font-bold text-[#00ffe0]">
              +92 000 333 9999
            </div>
          </div>
        </motion.div>

        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-16"
        >
          <div
            className="w-full h-96 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600)'
            }}
          />
          
          {/* CTA Button Overlay */}
          <div className="absolute bottom-6 right-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              BOOK TEST DAY
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
