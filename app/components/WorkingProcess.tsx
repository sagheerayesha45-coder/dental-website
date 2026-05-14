'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Search, ClipboardList, Smile, ArrowRight, Clock, CheckCircle, Star, Users, Heart } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: 'Appointment Book Karein',
    description: 'Online ya phone call kar ke appointment lein. Apne liye convenient time select karein.',
    fullDesc: 'Easy online booking system hai. Aap apna preferred date aur time choose kar sakte hain. Instant confirmation milegi.',
    icon: Calendar,
    color: 'from-blue-500 to-cyan-500',
    duration: '5 minutes',
    details: ['Online booking', 'Phone booking', 'WhatsApp booking', 'Instant confirmation']
  },
  {
    id: 2,
    title: 'Pehli Consultation',
    description: 'Dr. Ayesha se mil kar complete oral examination karayein.',
    fullDesc: 'Digital X-rays, 3D scanning, aur comprehensive checkup. Aapki poori dental history review ki jayegi.',
    icon: Search,
    color: 'from-purple-500 to-pink-500',
    duration: '30 minutes',
    details: ['Digital X-rays', '3D Scanning', 'Oral examination', 'History review']
  },
  {
    id: 3,
    title: 'Treatment Plan',
    description: 'Personalized treatment plan aur transparent pricing receive karein.',
    fullDesc: 'Customized treatment plan banaya jayega. EMI options aur insurance assistance bhi available hai.',
    icon: ClipboardList,
    color: 'from-orange-500 to-red-500',
    duration: '15 minutes',
    details: ['Customized plan', 'EMI options', 'Insurance help', 'Transparent pricing']
  },
  {
    id: 4,
    title: 'Apni Smile Transform Karein',
    description: 'Painless treatment aur amazing results ka experience lein.',
    fullDesc: 'Advanced technology se painless treatment. Follow-up care aur maintenance guide bhi di jayegi.',
    icon: Smile,
    color: 'from-green-500 to-teal-500',
    duration: 'Varies',
    details: ['Painless procedure', 'Follow-up care', 'Maintenance guide', 'Lifetime support']
  }
];

const stats = [
  { value: '5000+', label: 'Khush Patients', icon: Users },
  { value: '98%', label: 'Success Rate', icon: CheckCircle },
  { value: '15+', label: 'Years Experience', icon: Star },
  { value: '24/7', label: 'Emergency Support', icon: Heart }
];

export default function WorkingProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-semibold mb-4">
            ⚡ Simple & Easy Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Kaise Kaam Karta Hai?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sirf 4 simple steps mein apna dream smile paayein
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Step Number Circle */}
              <div className="md:w-1/2">
                <div className={`bg-gradient-to-r ${step.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group`}>
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
                        {step.id}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-white/90 text-sm mb-3">{step.description}</p>
                      <div className="flex items-center gap-2 text-white/80 text-xs">
                        <Clock className="h-3 w-3" />
                        <span>Duration: {step.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Card */}
              <div className="md:w-1/2">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <p className="text-gray-700 mb-4 leading-relaxed">{step.fullDesc}</p>
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Kyun Hamen Choose Karein?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Aaj hi Appointment Book Karein
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}