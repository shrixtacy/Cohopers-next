'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '@/lib/constants';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center space-y-6"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                    sizes="64px"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}