'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Calendar, Heart, CheckCircle } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
            <img
              src="/images/dr.webp"
              alt="Dr. Ayesha"
              className="rounded-2xl shadow-2xl w-full h-auto relative z-10"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Heart className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">15+ Years</p>
                  <p className="text-sm text-gray-500">Of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-blue-100 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4">
              <Award className="h-4 w-4 text-blue-500" />
              <span className="text-blue-600 font-semibold">About Our Doctor</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet <span className="text-blue-500">Dr. Ayesha</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mb-6 rounded-full"></div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Dr. Ayesha is a renowned dentist with over 15 years of experience in cosmetic and restorative dentistry. 
              She graduated from Harvard School of Dental Medicine with honors and has been transforming smiles ever since.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Her philosophy combines cutting-edge technology with compassionate care, ensuring every patient feels 
              comfortable and confident throughout their treatment journey.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">PhD in Cosmetic Dentistry</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">5000+ Happy Patients</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">Award Winning Clinic</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <div className="text-center p-3 bg-blue-50 rounded-xl flex-1">
                <Users className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                <p className="font-bold text-gray-800">5000+</p>
                <p className="text-xs text-gray-500">Patients</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-xl flex-1">
                <Calendar className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                <p className="font-bold text-gray-800">15+</p>
                <p className="text-xs text-gray-500">Years</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-xl flex-1">
                <Award className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                <p className="font-bold text-gray-800">25+</p>
                <p className="text-xs text-gray-500">Awards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}