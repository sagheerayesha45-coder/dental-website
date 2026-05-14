'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Award, Calendar, Star, Phone, Mail, MessageCircle,  } from 'lucide-react';

// ✅ TypeScript Interface
interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  education: string;
  specialization: string;
  image: string;
  color: string;
}

interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Ayesha Khan',
    role: 'Lead Cosmetic Dentist',
    experience: '15+ years',
    education: 'Harvard School of Dental Medicine',
    specialization: 'Cosmetic Dentistry, Implants',
    image: '/images/4.avif',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 2,
    name: 'Dr. Sarah Ahmed',
    role: 'Orthodontist',
    experience: '10+ years',
    education: 'University of California',
    specialization: 'Braces, Aligners, Invisalign',
    image: '/images/3dr.avif',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    name: 'Dr. Michael Lee',
    role: 'Oral Surgeon',
    experience: '12+ years',
    education: 'Johns Hopkins University',
    specialization: 'Implants, Wisdom Teeth',
    image: '/images/hd2.jpg',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 4,
    name: 'Dr. Priya Sharma',
    role: 'Pediatric Dentist',
    experience: '8+ years',
    education: 'Boston University',
    specialization: 'Kids Dentistry',
    image: '/images/5.webp',
    color: 'from-green-500 to-teal-500'
  }
];

const stats: StatItem[] = [
  { icon: User, value: '15+', label: 'Expert Doctors' },
  { icon: Award, value: '50+', label: 'Certifications' },
  { icon: Star, value: '98%', label: 'Patient Satisfaction' },
  { icon: Calendar, value: '100+', label: 'Years Combined Experience' }
];

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-semibold mb-4">
            👥 Hamari Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Expert Doctors Ki Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Highly qualified aur experienced doctors jo aapki smile ke liye dedicated hain
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden h-64 flex-shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-b ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`}></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Experience Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700 z-20">
                    <Calendar className="h-3 w-3 inline mr-1" />
                    {member.experience}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-xs text-gray-500 mb-3">{member.education}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.specialization}</p>

                  {/* Contact Buttons - Simple aur clean */}
                  <div className="flex justify-center gap-3 mt-auto">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <Phone className="h-4 w-4 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <Mail className="h-4 w-4 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <MessageCircle className="h-4 w-4 text-white" />
                    </a>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <IconComponent className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Calendar className="h-4 w-4" />
            Aaj hi Appointment Book Karein
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}