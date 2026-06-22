import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { education } from '../data/portfolio';
import { GraduationCap, Calendar, Award, ChevronRight } from 'lucide-react';

export function Education() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="education" className="section-padding bg-background dark:bg-secondary/50">
      <div ref={ref} className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Education</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary dark:text-white">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            My educational journey and the knowledge that fuels my professional growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary dark:text-white">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.field}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <span className="font-medium text-text-primary dark:text-white">{edu.institution}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>

                {edu.grade && (
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">{edu.grade}</span>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-text-primary dark:text-white mb-3">Achievements</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start space-x-2 text-sm text-text-secondary">
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
