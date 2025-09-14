'use client'
import { motion } from 'framer-motion'
import { FaRocket, FaEnvelope } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white text-center overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-transparent blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            Ready to Start Your Journey?
          </h3>
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            Be among the first to explore India with <span className="text-yellow-400 font-semibold">Virtual Guide</span>.  
            Join the pilot today and unlock smart tours, offline maps, and more.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a
              href="#signup"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform flex items-center gap-2"
            >
              <FaRocket /> Get Started
            </a>

            <a
              href="https://port-folio-react-57ha.vercel.app/"
              className="px-8 py-4 rounded-full bg-white text-indigo-700 font-bold shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform flex items-center gap-2"
            >
              <FaEnvelope /> Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
