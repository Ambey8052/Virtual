'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaMapMarkedAlt } from 'react-icons/fa'


export default function Hero() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-primary to-accent text-white overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Discover India with <span className="text-yellow-300">Virtual Guide</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg md:text-xl text-white/90 max-w-xl">
                        Smart tours, offline maps, geofenced storytelling, and verified fares — in your language.
                    </motion.p>
                    <motion.div 
  initial={{opacity:0}} 
  animate={{opacity:1}} 
  transition={{delay:0.3}} 
  className="mt-8 flex flex-wrap gap-4"
>
  <a className="btn-primary" href="/explore">
    🚀 Start Exploring
  </a>

  <a className="btn-secondary flex items-center gap-2" href="#demo">
    <FaMapMarkedAlt /> Watch Demo
  </a>

  {/* Extra Fancy Button */}
  <a className="btn-glow" href="/signup">
    ✨ Join Beta
  </a>
</motion.div>

                </div>


                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="relative">
                    <img src="https://static.wixstatic.com/media/055605_65e20a7fcbc54e2e8720adfc2544c35e~mv2.jpg/v1/fill/w_1800,h_1082,al_c,q_85/taj_new_contant_edited.jpg" alt="Traveler" className="rounded-2xl shadow-2xl w-full object-cover" />
                </motion.div>
            </div>


            {/* Decorative */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </section>
    )
}