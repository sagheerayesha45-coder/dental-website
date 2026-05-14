'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Sparkles, Shield, Smile, Activity, Brush, Heart, Star, Award, Clock,
  Search, Filter, X, Calendar, Users, CheckCircle, ArrowRight, 
  TrendingUp, Clock as ClockIcon, DollarSign, Star as StarIcon,
  ChevronLeft, ChevronRight, Share2, Zap, Gift, Truck, Crown, Gem
} from 'lucide-react';
import Link from 'next/link';

// ✅ TypeScript Interfaces
interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  color: string;
  bgColor: string;
  features: string[];
  includes: string[];
  popular: boolean;
  category: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
}

// All Services Data
const allServices: Service[] = [
  { 
    id: 1, 
    icon: Sparkles, 
    title: 'Teeth Whitening', 
    description: 'Professional teeth whitening for a brighter, confident smile.', 
    shortDesc: 'Get 8 shades lighter in just 60 minutes',
    fullDesc: 'Our advanced LED teeth whitening technology removes years of stains in just one session. Safe, effective, and long-lasting results that will boost your confidence.',
    duration: '60 min', 
    price: 299, 
    oldPrice: 499,
    discount: '40% OFF',
    rating: 4.8,
    reviews: 234,
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
    features: ['Painless Procedure', 'Instant Results', 'Long Lasting up to 2 Years', 'Safe for Enamel', 'No Sensitivity', 'Professional Grade'],
    includes: ['Free Consultation', 'Take Home Kit', 'Follow-up Check', 'Teeth Sensitivity Care'],
    popular: true,
    category: 'cosmetic'
  },
  { 
    id: 2, 
    icon: Shield, 
    title: 'Dental Implants', 
    description: 'Permanent solution for missing teeth with natural look.', 
    shortDesc: 'Restore your smile permanently',
    fullDesc: 'Premium titanium implants that fuse with your jawbone, creating a permanent foundation for natural-looking replacement teeth. 98% success rate.',
    duration: '2-3 hrs', 
    price: 1999, 
    oldPrice: 2999,
    discount: '33% OFF',
    rating: 4.9,
    reviews: 178,
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    features: ['Permanent Solution', 'Natural Look', 'Painless Procedure', 'Long-lasting', 'No Bone Graft Needed', 'Same Day Crown'],
    includes: ['Free CT Scan', 'Lifetime Warranty', 'Payment Plan', 'Free Follow-ups'],
    popular: true,
    category: 'surgical'
  },
  { 
    id: 3, 
    icon: Smile, 
    title: 'Cosmetic Dentistry', 
    description: 'Transform your smile with modern cosmetic procedures.', 
    shortDesc: 'Complete smile makeover',
    fullDesc: 'From veneers to bonding, our cosmetic dentistry services are designed to give you the smile of your dreams. Customized treatment plans for every patient.',
    duration: '90 min', 
    price: 499, 
    oldPrice: 799,
    discount: '37% OFF',
    rating: 4.7,
    reviews: 312,
    color: 'from-purple-400 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    features: ['Custom Design', 'Quick Results', 'Natural Appearance', 'Stain Resistant', 'Minimally Invasive', 'Long Lasting'],
    includes: ['Digital Smile Design', 'Trial Smile', 'Color Matching', 'Maintenance Guide'],
    popular: false,
    category: 'cosmetic'
  },
  { 
    id: 4, 
    icon: Activity, 
    title: 'Root Canal', 
    description: 'Painless root canal treatment with advanced technology.', 
    shortDesc: 'Save your natural tooth',
    fullDesc: 'Modern root canal treatment using rotary endodontics and 3D imaging. Single-visit procedure with minimal discomfort. Save your natural tooth from extraction.',
    duration: '90 min', 
    price: 899, 
    oldPrice: 1299,
    discount: '30% OFF',
    rating: 4.9,
    reviews: 456,
    color: 'from-green-400 to-teal-500',
    bgColor: 'bg-gradient-to-br from-green-50 to-teal-50',
    features: ['Single Visit', 'Painless', 'High Success Rate', 'Saves Natural Tooth', 'Advanced Technology', 'No Bacteria Left'],
    includes: ['Local Anesthesia', 'Digital X-Ray', 'Temporary Crown', 'Antibiotics'],
    popular: true,
    category: 'restorative'
  },
  { 
    id: 5, 
    icon: Brush, 
    title: 'Regular Checkup', 
    description: 'Complete oral examination and preventive care.', 
    shortDesc: 'Keep your smile healthy',
    fullDesc: 'Comprehensive dental checkup including oral examination, professional cleaning, and digital X-rays. Preventive care to avoid future dental problems.',
    duration: '30 min', 
    price: 99, 
    oldPrice: 199,
    discount: '50% OFF',
    rating: 4.6,
    reviews: 892,
    color: 'from-red-400 to-pink-500',
    bgColor: 'bg-gradient-to-br from-red-50 to-pink-50',
    features: ['Full Examination', 'Digital X-Ray', 'Professional Cleaning', 'Oral Cancer Screening', 'Treatment Plan', 'Expert Advice'],
    includes: ['Fluoride Treatment', 'Oral Hygiene Kit', 'Dental Consultation', 'Second Opinion'],
    popular: false,
    category: 'preventive'
  },
  { 
    id: 6, 
    icon: Heart, 
    title: 'Orthodontics', 
    description: 'Braces and aligners for perfectly straight teeth.', 
    shortDesc: 'Straight teeth in 6 months',
    fullDesc: 'Traditional braces and clear aligners (Invisalign) to straighten your teeth. Customized treatment plans for adults and children. Visible results in weeks.',
    duration: '1-2 yrs', 
    price: 3999, 
    oldPrice: 5999,
    discount: '33% OFF',
    rating: 4.8,
    reviews: 567,
    color: 'from-indigo-400 to-purple-500',
    bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
    features: ['Invisible Options', 'Fast Results', 'Payment Plan Available', 'Comfortable Fit', 'Removable Aligners', 'Digital Scanning'],
    includes: ['3D Scan', 'Treatment Plan', 'Retainers', 'Follow-up Visits'],
    popular: true,
    category: 'orthodontic'
  },
  { 
    id: 7, 
    icon: Crown, 
    title: 'Dental Crowns', 
    description: 'Restore damaged teeth with natural-looking crowns.', 
    shortDesc: 'Perfect restoration',
    fullDesc: 'Same-day ceramic crowns using CAD/CAM technology. Natural-looking, durable, and perfectly matched to your natural teeth color.',
    duration: '2 visits', 
    price: 1199, 
    oldPrice: 1699,
    discount: '29% OFF',
    rating: 4.7,
    reviews: 234,
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
    features: ['Same Day', 'Natural Look', 'Metal-Free', 'Durable', 'Perfect Fit', 'Stain Resistant'],
    includes: ['Digital Impression', 'Temporary Crown', 'Color Matching', '5 Year Warranty'],
    popular: false,
    category: 'restorative'
  },
  { 
    id: 8, 
    icon: Clock, 
    title: 'Emergency Care', 
    description: '24/7 emergency dental care when you need it most.', 
    shortDesc: 'Immediate relief',
    fullDesc: 'Round-the-clock emergency dental services for toothaches, broken teeth, lost fillings, and dental injuries. Immediate appointment available.',
    duration: 'Immediate', 
    price: 199, 
    oldPrice: 399,
    discount: '50% OFF',
    rating: 4.9,
    reviews: 123,
    color: 'from-red-500 to-red-700',
    bgColor: 'bg-gradient-to-br from-red-50 to-rose-50',
    features: ['24/7 Available', 'Immediate Relief', 'Experienced Team', 'Modern Equipment', 'Affordable', 'Insurance Accepted'],
    includes: ['Emergency Exam', 'Digital X-Ray', 'Pain Management', 'Follow-up Care'],
    popular: true,
    category: 'emergency'
  },
  { 
    id: 9, 
    icon: Gem, 
    title: 'Veneers', 
    description: 'Porcelain veneers for a perfect smile makeover.', 
    shortDesc: 'Hollywood smile',
    fullDesc: 'Ultra-thin porcelain veneers that cover imperfections like chips, gaps, and discoloration. Instant smile transformation with minimal tooth preparation.',
    duration: '2 visits', 
    price: 1299, 
    oldPrice: 1899,
    discount: '31% OFF',
    rating: 4.9,
    reviews: 345,
    color: 'from-pink-400 to-rose-500',
    bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
    features: ['Instant Results', 'Minimally Invasive', 'Stain Resistant', 'Natural Look', 'Long Lasting', 'Custom Made'],
    includes: ['Smile Design', 'Trial Veneers', 'Color Selection', 'Lifetime Care'],
    popular: true,
    category: 'cosmetic'
  }
];

