import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary-50 dark:bg-secondary-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-secondary-500 dark:text-secondary-400 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-400 sm:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-white dark:border-secondary-900 sm:-translate-x-1/2 mt-2 z-10" />

              {/* Content */}
              <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'
              }`}>
                <div className="p-6 rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-100 dark:border-secondary-700 hover:shadow-lg transition-all duration-300">
                  <div className={`flex items-center gap-2 mb-2 ${
                    index % 2 === 0 ? 'sm:justify-end' : ''
                  }`}>
                    <Briefcase className="w-4 h-4 text-primary-600" />
                    <span className="text-sm font-medium text-primary-600">{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className={`flex items-center gap-2 mb-4 text-sm text-secondary-500 dark:text-secondary-400 ${
                    index % 2 === 0 ? 'sm:justify-end' : ''
                  }`}>
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? 'sm:justify-end' : ''
                  }`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
