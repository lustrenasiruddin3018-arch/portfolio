import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';
import { Award, Users, FolderCheck, Clock } from 'lucide-react';
import { stats, profile } from '../data/portfolio';

const statIcons = [Clock, FolderCheck, Users, Award];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Get to Know <span className="text-gradient">Me Better</span>
          </h2>
          <p className="text-lg text-secondary-500 dark:text-secondary-400 max-w-2xl mx-auto">
            A passionate developer dedicated to crafting exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Working"
                  className="w-full h-80 object-cover"
                />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">6+</div>
                  <div className="text-xs font-medium">Years Exp.</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
              I'm a creative problem solver who loves building things that live on the internet
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
              My journey in web development started in 2018 when I built my first website for a local business. 
              Since then, I've grown into a full-stack developer with expertise in modern JavaScript frameworks, 
              cloud infrastructure, and user-centered design.
            </p>
            <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
              I believe in writing clean, maintainable code and creating intuitive user experiences. 
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or mentoring aspiring developers.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300">
                <span className="w-2 h-2 rounded-full bg-primary-500" />
                <span className="text-sm font-medium">Problem Solver</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300">
                <span className="w-2 h-2 rounded-full bg-accent-500" />
                <span className="text-sm font-medium">Team Player</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium">Fast Learner</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-secondary-50 dark:bg-secondary-800 border border-secondary-100 dark:border-secondary-700 text-center group hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
              >
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-12 h-12 text-primary-600" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {isInView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-sm font-medium text-secondary-600 dark:text-secondary-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
