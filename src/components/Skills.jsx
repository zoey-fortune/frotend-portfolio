import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2, Palette, Database, Globe, Smartphone, Server,
  Container, GitBranch, Terminal, PenTool, Layers, Zap,
} from 'lucide-react';
import { FigmaIcon } from './SocialIcons';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'from-accent-cyan to-accent-blue',
    skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5 / CSS3', 'WebGL / Three.js'],
  },
  {
    title: 'Design',
    icon: Palette,
    color: 'from-accent-purple to-accent-pink',
    skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Design Systems', 'Prototyping', 'Accessibility'],
  },
  {
    title: 'Backend & Tools',
    icon: Server,
    color: 'from-accent-pink to-accent-cyan',
    skills: ['Node.js', 'REST APIs', 'GraphQL', 'PostgreSQL', 'Docker', 'Git / CI/CD'],
  },
];

const techIcons = [
  { icon: Code2, label: 'React', color: '#61DAFB' },
  { icon: Terminal, label: 'TypeScript', color: '#3178C6' },
  { icon: Globe, label: 'Next.js', color: '#ffffff' },
  { icon: Layers, label: 'Tailwind', color: '#06B6D4' },
  { icon: Zap, label: 'Node.js', color: '#339933' },
  { icon: Smartphone, label: 'React Native', color: '#61DAFB' },
  { icon: Container, label: 'Docker', color: '#2496ED' },
  { icon: GitBranch, label: 'Git', color: '#F05032' },
  { icon: 'figma', label: 'Figma', color: '#F24E1E' },
  { icon: Database, label: 'PostgreSQL', color: '#4169E1' },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-deep-800/50 to-deep-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent-cyan text-sm font-mono tracking-widest mb-3 block">
            {'<skills />'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                className="group relative glass rounded-2xl p-8 hover:glass-hover transition-all duration-500"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"
                     style={{
                       background: `linear-gradient(135deg, ${cat.color === 'from-accent-cyan to-accent-blue' ? '#00f0ff, #3b82f6' : cat.color === 'from-accent-purple to-accent-pink' ? '#a855f7, #ec4899' : '#ec4899, #00f0ff'})`,
                     }}
                />

                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${cat.color} mb-5`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
                <ul className="space-y-2.5">
                  {cat.skills.map((skill, i) => (
                    <li key={skill} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <div className="w-1 h-1 rounded-full bg-accent-cyan/50" />
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-center text-xs text-gray-600 tracking-widest uppercase mb-10">
            Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {techIcons.map((tech, i) => {
              const Icon = tech.icon === 'figma' ? FigmaIcon : tech.icon;
              return (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.08 }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="group flex flex-col items-center gap-2 p-4 glass rounded-xl cursor-default"
                >
                  <Icon
                    size={28}
                    style={{ color: tech.color }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                    {tech.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
