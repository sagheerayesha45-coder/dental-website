'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Award, Users, Calendar, Heart, CheckCircle, Star, Shield, Clock,
  Smile, Trophy, BookOpen, Sparkles, Activity, Brain, Target, Eye, Feather,
  Crown, Gem, Zap, ThumbsUp, MessageCircle, Briefcase,
  GraduationCap, Quote, Play, X
} from 'lucide-react';

// ✅ TypeScript Interfaces
interface Qualification {
  degree: string;
  university: string;
  year: string;
  icon: React.ElementType;
  description: string;
}

interface Award {
  title: string;
  year: string;
  organization: string;
  icon: React.ElementType;
  color: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
}

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

// Doctor's qualifications data
const qualifications: Qualification[] = [
  { 
    degree: 'Doctor of Dental Medicine (DMD)',
    university: 'Harvard School of Dental Medicine',
    year: '2010',
    icon: GraduationCap,
    description: 'Graduated magna cum laude with highest honors'
  },
  { 
    degree: 'Masters in Cosmetic Dentistry',
    university: 'University of California, Los Angeles',
    year: '2012',
    icon: Sparkles,
    description: 'Specialized in advanced cosmetic procedures'
  },
  { 
    degree: 'Fellowship in Implantology',
    university: 'International Congress of Oral Implantologists',
    year: '2015',
    icon: Shield,
    description: 'Expert in dental implant surgeries'
  },
  { 
    degree: 'Certificate in Orthodontics',
    university: 'American Board of Orthodontics',
    year: '2018',
    icon: Activity,
    description: 'Certified in braces and aligners'
  }
];

// Awards and recognition
const awards: Award[] = [
  { 
    title: 'Best Cosmetic Dentist',
    year: '2023',
    organization: 'International Dental Awards',
    icon: Trophy,
    color: 'from-yellow-400 to-orange-500'
  },
  { 
    title: 'Excellence in Patient Care',
    year: '2022',
    organization: 'American Dental Association',
    icon: Heart,
    color: 'from-red-400 to-pink-500'
  },
  { 
    title: 'Innovation in Dentistry',
    year: '2021',
    organization: 'Dental Tech Summit',
    icon: Gem,
    color: 'from-purple-400 to-indigo-500'
  },
  { 
    title: 'Top Dentist of the Year',
    year: '2020',
    organization: 'Healthcare Heroes',
    icon: Crown,
    color: 'from-blue-400 to-cyan-500'
  }
];

// Professional memberships
const memberships: string[] = [
  'American Dental Association (ADA)',
  'Academy of General Dentistry (AGD)',
  'American Academy of Cosmetic Dentistry (AACD)',
  'International Association for Dental Research (IADR)',
  'American Board of Dental Specialties (ABDS)',
  'World Federation of Orthodontists (WFO)'
];

// Patient testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Regular Patient',
    text: 'Dr. Ayesha transformed my smile! Her expertise and gentle approach made me feel completely at ease. I have never been more confident.',
    rating: 5,
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Implant Patient',
    text: 'The best dental experience I have ever had. Dr. Ayesha is truly an artist. My implants look completely natural.',
    rating: 5,
    date: '2023-12-10'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Cosmetic Patient',
    text: 'I came for veneers and left with a million-dollar smile! The entire team is professional and caring.',
    rating: 5,
    date: '2024-02-01'
  }
];

