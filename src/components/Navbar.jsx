
'use client'
import Link from 'next/link'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'


export default function Navbar(){
const [open, setOpen] = useState(false)
return (
<header className="fixed w-full z-40 bg-white/70 backdrop-blur-sm border-b border-slate-100">
<nav className="container mx-auto flex items-center justify-between p-4">
<a href="#" className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">VG</div>
<div className="hidden md:block">
<div className="text-lg font-semibold">Virtual Guide</div>
<div className="text-xs text-slate-500">Explore India smarter</div>
</div>
</a>


<div className="hidden md:flex items-center gap-8">
<a href="#features" className="text-slate-700 hover:text-primary transition">Features</a>
<a href="#how" className="text-slate-700 hover:text-primary transition">How it works</a>
<a href="#testimonials" className="text-slate-700 hover:text-primary transition">Testimonials</a>
<a href="#pricing" className="text-slate-700 hover:text-primary transition">Pricing</a>
<a href="/login" className="btn-primary">Get Started</a>
</div>


<div className="md:hidden">
<button aria-label="Toggle menu" className="p-2 rounded-md" onClick={() => setOpen(!open)}>
{open ? <FiX size={22} /> : <FiMenu size={22} />}
</button>
</div>
</nav>


{/* mobile menu */}
{open && (
<motion.div
initial={{ opacity: 0, y: -8 }}
animate={{ opacity: 1, y: 0 }}
className="md:hidden bg-white/95 border-t border-slate-100"
>
<div className="flex flex-col gap-2 p-4">
<a href="#features" className="py-2">Features</a>
<a href="#how" className="py-2">How it works</a>
<a href="#testimonials" className="py-2">Testimonials</a>
<a href="#pricing" className="py-2">Pricing</a>
<a href="#" className="btn-primary w-full justify-center">Get Started</a>
</div>
</motion.div>
)}
</header>
)
}