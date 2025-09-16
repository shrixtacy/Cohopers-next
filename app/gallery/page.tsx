'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import Navbar from '@/components/navigation/Navbar';

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/Cohopers_1.jpeg',
    alt: 'Modern coworking space with open desks',
    category: 'workspace',
    title: 'Open Workspace Area',
    description: 'Spacious open workspace designed for collaboration and productivity'
  },
  {
    id: 2,
    src: '/images/gallery/cohopers2.jpeg',
    alt: 'Executive meeting room with modern furniture',
    category: 'meeting',
    title: 'Executive Meeting Room',
    description: 'Professional meeting space with state-of-the-art presentation equipment'
  },
  {
    id: 3,
    src: '/images/gallery/cohopers3.jpg',
    alt: 'Private office cabin with glass walls',
    category: 'office',
    title: 'Private Office Cabin',
    description: 'Dedicated private spaces for focused work and team collaboration'
  },
  {
    id: 4,
    src: '/images/gallery/co.jpeg',
    alt: 'Coffee bar and lounge area',
    category: 'lounge',
    title: 'Coffee Bar & Lounge',
    description: 'Relaxing space for breaks and informal meetings'
  },
  {
    id: 5,
    src: '/images/workspaces/meeting-room.png',
    alt: 'Conference room with large table',
    category: 'meeting',
    title: 'Conference Room',
    description: 'Large conference room perfect for team meetings and presentations'
  },
  {
    id: 6,
    src: '/images/workspaces/private office.png',
    alt: 'Executive cabin with premium furniture',
    category: 'office',
    title: 'Executive Cabin',
    description: 'Premium private workspace with executive amenities'
  },
  {
    id: 7,
    src: '/images/workspaces/open-desk.png',
    alt: 'Hot desk area with modern seating',
    category: 'workspace',
    title: 'Hot Desk Area',
    description: 'Flexible seating for freelancers and remote workers'
  },
  {
    id: 8,
    src: '/images/workspaces/meeting-rooms.png',
    alt: 'Multiple meeting rooms',
    category: 'meeting',
    title: 'Meeting Rooms',
    description: 'Various meeting spaces for different team sizes'
  },
  {
    id: 9,
    src: '/images/workspaces/lounge-area.png',
    alt: 'Comfortable lounge seating area',
    category: 'lounge',
    title: 'Lounge Area',
    description: 'Comfortable seating for relaxation and informal discussions'
  }
];

const categories = ['All', 'workspace', 'meeting', 'office', 'lounge'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#004efb] to-[#0038cc] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/images/gallery/Cohopers_1.jpeg)'
          }}
        />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              GALLERY
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Explore our modern coworking spaces and facilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#004efb] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-black font-semibold">View Details</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004efb]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to See Our Spaces in Person?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Book a tour and experience our modern coworking environment firsthand
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00ffe0] text-black px-12 py-4 text-xl font-bold hover:bg-[#00d4c4] transition-colors flex items-center gap-3 mx-auto"
            >
              Book a Tour
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[70vh] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600">
                {selectedImage.description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}