// Categories
const categories: Category[] = [
  { id: 'all', name: 'All Services', icon: Star, color: 'bg-gray-500' },
  { id: 'cosmetic', name: 'Cosmetic', icon: Sparkles, color: 'bg-pink-500' },
  { id: 'surgical', name: 'Surgical', icon: Shield, color: 'bg-blue-500' },
  { id: 'restorative', name: 'Restorative', icon: Activity, color: 'bg-green-500' },
  { id: 'preventive', name: 'Preventive', icon: Brush, color: 'bg-red-500' },
  { id: 'orthodontic', name: 'Orthodontic', icon: Heart, color: 'bg-purple-500' },
  { id: 'emergency', name: 'Emergency', icon: Clock, color: 'bg-orange-500' }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<number>(5000);
  const [showRating, setShowRating] = useState<number>(0);
  const servicesPerPage: number = 6;

  // Filter and Sort Services
  const filteredServices: Service[] = allServices.filter(service => {
    const matchCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPrice = service.price <= priceRange;
    const matchRating = service.rating >= showRating;
    return matchCategory && matchSearch && matchPrice && matchRating;
  });

  // Sort Services
  const sortedServices: Service[] = [...filteredServices].sort((a, b) => {
    if (sortBy === 'popular') return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    if (sortBy === 'priceLow') return a.price - b.price;
    if (sortBy === 'priceHigh') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  // Pagination
  const totalPages: number = Math.ceil(sortedServices.length / servicesPerPage);
  const currentServices: Service[] = sortedServices.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm, sortBy, priceRange, showRating]);

  const handleBookNow = (service: Service): void => {
    setSelectedService(service);
    setShowModal(true);
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const ChevronDown = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <>
      <Navbar />
      <main className="pt-16 overflow-x-hidden">
        
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                }}
                className="inline-block mb-6"
              >
                <Smile className="h-24 w-24 text-white drop-shadow-2xl" />
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              >
                Transform Your
                <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent block md:inline md:ml-4">
                  Smile Today
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-200 max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Experience world-class dental care with our comprehensive range of advanced treatments
              </motion.p>
              
              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { value: '10,000+', label: 'Happy Patients', icon: Users, delay: 0 },
                  { value: '98%', label: 'Success Rate', icon: TrendingUp, delay: 0.1 },
                  { value: '24/7', label: 'Emergency Care', icon: ClockIcon, delay: 0.2 },
                  { value: '0%', label: 'Interest EMI', icon: DollarSign, delay: 0.3 },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-2 animate-bounce" />
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-200">{stat.label}</div>
                  </motion.div>
                ))}
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

        {/* Search and Filter Section */}
        <section className="sticky top-16 z-40 bg-white shadow-lg py-4 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
              
              <div className="flex gap-3 w-full lg:w-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex-1 lg:flex-none px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="popular">⭐ Most Popular</option>
                  <option value="priceLow">💰 Price: Low to High</option>
                  <option value="priceHigh">💰 Price: High to Low</option>
                  <option value="rating">📊 Highest Rated</option>
                </select>
                
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <Filter className="h-5 w-5" />
                  Filters
                  <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
            
            {/* Expandable Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-gray-200"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Price Range: Up to ${priceRange}</label>
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        value={priceRange}
                        onChange={(e) => setPriceRange(parseInt(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Minimum Rating: {showRating}+ Stars</label>
                      <div className="flex gap-2">
                        {[0, 4, 4.5, 4.8, 4.9].map(rating => (
                          <button
                            key={rating}
                            onClick={() => setShowRating(rating)}
                            className={`px-3 py-1 rounded-lg transition-all ${
                              showRating === rating ? 'bg-blue-500 text-white' : 'bg-gray-100'
                            }`}
                          >
                            {rating === 0 ? 'All' : `${rating}+ ⭐`}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Categories Pills */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {currentServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <Smile className="h-20 w-20 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-600 mb-2">No Services Found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange(5000);
                    setShowRating(0);
                  }}
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Clear All Filters
                </button>
              </motion.div>
            ) : (
              <>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {currentServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={service.id}
                        variants={itemVariants}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                      >
                        {/* Popular Badge */}
                        {service.popular && (
                          <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <Zap className="h-3 w-3" />
                            Most Popular
                          </div>
                        )}
                        
                        {/* Discount Badge */}
                        {service.discount && (
                          <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                            {service.discount}
                          </div>
                        )}
                        
                        {/* Card Header */}
                        <div className={`bg-gradient-to-r ${service.color} p-8 relative overflow-hidden`}>
                          <motion.div 
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.5 }}
                          />
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="relative z-10"
                          >
                            <IconComponent className="h-16 w-16 text-white" />
                          </motion.div>
                          <div className="absolute bottom-2 right-2 text-white/10 text-7xl font-bold">#{service.id}</div>
                        </div>
                        
                        {/* Card Body */}
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                              {service.title}
                            </h3>
                            <div className="flex items-center gap-1">
                              <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-semibold">{service.rating}</span>
                              <span className="text-xs text-gray-500">({service.reviews})</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-3">{service.shortDesc}</p>
                          <p className="text-gray-500 text-xs mb-4 line-clamp-2">{service.description}</p>
                          
                          {/* Features Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <motion.span
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                              >
                                ✓ {feature}
                              </motion.span>
                            ))}
                          </div>
                          
                          {/* Price and Duration */}
                          <div className="flex justify-between items-center border-t pt-4 mb-4">
                            <div>
                              <p className="text-xs text-gray-500">Duration</p>
                              <p className="font-semibold text-sm">{service.duration}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Starting from</p>
                              <div className="text-right">
                                <span className="text-xs line-through text-gray-400 mr-2">${service.oldPrice}</span>
                                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                  ${service.price}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleBookNow(service)}
                              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold"
                            >
                              Book Now
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2.5 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
                            >
                              <Share2 className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
                            </motion.button>
                          </div>
                        </div>
                        
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl`}></div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <motion.div 
                    className="flex justify-center gap-2 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="p-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                          currentPage === i + 1
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                            : 'border-2 border-gray-200 hover:border-blue-500'
                        }`}
                      >
                        {i + 1}
                      </motion.button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="p-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
              <p className="text-xl text-blue-100">Setting new standards in dental care excellence</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Truck, title: 'Free Consultation', desc: 'First consultation absolutely free with treatment plan', color: 'from-yellow-400 to-orange-500' },
                { icon: Shield, title: 'Insurance Claim', desc: 'We help you with all insurance paperwork', color: 'from-green-400 to-teal-500' },
                { icon: Gift, title: 'EMI Options', desc: '0% interest payment plans available', color: 'from-pink-400 to-rose-500' },
                { icon: Clock, title: '24/7 Support', desc: 'Emergency dental care anytime', color: 'from-purple-400 to-indigo-500' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 backdrop-blur-sm group-hover:shadow-2xl transition-all duration-300`}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="h-12 w-12 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-blue-100 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Booking Modal */}
      <AnimatePresence>
        {showModal && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="bg-white rounded-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <selectedService.icon className="h-6 w-6 text-blue-500" />
                  <h3 className="text-2xl font-bold">Book {selectedService.title}</h3>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600">Selected Service</p>
                  <p className="font-semibold">{selectedService.title}</p>
                  <p className="text-2xl font-bold text-blue-600">${selectedService.price}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Select Date</label>
                  <input 
                    type="date" 
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Select Time</label>
                  <select className="w-full border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="w-full border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Confirm Booking
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}