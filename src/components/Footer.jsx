import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="text-xl font-display font-bold tracking-wider"
          whileHover={{ scale: 1.05 }}
        >
          <span className="gradient-text">&lt;Alex /&gt;</span>
        </motion.a>

        {/* Copyright */}
        <p className="text-sm text-gray-600 flex items-center gap-1">
          Built with <Heart size={12} className="text-accent-pink" />
          {' '} &copy; {new Date().getFullYear()} Alex Chen. All rights reserved.
        </p>

        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          className="p-3 glass rounded-full text-gray-500 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
}
