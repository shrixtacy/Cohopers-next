'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'BOOST YOUR PRODUCTIVITY IN A OUR ENVIRONMENT',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    date: '12 APR'
  },
  {
    id: 2,
    title: 'COLLABORATE AND CREATE INSPIRING WORKSPACES',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    date: '15 APR'
  },
  {
    id: 3,
    title: 'NETWORKING EVENTS FOR PROFESSIONAL GROWTH',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    date: '18 APR'
  }
];

export default function BlogEventsSection() {
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
            Our Latest News
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            CHECK OUR UPCOMING EVENTS
          </h2>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <div
                  className="w-full h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${post.image})`
                  }}
                />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4">
                  <div className="badge-teal">
                    {post.date}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-black group-hover:text-[#00ffe0] transition-colors duration-300">
                  {post.title}
                </h3>
                
                <button className="btn-secondary group">
                  READ MORE
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
