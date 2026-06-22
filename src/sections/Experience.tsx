import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experiences } from '../data/portfolio';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const typeColors = {
  'full-time': 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  'part-time': 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
  'freelance': 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  'internship': 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
};

export function Experience() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="experience" className="section-padding bg-background dark:bg-secondary/50">
      <div ref={ref} className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Career</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            My professional journey and the valuable experiences that shaped my career.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform lg:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="hidden lg:block lg:w-1/2" />

              <div className="absolute left-4 lg:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white dark:border-secondary transform -translate-x-1/2 flex items-center justify-center z-10">
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary dark:text-white">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[exp.type]}`}>
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-text-secondary mb-4">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </span>
                  </div>

                  <p className="text-text-secondary mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-text-primary dark:text-white mb-2">Responsibilities</h4>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start space-x-2 text-sm text-text-secondary">
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
