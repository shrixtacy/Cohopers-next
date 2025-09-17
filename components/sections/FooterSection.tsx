'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin, Phone } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer id="contact" className="bg-blue-dark text-white">
      <div className="container-custom py-20">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight">
            a way to live. a way to be.
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white flex items-center justify-center">
              <span className="text-[#004efb] font-bold text-2xl">C</span>
            </div>
            <span className="text-white font-semibold text-2xl">ohopers</span>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-8 mb-12"
        >
          {[
            { Icon: Linkedin, name: 'LinkedIn' },
            { Icon: Instagram, name: 'Instagram' },
            { Icon: Twitter, name: 'X' }
          ].map(({ Icon, name }, index) => (
            <motion.a
              key={name}
              href="#"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-white hover:text-blue-light transition-colors duration-200 flex items-center gap-2"
            >
              <Icon size={24} />
              <span className="text-lg">{name}</span>
              <ArrowRight size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* Location Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-white mb-8">
            The next wave of Coworking, launching soon in Bangalore, Vizag & other cities.
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue" />
              <span className="text-white text-sm">© 2024 Cohopers. All Rights Reserved</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {['Blog', 'Careers', 'Contact Us', 'Privacy Policy', 'Terms & Conditions'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}