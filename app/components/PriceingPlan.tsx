'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { CheckCircle, Crown, Heart, Gem, Users } from 'lucide-react';

// ✅ TypeScript Interfaces
interface PricingPlan {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  icon: React.ElementType;
  color: string;
  badge: string;
  features: string[];
  popular: boolean;
  savings: string;
}

interface FeatureItem {
  icon: React.ElementType;
  text: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Basic Plan',
    price: 99,
    originalPrice: 199,
    icon: Heart,
    color: 'from-blue-500 to-cyan-500',
    badge: 'Best for Checkups',
    features: [
      'Comprehensive Dental Checkup',
      'Digital X-rays (2 views)',
      'Professional Teeth Cleaning',
      'Oral Cancer Screening',
      'Fluoride Treatment',
      'Treatment Consultation'
    ],
    popular: false,
    savings: 'Save $100'
  },
  {
    id: 2,
    name: 'Popular Plan',
    price: 299,
    originalPrice: 599,
    icon: Crown,
    color: 'from-purple-500 to-pink-500',
    badge: 'Most Popular',
    features: [
      'Everything in Basic Plan',
      'Teeth Whitening (1 session)',
      'Fillings (2 teeth)',
      'Oral Hygiene Kit',
      '20% off on all treatments',
      'Priority Booking'
    ],
    popular: true,
    savings: 'Save $300'
  },
  {
    id: 3,
    name: 'Premium Plan',
    price: 899,
    originalPrice: 1599,
    icon: Gem,
    color: 'from-amber-500 to-orange-500',
    badge: 'Best Value',
    features: [
      'Everything in Popular Plan',
      'Root Canal Treatment',
      'Dental Crown (1 tooth)',
      'Free Emergency Visit',
      '30% off on all treatments',
      'Lifetime Follow-up'
    ],
    popular: false,
    savings: 'Save $700'
  },
  {
    id: 4,
    name: 'Family Plan',
    price: 1999,
    originalPrice: 3999,
    icon: Users,
    color: 'from-green-500 to-teal-500',
    badge: 'For Family of 4',
    features: [
      'Full family coverage (4 members)',
      '2 free cleanings per person/year',
      'Emergency visits included',
      '40% off on all treatments',
      'Free braces consultation',
      'Priority appointments'
    ],
    popular: false,
    savings: 'Save $2000'
  }
];

export default function PricingPlans() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const calculatePrice = (price: number): number => {
    if (isYearly) {
      return Math.round(price * 12 * 0.8);
    }
    return price;
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
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
            💰 Affordable Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Humare Treatment Plans
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apni zaroorat aur budget ke hisaab se plan choose karein. EMI options bhi available!
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white p-1 rounded-full shadow-md inline-flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                !isYearly 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                isYearly 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Yearly
              <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, idx) => {
            const IconComponent = plan.icon;
            const currentPrice = calculatePrice(plan.price);
            const currentOriginalPrice = calculatePrice(plan.originalPrice);
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-2xl overflow-hidden ${
                  plan.popular ? 'ring-2 ring-purple-500 shadow-2xl' : 'shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-bl-2xl text-sm font-bold">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                <div className="bg-white p-6 h-full flex flex-col">
                  {/* Icon & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`bg-gradient-to-r ${plan.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                      <p className="text-xs text-gray-500">{plan.badge}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-gray-800">${currentPrice}</span>
                      <span className="text-gray-500">/{isYearly ? 'year' : 'month'}</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm line-through text-gray-400">${currentOriginalPrice}</span>
                        <span className="text-xs text-green-600 font-semibold">{plan.savings}</span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6 flex-1">
                    {plan.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Plan Choose Karein
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          * Sabhi prices inclusive of taxes hain. EMI options available on request.
        </motion.p>
      </div>
    </section>
  );
}