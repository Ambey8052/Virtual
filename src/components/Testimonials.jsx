'use client'
import { motion } from 'framer-motion'


const testimonials = [
{ name: 'Aisha R.', role: 'Traveler', text: 'Offline mode saved our trip — narrations were so immersive!' },
{ name: 'Rajat M.', role: 'Guide', text: 'Reliable routes & fare estimates — highly recommend.' },
{ name: 'Sonia K.', role: 'Accessibility Advocate', text: 'Accessibility tips made our visit smoother.' },
]


export default function Testimonials(){
return (
<section id="testimonials" className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h3 className="text-3xl font-bold">What Visitors Say</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{testimonials.map((t, i) => (
<motion.div key={i} whileHover={{y:-5}} className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md">
<p className="text-white/90 italic">“{t.text}”</p>
<div className="mt-4 font-semibold">{t.name}</div>
<div className="text-xs text-white/70">{t.role}</div>
</motion.div>
))}
</div>
</div>
</section>
)
}