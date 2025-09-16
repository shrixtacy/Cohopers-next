'use client';

import { motion } from 'framer-motion';

const workspaceTypes = [
  {
    title: 'MEETING',
    image: '/images/gallery/cohopers3.jpg',
    description: 'Professional meeting spaces for collaboration'
  },
  {
    title: 'WORKSHOP',
    image: '/images/gallery/Cohopers_1.jpeg',
    description: 'Creative workshop environments'
  },
  {
    title: 'TRAINING',
    image: '/images/gallery/cohopers2.jpeg',
    description: 'Training and learning spaces'
  },
  {
    title: 'REST',
    image: '/images/gallery/co.jpeg',
    description: 'Relaxation and break areas'
  },
  {
    title: 'CONFERENCE HALL',
    image: '/images/gallery/cohopers3.jpg',
    description: 'Large conference and event spaces'
  }
];

export default function GallerySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-4 bg-[#004efb]"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Experience The Future Of Work
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            COLLABORATE AND CREATE: YOUR IDEAL WORKSPACE AWAITS
          </h2>
        </motion.div>

        {/* Fixed Grid Gallery - 2x3 Layout */}
        <div className="grid grid-cols-2 gap-4 h-[900px]">
          {/* Top Row */}
          <div className="col-span-2">
            {/* MEETING - Full Width Top Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group cursor-pointer h-[400px]"
            >
              <div className="relative overflow-hidden h-full">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${workspaceTypes[0].image})`
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-black px-4 py-2">
                    <span className="text-white font-bold text-lg">{workspaceTypes[0].title}</span>
                  </div>
                  <div className="w-4 h-4 bg-[#004efb]"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row - Left Column */}
          <div className="space-y-4">
            {/* WORKSHOP - Top Left */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer h-[240px]"
            >
              <div className="relative overflow-hidden h-full">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${workspaceTypes[1].image})`
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-black px-3 py-2">
                    <span className="text-white font-bold text-sm">{workspaceTypes[1].title}</span>
                  </div>
                  <div className="w-3 h-3 bg-[#004efb]"></div>
                </div>
              </div>
            </motion.div>

            {/* TRAINING - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer h-[240px]"
            >
              <div className="relative overflow-hidden h-full">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${workspaceTypes[2].image})`
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-black px-3 py-2">
                    <span className="text-white font-bold text-sm">{workspaceTypes[2].title}</span>
                  </div>
                  <div className="w-3 h-3 bg-[#004efb]"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row - Right Column */}
          <div className="space-y-4">
            {/* REST - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer h-[240px]"
            >
              <div className="relative overflow-hidden h-full">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${workspaceTypes[3].image})`
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-black px-3 py-2">
                    <span className="text-white font-bold text-sm">{workspaceTypes[3].title}</span>
                  </div>
                  <div className="w-3 h-3 bg-[#004efb]"></div>
                </div>
              </div>
            </motion.div>

            {/* CONFERENCE HALL - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer h-[240px]"
            >
              <div className="relative overflow-hidden h-full">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${workspaceTypes[4].image})`
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-black px-3 py-2">
                    <span className="text-white font-bold text-sm">{workspaceTypes[4].title}</span>
                  </div>
                  <div className="w-3 h-3 bg-[#004efb]"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}