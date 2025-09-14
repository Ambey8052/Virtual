'use client'
import { motion } from 'framer-motion'

export default function HeroIllustration() {
  return (
    <div className="relative p-6">
      {/* Decorative blurred glow behind */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl"></div>

      {/* Animated SVG */}
      <motion.svg
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewBox="0 0 600 400"
        className="w-full h-auto relative z-10 drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Illustration of guided tour"
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#0ea5a3" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        {/* Background Card */}
        <rect
          width="100%"
          height="100%"
          rx="24"
          fill="url(#g1)"
          opacity="0.1"
        />

        <g transform="translate(40,40)">
          {/* Floating Circle */}
          <motion.circle
            cx="80"
            cy="80"
            r="60"
            fill="url(#g1)"
            opacity="0.95"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />

          {/* Map-like rectangle */}
          <rect
            x="180"
            y="40"
            width="320"
            height="180"
            rx="16"
            fill="#eef2ff"
            className="shadow-lg"
          />

          {/* Curved Path (Journey Line) */}
          <motion.path
            d="M200 260c30-40 100-60 180-40s140 80 120 120"
            stroke="#0ea5a3"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          />

          {/* Dots on Path */}
          <motion.circle
            cx="250"
            cy="280"
            r="10"
            fill="#7c3aed"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <motion.circle
            cx="360"
            cy="300"
            r="10"
            fill="#0ea5a3"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          />
        </g>
      </motion.svg>

      {/* Overlayed Text (outside SVG for better styling) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center max-w-md text-gray-200 text-sm md:text-base font-medium">
        Multilingual scripts · Geofenced POIs · Offline maps
      </div>
    </div>
  )
}
