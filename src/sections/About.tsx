import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Award, Briefcase, Users, Star, Download, Target, Heart, Coffee } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '5+', label: 'Years Experience', color: 'text-blue-500' },
  { icon: Award, value: '50+', label: 'Projects Completed', color: 'text-green-500' },
  { icon: Users, value: '30+', label: 'Happy Clients', color: 'text-purple-500' },
  { icon: Star, value: '99%', label: 'Client Satisfaction', color: 'text-yellow-500' },
];

const interests = [
  { icon: Target, label: 'Problem Solving', description: 'Tackling complex challenges' },
  { icon: Heart, label: 'Open Source', description: 'Contributing to the community' },
  { icon: Coffee, label: 'Continuous Learning', description: 'Always exploring new tech' },
];

export function About() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="about" className="section-padding bg-background dark:bg-secondary/50">
      <div ref={ref} className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary dark:text-white">
            Let me <span className="gradient-text">introduce</span> myself
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            A passionate developer who loves turning ideas into reality through code and design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-3" />
              <img
                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Working"
                className="relative rounded-3xl shadow-xl w-full object-cover h-[500px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary dark:text-white mb-4">
                Full Stack Developer & UI/UX Enthusiast
              </h3>
              <p className="text-text-secondary leading-relaxed">
                With over 5 years of experience in software development, I specialize in building scalable web applications 
                and creating intuitive user interfaces. My journey began with a curiosity for how things work on the web, 
                which evolved into a deep passion for crafting digital experiences.
              </p>
            </div>

            <div>
              <p className="text-text-secondary leading-relaxed">
                I hold a Master's degree in Computer Science and have worked with startups and enterprise companies alike. 
                My approach combines technical excellence with creative problem-solving, ensuring every project not only 
                functions flawlessly but also delivers an exceptional user experience.
              </p>
            </div>

            <div>
              <p className="text-text-secondary leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, 
                or exploring the latest advancements in web technologies. I believe in continuous learning and staying 
                ahead of industry trends.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {interests.map((interest) => (
                <div
                  key={interest.label}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                >
                  <interest.icon className="w-6 h-6 mx-auto text-primary mb-2" />
                  <p className="text-sm font-medium text-text-primary dark:text-white">{interest.label}</p>
                  <p className="text-xs text-text-secondary mt-1">{interest.description}</p>
                </div>
              ))}
            </div>

            <button className="btn-primary inline-flex items-center space-x-2 mt-4">
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <stat.icon className={`w-8 h-8 mx-auto ${stat.color} mb-3`} />
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-3xl font-bold text-text-primary dark:text-white"
              >
                {stat.value}
              </motion.span>
              <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
