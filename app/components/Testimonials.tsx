'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Star, Quote, ChevronLeft, ChevronRight, Heart, 
  Sparkles, Award, Clock, Shield, Users, X 
} from 'lucide-react';

// ✅ TypeScript Interfaces
interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  fullText: string;
  rating: number;
  image: string;
  treatment: string;
  date: string;
  location: string;
}

interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Davis',
    role: 'Regular Patient',
    text: 'Dr. Ayesha is amazing! She made my dental experience comfortable and painless. Highly recommend!',
    fullText: 'I have always been terrified of dental visits, but Dr. Ayesha changed everything. Her gentle approach and expertise made me feel completely at ease. The clinic is spotless, the staff is welcoming, and the treatment was painless. I finally have a dentist I trust!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    treatment: 'Root Canal Treatment',
    date: '2024-01-15',
    location: 'New York'
  },
  {
    id: 2,
    name: 'Emily Wilson',
    role: 'Cosmetic Patient',
    text: 'My smile looks perfect now! The team is professional and caring. Best dental clinic ever!',
    fullText: 'I came to Dr. Ayesha for veneers and the results exceeded my expectations. She listened to exactly what I wanted and delivered a perfect smile makeover. The transformation has boosted my confidence tremendously. I cant stop smiling!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    treatment: 'Veneers & Whitening',
    date: '2024-02-10',
    location: 'New York'
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Emergency Patient',
    text: 'Quick response and excellent treatment. Dr. Ayesha saved my tooth! Very grateful.',
    fullText: 'I had a severe toothache on a Sunday night and Dr. Ayesha responded within minutes. She came to the clinic immediately and performed an emergency root canal. The pain relief was instant and she saved my tooth. Truly a lifesaver!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    treatment: 'Emergency Root Canal',
    date: '2024-01-28',
    location: 'New York'
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    role: 'Family Patient',
    text: 'My whole family comes here. The care and attention to detail is outstanding.',
    fullText: 'After trying several dentists, I finally found the perfect one for my family. Dr. Ayesha treats my kids with such patience and care. The entire staff is friendly and professional. My children actually look forward to their dental checkups now!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    treatment: 'Family Dentistry',
    date: '2024-02-20',
    location: 'New York'
  },
  {
    id: 5,
    name: 'David Miller',
    role: 'Implant Patient',
    text: 'Best decision ever! My dental implants look completely natural. Thank you Dr. Ayesha!',
    fullText: 'I was nervous about getting implants, but Dr. Ayesha explained everything clearly and made me feel confident. The procedure was smooth and painless. Now I have a full set of beautiful, natural-looking teeth. Life-changing!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    treatment: 'Dental Implants',
    date: '2024-01-05',
    location: 'New York'
  },
  {
    id: 6,
    name: 'Jessica Taylor',
    role: 'Orthodontics Patient',
    text: 'My braces journey was smooth and the results are incredible. So happy with my smile!',
    fullText: 'Six months of wearing clear aligners and my teeth are perfectly straight! Dr. Ayesha monitored my progress closely and made adjustments as needed. The whole experience was convenient and comfortable.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    treatment: 'Invisalign',
    date: '2024-02-28',
    location: 'New York'
  }
];

const stats: StatItem[] = [
  { icon: Star, value: '98%', label: 'Satisfaction Rate', color: 'from-yellow-400 to-orange-500' },
  { icon: Users, value: '5000+', label: 'Happy Patients', color: 'from-blue-400 to-cyan-500' },
  { icon: Award, value: '25+', label: 'Awards Won', color: 'from-purple-400 to-pink-500' },
  { icon: Shield, value: '15+', label: 'Years Experience', color: 'from-green-400 to-teal-500' }
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const testimonialsPerPage: number = 4;
  const totalPages: number = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const currentTestimonials: Testimonial[] = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const nextPage = (): void => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = (): void => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 animate-pulse" />
              <span className="text-white font-semibold">Patient Stories</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              What Our Patients Say
            </motion.h2>
            
            <motion.p 
              className="text-blue-100 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Real stories from real patients who trusted us with their smiles
            </motion.p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setActiveTestimonial(testimonial)}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white m-px rounded-2xl p-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="h-12 w-12 text-blue-500" />
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-4 italic leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                  
                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                      <p className="text-xs text-blue-500 mt-1">{testimonial.treatment}</p>
                    </div>
                  </div>
                  
                  {/* Treatment Badge */}
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <Heart className="h-3 w-3 text-red-500" />
                      <span>Verified Patient</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-12">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevPage}
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentPage(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentPage === idx ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextPage}
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
          )}

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-r ${stat.color} p-4 rounded-xl text-white text-center shadow-lg`}
              >
                <stat.icon className="h-6 w-6 mx-auto mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal for Full Testimonial */}
      {activeTestimonial && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveTestimonial(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Quote className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-bold">Patient Story</h3>
              </div>
              <button 
                onClick={() => setActiveTestimonial(null)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h4 className="font-bold text-lg">{activeTestimonial.name}</h4>
                <p className="text-gray-500 text-sm">{activeTestimonial.role}</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-lg mb-4">
              <p className="text-sm text-gray-600">
                <strong>Treatment:</strong> {activeTestimonial.treatment}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Date:</strong> {new Date(activeTestimonial.date).toLocaleDateString()}
              </p>
            </div>
            
            <p className="text-gray-700 leading-relaxed italic">
              "{activeTestimonial.fullText}"
            </p>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span>Verified Patient • Real Experience • 5 Star Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}