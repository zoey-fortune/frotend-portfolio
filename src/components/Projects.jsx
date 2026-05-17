import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ExternalLink, Sparkles, ArrowRight, Globe,
  ShoppingCart, Newspaper, BarChart3,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const projects = [
  {
    title: 'Nebula Dashboard',
    description:
      'A real-time analytics dashboard featuring interactive charts, drag-and-drop widgets, and dark mode. Built for data-driven teams.',
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    icon: BarChart3,
    gradient: 'from-accent-cyan to-accent-blue',
    stats: { stars: 342, forks: 78 },
    image: null, // placeholder for actual screenshot
  },
  {
    title: 'Pixel Market',
    description:
      'A full-featured e-commerce platform with real-time inventory, AI-powered recommendations, and seamless checkout experience.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    icon: ShoppingCart,
    gradient: 'from-accent-purple to-accent-pink',
    stats: { stars: 218, forks: 45 },
  },
  {
    title: 'TechScope',
    description:
      'A modern tech news aggregator with personalized feeds, bookmarking, and instant search across 100+ sources.',
    tags: ['React', 'GraphQL', 'Redis', 'Tailwind'],
    icon: Newspaper,
    gradient: 'from-accent-pink to-accent-cyan',
    stats: { stars: 156, forks: 32 },
  },
  {
    title: 'EarthView 3D',
    description:
      'Interactive 3D globe visualization showing real-time weather data, population density, and satellite imagery layers.',
    tags: ['Three.js', 'React', 'WebGL', 'D3.js'],
    icon: Globe,
    gradient: 'from-accent-blue to-accent-purple',
    stats: { stars: 423, forks: 91 },
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-deep-800/30 to-deep-900" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent-purple text-sm font-mono tracking-widest mb-3 block">
            {'<projects />'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Each project is a lab for exploring new ideas and pushing the boundaries of web development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const isHovered = hoveredProject === idx;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.12 }}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Card Content */}
                <div className="relative p-8 z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.gradient}`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex gap-2">
                      <motion.a
                        href="#"
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.preventDefault()}
                      >
                        <GithubIcon size={16} />
                      </motion.a>
                      <motion.a
                        href="#"
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.preventDefault()}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono text-accent-cyan bg-accent-cyan/10 rounded-full border border-accent-cyan/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats & Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex gap-4">
                      <span className="text-xs text-gray-500">
                        ⭐ {project.stats.stars}
                      </span>
                      <span className="text-xs text-gray-500">
                        🍴 {project.stats.forks}
                      </span>
                    </div>
                    <motion.a
                      href="#"
                      className="flex items-center gap-1 text-xs text-accent-cyan hover:text-white transition-colors"
                      onClick={(e) => e.preventDefault()}
                      animate={isHovered ? { x: 5 } : { x: 0 }}
                    >
                      Live Demo <ArrowRight size={12} />
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={false}
                >
                  <div
                    className="absolute -inset-1 rounded-2xl blur-xl"
                    style={{
                      background: `linear-gradient(135deg, ${project.gradient === 'from-accent-cyan to-accent-blue' ? 'rgba(0,240,255,0.1), rgba(59,130,246,0.05)' : project.gradient === 'from-accent-purple to-accent-pink' ? 'rgba(168,85,247,0.1), rgba(236,72,153,0.05)' : project.gradient === 'from-accent-pink to-accent-cyan' ? 'rgba(236,72,153,0.1), rgba(0,240,255,0.05)' : 'rgba(59,130,246,0.1), rgba(168,85,247,0.05)'})`,
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm text-gray-300 hover:text-white hover:border-accent-cyan/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.preventDefault()}
          >
            <Sparkles size={14} className="text-accent-cyan" />
            View All Projects
            <ArrowRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
