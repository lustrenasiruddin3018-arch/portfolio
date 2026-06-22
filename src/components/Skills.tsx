import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Server, Database, Wrench, Palette } from 'lucide-react';
import { skills } from '../data/portfolio';

const categories = [
  { label: 'All', icon: Code2, value: 'All' },
  { label: 'Frontend', icon: Code2, value: 'Frontend' },
  { label: 'Backend', icon: Server, value: 'Backend' },
  { label: 'Database', icon: Database, value: 'Database' },
  { label: 'DevOps', icon: Wrench, value: 'DevOps' },
  { label: 'Design', icon: Palette, value: 'Design' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-secondary-50 dark:bg-secondary-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            My <span className="text-gradient">Technical Stack</span>
          </h2>
          <p className="text-lg text-secondary-500 dark:text-secondary-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.value
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                    : 'bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700 border border-secondary-200 dark:border-secondary-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-100 dark:border-secondary-700 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                  {skill.proficiency}%
                </span>
              </div>
              <div className="relative h-3 bg-secondary-100 dark:bg-secondary-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                  className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-secondary-500 dark:text-secondary-400">
                  {skill.category}
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className={`w-2 h-2 rounded-full ${
                        star <= Math.ceil(skill.proficiency / 20)
                          ? 'bg-primary-500'
                          : 'bg-secondary-200 dark:bg-secondary-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
