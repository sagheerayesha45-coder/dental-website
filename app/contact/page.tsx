'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Calendar, User, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Dr. Ayesha will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100"
            >
              We're here to help you smile brighter
            </motion.p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Visit Our Clinic</h3>
                  <p className="text-gray-600">123 Dental Street, Medical District<br />New York, NY 10001</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Working Hours</h3>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 7:00 PM</p>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-blue-500" />
                  Book an Appointment
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="full-name" className="block text-gray-700 mb-2 font-semibold">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input id="full-name" type="text" required placeholder="John Doe" className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">Email *</label>
                      <input id="email" type="email" required placeholder="john@example.com" className="w-full px-4 py-2 border rounded-lg outline-none" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2 font-semibold">Phone Number *</label>
                      <input id="phone" type="tel" required placeholder="+1 234 567 8900" className="w-full px-4 py-2 border rounded-lg outline-none" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-gray-700 mb-2 font-semibold">Select Service</label>
                      <select id="service" className="w-full px-4 py-2 border rounded-lg outline-none" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                        <option value="">Select a service</option>
                        <option value="Teeth Whitening">Teeth Whitening</option>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="Root Canal">Root Canal</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-gray-700 mb-2 font-semibold">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input id="date" type="date" className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-gray-700 mb-2 font-semibold">Preferred Time</label>
                      <select
                        id="time"
                        className="w-full px-4 py-2 border rounded-lg outline-none"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      >
                        <option value="">Select a time</option>
                        <option value="9-10">9:00 AM - 10:00 AM</option>
                        <option value="10-11">10:00 AM - 11:00 AM</option>
                        <option value="11-12">11:00 AM - 12:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-semibold">Message</label>
                    <textarea id="message" rows={4} placeholder="Your concerns..." className="w-full px-4 py-2 border rounded-lg outline-none resize-none" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    Book Appointment <Send className="h-4 w-4" />
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Map Section */}
            <div className="mt-12 bg-white rounded-2xl p-4 shadow-lg">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1625500000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
              ></iframe>

{/* <iframe
  title="Clinic Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12..." // Apni poori URL yahan rehne den
  width="100%"
  height="400"
  className="border-0 rounded-[12px]"
  allowFullScreen
  loading="lazy"
></iframe> */}














            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}