'use client';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Smile, Clock, Star } from 'lucide-react';

export default function Hero() {
  const stats = [
    { icon: Smile, value: '5000+', label: 'Happy Patients', color: 'text-green-500' },
    { icon: Shield, value: '15+', label: 'Years Experience', color: 'text-blue-500' },
    { icon: Clock, value: '100%', label: 'Satisfaction', color: 'text-purple-500' },
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Animated Background Opacity Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200 rounded-full filter blur-3xl opacity-10 rotate-slow"></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content with FadeInLeft Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="h-4 w-4 text-blue-500 animate-pulse" />
              <span className="text-blue-600 font-semibold">Welcome to Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-gray-800">Your Smile,</span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Priority
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 mt-6 text-lg leading-relaxed"
            >
              Experience world-class dental care with <span className="font-semibold text-blue-600">Dr. Ayesha</span>. 
              Advanced technology, gentle touch, and personalized treatment for your perfect smile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group"
              >
                Book Appointment
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Watch Video ▶
              </motion.button>
            </motion.div>

            {/* Stats with Opacity Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image with Float Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Animated Background Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl opacity-30"
            ></motion.div>
            
            {/* Main Image with Float */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -top-5 -right-5 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
              <img
                src="/images/room.webp"
                alt="Dr. Ayesha"
                className="rounded-3xl shadow-2xl relative z-10 w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-5 -left-5 bg-white rounded-2xl p-3 shadow-xl z-20"
            >
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="font-bold text-gray-800">4.9 Rating</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-3 shadow-xl z-20"
            >
              <div className="flex items-center gap-2">
                <Smile className="h-5 w-5 text-blue-500" />
                <span className="font-bold text-gray-800">5000+ Patients</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}