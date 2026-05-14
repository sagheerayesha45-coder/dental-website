'use client';
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Dr. Ayesha will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="h-4 w-4 text-blue-500" />
            <span className="text-blue-600 font-semibold">Get In Touch</span>
          </div>
          <h2 className="section-title">Book Your Appointment</h2>
          <p className="section-subtitle">
            Schedule your visit today for a healthier, brighter smile
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-8">
          
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Visit Our Clinic</h3>
                <p className="text-gray-600">123 Dental Street, Medical District<br />New York, NY 10001</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Email Us</h3>
                <p className="text-gray-600">info@drayeshadental.com<br />appointments@drayeshadental.com</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Working Hours</h3>
                <p className="text-gray-600">
                  Mon-Fri: 9:00 AM - 7:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 234 567 8900"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Your Message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your dental needs..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}