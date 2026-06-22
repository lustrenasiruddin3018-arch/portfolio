import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { educations } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <p className="text-lg text-secondary-500 dark:text-secondary-400 max-w-2xl mx-auto">
            My educational journey and qualifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative p-8 rounded-2xl bg-secondary-50 dark:bg-secondary-800 border border-secondary-100 dark:border-secondary-700 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute top-6 right-6 p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  {edu.institution}
                </p>
              </div>

              <div className="flex items-center gap-2 mb-4 text-sm text-secondary-500 dark:text-secondary-400">
                <Calendar className="w-4 h-4" />
                {edu.duration}
              </div>

              <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed mb-4">
                {edu.description}
              </p>

              {edu.grade && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm font-medium">
                  <Award className="w-4 h-4" />
                  {edu.grade}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
