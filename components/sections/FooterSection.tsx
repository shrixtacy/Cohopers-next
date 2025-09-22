'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin, Phone } from 'lucide-react';
import { ThemeSwitch } from '@/components/ui/theme-switch';
import { useTheme } from '@/components/providers/ThemeProvider';
import { contactInfo } from '@/lib/constants';

export default function FooterSection() {
  const { isSystemTheme } = useTheme();
  
  return (
    <footer id="contact" className="theme-bg-tertiary theme-text-primary theme-transition">
      <div className="container-custom py-20">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold theme-text-primary mb-8 leading-tight">
            a way to live. a way to be.
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 theme-bg-primary flex items-center justify-center">
              <span className="theme-accent-primary font-bold text-2xl">C</span>
            </div>
            <span className="theme-text-primary font-semibold text-2xl">ohopers</span>
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
              className="theme-text-primary hover:text-blue-light transition-colors duration-200 flex items-center gap-2"
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
          <p className="text-lg theme-text-primary mb-8">
            The next wave of Coworking, now open in {contactInfo.location}.
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t theme-border-primary pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue" />
              <span className="theme-text-primary text-sm">© 2024 {contactInfo.company}. All Rights Reserved</span>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="theme-text-secondary text-sm">Theme:</span>
                <ThemeSwitch />
                <span className="theme-text-muted text-xs">
                  {isSystemTheme ? '(Auto)' : '(Manual)'}
                </span>
              </div>
              
              {['Blog', 'Careers', 'Contact Us', 'Privacy Policy', 'Terms & Conditions'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="theme-text-secondary hover:theme-text-primary transition-colors duration-200"
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