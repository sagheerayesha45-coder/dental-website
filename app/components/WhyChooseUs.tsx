'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Shield, Clock, Users, ThumbsUp, Award, Heart, Sparkles } from 'lucide-react';

const features = [
  { icon: Star, title: 'Expert Doctors', description: 'Highly qualified and experienced dental professionals', color: 'text-yellow-500' },
  { icon: Shield, title: 'Modern Technology', description: 'Latest dental equipment and techniques', color: 'text-blue-500' },
  { icon: Clock, title: '24/7 Emergency', description: 'Round the clock emergency dental care', color: 'text-red-500' },
  { icon: Users, title: 'Patient First', description: 'Personalized care for every patient', color: 'text-green-500' },
  { icon: ThumbsUp, title: '100% Satisfaction', description: 'Guaranteed quality dental services', color: 'text-purple-500' },
  { icon: Award, title: 'Award Winning', description: 'Recognized for excellence in dentistry', color: 'text-orange-500' },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Heart className="h-4 w-4 text-blue-500" />
            <span className="text-blue-600 font-semibold">Why Choose Us</span>
          </div>
          <h2 className="section-title">Why Patients Love Us</h2>
          <p className="section-subtitle">
            We provide exceptional dental care with a personal touch
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg text-center group cursor-pointer"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-xl transition-all">
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}