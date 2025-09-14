'use client'
import { motion } from 'framer-motion'
import { FaMapMarkedAlt, FaDownload, FaHeadphones } from 'react-icons/fa'

const steps = [
  {
    title: 'Choose Site & Language',
    desc: 'Select your heritage site and preferred narration language.',
    icon: FaMapMarkedAlt,
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Download Offline Pack',
    desc: 'Get maps, narrations, and audio packs to use offline.',
    icon: FaDownload,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Walk & Listen',
    desc: 'Enjoy step-by-step guidance with auto audio at POIs.',
    icon: FaHeadphones,
    color: 'from-green-500 to-emerald-500',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white overflow-hidden"
    >
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500"
          >
            How It Works
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`relative p-8 rounded-2xl shadow-2xl bg-gradient-to-br ${s.color} text-white`}
              >
                {/* Step number */}
                <div className="absolute -top-5 -left-5 w-12 h-12 flex items-center justify-center rounded-full bg-white text-black font-bold shadow-lg">
                  {i + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/20 mb-6">
                  <Icon size={28} />
                </div>

                <h4 className="text-xl font-semibold">{s.title}</h4>
                <p className="mt-3 text-sm text-white/90 leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
