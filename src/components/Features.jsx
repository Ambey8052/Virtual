'use client'
import { motion } from 'framer-motion'
import { GiSpeaker, GiSatelliteCommunication } from 'react-icons/gi'
import { MdTranslate, MdMap } from 'react-icons/md'

const features = [
  {
    title: 'Geofenced Storytelling',
    description: 'Hear engaging narratives auto-play at POIs.',
    icon: GiSpeaker,
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Multilingual TTS',
    description: 'Listen in multiple regional & international languages.',
    icon: MdTranslate,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Offline Maps & Routes',
    description: 'Download routes so poor connectivity won’t stop you.',
    icon: MdMap,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Verified Fare Estimator',
    description: 'Get fair ride estimates, avoid overcharging.',
    icon: GiSatelliteCommunication,
    color: 'from-orange-500 to-amber-500',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white overflow-hidden">
      {/* Decorative blurred glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500"
          >
            Core Features
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Everything you need for a <span className="text-yellow-400">safe</span>,{' '}
            <span className="text-pink-400">immersive</span>, and{' '}
            <span className="text-green-400">accessible</span> exploration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, idx) => {
            const Icon = f.icon
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className={`relative p-8 rounded-2xl shadow-2xl bg-gradient-to-br ${f.color} overflow-hidden`}
              >
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/20 mb-6">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold">{f.title}</h4>
                  <p className="text-sm mt-3 text-white/90 leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
