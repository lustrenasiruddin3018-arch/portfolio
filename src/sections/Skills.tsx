import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolio';
import { Code2, Server, Database, Wrench, Palette, Award, ChevronRight } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Skills', icon: Code2 },
  { id: 'Frontend', label: 'Frontend', icon: Code2 },
  { id: 'Backend', label: 'Backend', icon: Server },
  { id: 'Database', label: 'Database', icon: Database },
  { id: 'DevOps', label: 'DevOps', icon: Wrench },
  { id: 'Design', label: 'Design', icon: Palette },
  { id: 'Tools', label: 'Tools', icon: Wrench },
];

const certifications = [
  { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023', icon: Award },
  { name: 'React Advanced Patterns', issuer: 'Frontend Masters', year: '2023', icon: Award },
  { name: 'Google UX Design', issuer: 'Google', year: '2022', icon: Award },
  { name: 'Docker & Kubernetes', issuer: 'Linux Foundation', year: '2022', icon: Award },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, isInView } = useInView(0.1);

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding bg-background dark:bg-secondary/50">
      <div ref={ref} className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">My Skills</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary dark:text-white">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience and continuous learning.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white dark:bg-gray-800 text-text-secondary hover:text-primary dark:hover:text-primary'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary dark:text-white">{skill.name}</h3>
                    <span className="text-xs text-text-secondary">{skill.category}</span>
                  </div>
                </div>
                <span className="text-sm font-bold text-primary">{skill.proficiency}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.proficiency}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: 'easeOut' }}
                  className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-text-primary dark:text-white text-center mb-8">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <cert.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-text-primary dark:text-white mb-1">{cert.name}</h4>
                <p className="text-sm text-text-secondary">{cert.issuer}</p>
                <div className="flex items-center mt-3 text-xs text-primary">
                  <span>{cert.year}</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
