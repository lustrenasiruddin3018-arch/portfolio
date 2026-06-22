import { motion } from 'framer-motion';
import { Globe, Monitor, Server, Layers, Palette, MessageSquare, ArrowRight } from 'lucide-react';
import { services } from '../data/portfolio';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Monitor,
  Server,
  Layers,
  Palette,
  MessageSquare,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary-50 dark:bg-secondary-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-secondary-500 dark:text-secondary-400 max-w-2xl mx-auto">
            Professional solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-100 dark:border-secondary-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors text-primary-600 dark:text-primary-400">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-500 dark:text-secondary-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.price_range && (
                  <div className="pt-4 border-t border-secondary-100 dark:border-secondary-700">
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      {service.price_range}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
