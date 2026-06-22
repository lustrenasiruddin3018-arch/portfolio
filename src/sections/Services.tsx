import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { services } from '../data/portfolio';
import { Globe, Layout, Server, Layers, Palette, MessageSquare, ChevronRight, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Globe, Layout, Server, Layers, Palette, MessageSquare,
};

export function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="services" className="section-padding bg-background dark:bg-secondary/50">
      <div ref={ref} className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Services</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary dark:text-white">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Professional services tailored to help you achieve your digital goals with excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            const isHovered = hoveredService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-500 cursor-pointer overflow-hidden ${
                  isHovered ? 'shadow-xl -translate-y-2' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`} />

                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    isHovered
                      ? 'bg-primary text-white shadow-lg shadow-primary/25'
                      : 'bg-primary/10 text-primary'
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-text-primary dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.price && (
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                      <button className={`flex items-center space-x-1 text-sm font-medium transition-all duration-300 ${
                        isHovered ? 'text-primary translate-x-1' : 'text-text-secondary'
                      }`}>
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