// ✅ Fixed Counter Component with TypeScript
const Counter: React.FC<CounterProps> = ({ target, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState<number>(0);
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export default function AboutPage() {
  const [playingVideo, setPlayingVideo] = useState<boolean>(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Stats data
  const stats: StatItem[] = [
    { icon: <Smile className="h-8 w-8" />, value: 5000, label: 'Happy Patients', suffix: '+' },
    { icon: <Calendar className="h-8 w-8" />, value: 15, label: 'Years Experience', suffix: '+' },
    { icon: <Award className="h-8 w-8" />, value: 25, label: 'Awards Won', suffix: '' },
    { icon: <Sparkles className="h-8 w-8" />, value: 3000, label: 'Smile Makeovers', suffix: '+' }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16 overflow-x-hidden">
        
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  scale: { duration: 3, repeat: Infinity, repeatType: "reverse" },
                  rotate: { duration: 2, repeat: Infinity }
                }}
                className="inline-block mb-6"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                  <Smile className="h-16 w-16 text-white" />
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              >
                Meet{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  Dr. Ayesha
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Transforming Smiles, Changing Lives Through Excellence in Dental Care
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full font-semibold shadow-lg"
                >
                  Book Appointment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPlayingVideo(true)}
                  className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold flex items-center gap-2"
                >
                  <Play className="h-5 w-5" />
                  Watch Introduction
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </motion.div>
        </section>

        {/* Doctor Introduction Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Doctor Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden">
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/doctor.jpg"
                      alt="Dr. Ayesha"
                      className="w-full h-auto rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Dr.+Ayesha';
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <div className="text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="h-5 w-5 text-yellow-400" />
                          <span className="font-semibold">15+ Years of Excellence</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-yellow-400" />
                          <span>5000+ Happy Smiles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Icons with Font Awesome */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, x: -5 }}
                    className="bg-[#1877F2] p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f text-white text-xl"></i>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, x: -5 }}
                    className="bg-gradient-to-tr from-[#E4405F] to-[#F56040] p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram text-white text-xl"></i>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, x: -5 }}
                    className="bg-[#1DA1F2] p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter text-white text-xl"></i>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, x: -5 }}
                    className="bg-[#0077B5] p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in text-white text-xl"></i>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, x: -5 }}
                    className="bg-[#FF0000] p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube text-white text-xl"></i>
                  </motion.a>
                </div>
              </motion.div>

              {/* Doctor Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-semibold mb-4">
                    ✨ Founder & Lead Dentist
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                    Dr. Ayesha Khan
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"></div>
                  <p className="text-xl text-blue-600 font-semibold mb-4">
                    BDS, DMD, MCD - Harvard Trained Cosmetic Dentist
                  </p>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Dr. Ayesha Khan is a distinguished dental professional with over 15 years of transformative experience 
                  in cosmetic and restorative dentistry. Her journey in dentistry began at the prestigious Harvard School 
                  of Dental Medicine, where she graduated with top honors and developed a passion for creating perfect smiles.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Known for her gentle approach and artistic eye, Dr. Ayesha has helped over 5,000 patients achieve their 
                  dream smiles. She regularly lectures at international dental conferences and has been featured in leading 
                  dental publications for her innovative techniques in smile makeovers.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
                    >
                      <div className="text-blue-500 mx-auto mb-2 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-800">
                        <Counter target={stat.value} duration={2000} suffix={stat.suffix} />
                      </div>
                      <p className="text-xs text-gray-600">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Social Media Row */}
                <div className="pt-4">
                  <p className="text-sm text-gray-500 mb-3">Follow Dr. Ayesha on social media:</p>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <i className="fab fa-facebook-f text-white"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gradient-to-tr from-[#E4405F] to-[#F56040] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <i className="fab fa-instagram text-white"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <i className="fab fa-twitter text-white"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <i className="fab fa-linkedin-in text-white"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <i className="fab fa-youtube text-white"></i>
                    </a>
                  </div>
                </div>
                
                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg"
                  >
                    <Calendar className="h-5 w-5" />
                    Book Consultation
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-50 transition"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Send Message
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-semibold mb-4">
                Academic Excellence
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Education & Qualifications
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualifications.map((qual, idx) => {
                const IconComponent = qual.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{qual.degree}</h3>
                    <p className="text-blue-600 text-sm mb-2">{qual.university}</p>
                    <p className="text-gray-500 text-sm mb-3">{qual.year}</p>
                    <p className="text-gray-600 text-sm">{qual.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Professional Memberships */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Professional Memberships
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {memberships.map((membership, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md"
                >
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">{membership}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-block px-4 py-1 bg-yellow-100 rounded-full text-yellow-600 text-sm font-semibold mb-4">
                Achievements
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Awards & Recognition
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, idx) => {
                const IconComponent = award.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -10, rotate: 2 }}
                    className="relative group"
                  >
                    <div className={`bg-gradient-to-br ${award.color} rounded-2xl p-6 text-white shadow-lg overflow-hidden`}>
                      <div className="absolute -right-6 -top-6 w-20 h-20 bg-white/20 rounded-full"></div>
                      <IconComponent className="h-12 w-12 mb-4 relative z-10" />
                      <h3 className="text-xl font-bold mb-2 relative z-10">{award.title}</h3>
                      <p className="text-white/90 text-sm mb-1 relative z-10">{award.year}</p>
                      <p className="text-white/80 text-xs relative z-10">{award.organization}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-block px-4 py-1 bg-pink-100 rounded-full text-pink-600 text-sm font-semibold mb-4">
                Patient Love
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                What Patients Say
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Quote className="h-8 w-8 text-blue-500 mb-4 opacity-50" />
                  <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready for Your Dream Smile?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Book your consultation today and take the first step towards a confident, beautiful smile
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 mx-auto"
              >
                <Calendar className="h-6 w-6" />
                Schedule Appointment
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Video Modal */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setPlayingVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPlayingVideo(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Doctor Introduction"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}