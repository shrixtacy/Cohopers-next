'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function FooterSection() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup');
  };

  return (
    <footer id="contact" className="bg-black text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-[#00ffe0]" />
              <span className="text-white">help@cs.com</span>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#004efb] flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-semibold">Our New Location Is Now Open</span>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">GET OUR NEWSLETTER</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#00ffe0] transition-colors duration-200"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#00ffe0] hover:bg-[#046f7c] text-black px-4 py-3 transition-colors duration-200"
                >
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </motion.div>

          {/* About Spaces Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white">ABOUT SPACES</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Locations', 'Offers', 'Blog', 'Pricing'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#00ffe0] transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white">USEFUL LINKS</h4>
            <ul className="space-y-2">
              {['Contact Us', 'FAQ', 'Shop', 'Policy', 'Terms & Conditions'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#00ffe0] transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-[#004efb] flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-white font-bold text-xl">S</span>
            <span className="text-gray-400 text-sm ml-4">© 2024 CS. All rights reserved.</span>
          </div>
          
          <div className="flex space-x-4">
            {[Twitter, Instagram, Facebook, Linkedin].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-400 hover:text-[#00ffe0] transition-colors duration-200"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}