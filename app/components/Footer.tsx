'use client';
import { 
  Smile, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart, 
  Home,
  Stethoscope,
  User,
  MailQuestion,
  Sparkles,
  Droplet,
  Activity,
  Brain,
  ArrowRight
} from 'lucide-react';
// ✅ React Icons se social icons import karo
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-5 group">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-2.5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Smile className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-300 bg-clip-text text-transparent">
                Dr. Ayesha Dental
              </span>
            </div>
            <p className="text-blue-100 leading-relaxed text-sm">
              Transforming smiles with cutting-edge technology and compassionate care. Your journey to perfect smile starts here.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="bg-white/10 hover:bg-[#1877F2] p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FaFacebook className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-[#1DA1F2] p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FaTwitter className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-[#E4405F] p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FaInstagram className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-[#FF0000] p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FaYoutube className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold relative inline-block group">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-transparent rounded-full group-hover:w-full transition-all duration-500"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="group flex items-center gap-2 text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="group flex items-center gap-2 text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2">
                  <Stethoscope className="h-4 w-4" />
                  <span>Our Services</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="group flex items-center gap-2 text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2">
                  <User className="h-4 w-4" />
                  <span>About Doctor</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-center gap-2 text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2">
                  <MailQuestion className="h-4 w-4" />
                  <span>Contact Us</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold relative inline-block group">
              Our Services
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-transparent rounded-full group-hover:w-full transition-all duration-500"></div>
            </h3>
            <ul className="space-y-3">
              <li className="group flex items-center gap-2 text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 cursor-pointer">
                <Sparkles className="h-4 w-4" />
                <span>Teeth Whitening</span>
              </li>
              <li className="group flex items-center gap-2 text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 cursor-pointer">
                <Droplet className="h-4 w-4" />
                <span>Dental Implants</span>
              </li>
              <li className="group flex items-center gap-2 text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 cursor-pointer">
                <Activity className="h-4 w-4" />
                <span>Root Canal</span>
              </li>
              <li className="group flex items-center gap-2 text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 cursor-pointer">
                <Brain className="h-4 w-4" />
                <span>Orthodontics</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold relative inline-block group">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-transparent rounded-full group-hover:w-full transition-all duration-500"></div>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-blue-100 group hover:text-white transition-colors">
                <MapPin className="h-5 w-5 mt-0.5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm">123 Dental Street, Medical District, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100 group hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform group-hover:rotate-12" />
                <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3 text-blue-100 group hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@drayeshadental.com" className="hover:underline">info@drayeshadental.com</a>
              </li>
              <li className="flex items-center gap-3 text-blue-100 group hover:text-white transition-colors">
                <Clock className="h-5 w-5 text-blue-400 group-hover:rotate-180 transition-transform duration-500" />
                <span>Mon-Sat: 9am - 7pm | Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-800/30 to-purple-800/30 rounded-2xl backdrop-blur-sm border border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h4>
              <p className="text-blue-200 text-sm">Get the latest dental tips and exclusive offers</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-xl bg-white/10 border border-blue-400/30 text-white placeholder-blue-200/50 focus:outline-none focus:border-blue-400 transition-all w-full sm:w-64"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm flex items-center gap-1">
              © {currentYear} Dr. Ayesha Dental. All rights reserved. Made with 
              <Heart className="inline h-4 w-4 text-red-400 animate-pulse mx-1" /> 
              for your smile
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-all hover:scale-105">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white transition-all hover:scale-105">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white transition-all hover:scale-105">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}