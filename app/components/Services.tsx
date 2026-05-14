'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Shield, Smile, Activity, Brush, Heart, Star, Award, Clock } from 'lucide-react';

const services = [
  { icon: Sparkles, title: 'Teeth Whitening', description: 'Professional teeth whitening for a brighter, confident smile.', color: 'from-yellow-400 to-orange-500', delay: 0 },
  { icon: Shield, title: 'Dental Implants', description: 'Permanent solution for missing teeth with natural look.', color: 'from-blue-400 to-blue-600', delay: 0.1 },
  { icon: Smile, title: 'Cosmetic Dentistry', description: 'Transform your smile with modern cosmetic procedures.', color: 'from-purple-400 to-pink-500', delay: 0.2 },
  { icon: Activity, title: 'Root Canal', description: 'Painless root canal treatment with advanced technology.', color: 'from-green-400 to-teal-500', delay: 0.3 },
  { icon: Brush, title: 'Regular Checkup', description: 'Complete oral examination and preventive care.', color: 'from-red-400 to-pink-500', delay: 0.4 },
  { icon: Heart, title: 'Orthodontics', description: 'Braces and aligners for perfectly straight teeth.', color: 'from-indigo-400 to-purple-500', delay: 0.5 },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <div className="bg-blue-100 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span className="text-blue-600 font-semibold">Premium Services</span>
            </div>
          </motion.div>
          <h2 className="section-title">Our Dental Services</h2>
          <p className="section-subtitle">
            Comprehensive dental care tailored to your needs with modern technology
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-gray-100"
            >
              <div className="p-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-xl transition-all`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-500 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <motion.button
                  whileHover={{ x: 10 }}
                  className="mt-4 text-blue-500 font-semibold flex items-center gap-2"
                >
                  Learn More →
                </motion.button>
              </div>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}