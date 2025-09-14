'use client'


export default function Footer(){
return (
<footer className="bg-slate-900 text-slate-300">
<div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h4 className="text-xl font-bold text-white">Virtual Guide</h4>
<p className="mt-2 text-sm">Multilingual, context-aware tours for India’s heritage sites.</p>
</div>
<div>
<h5 className="font-semibold text-white">Quick Links</h5>
<ul className="mt-3 space-y-2 text-sm">
<li><a href="#features" className="hover:text-white">Features</a></li>
<li><a href="#how" className="hover:text-white">How It Works</a></li>
<li><a href="#pricing" className="hover:text-white">Pricing</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-white">Contact</h5>
<p className="mt-3 text-sm">📧 hello@virtualguide.com</p>
<p className="text-sm">📞 +91 98765 43210</p>
</div>
</div>
<div className="border-t border-slate-700 py-4 text-center text-xs text-slate-500">
© {new Date().getFullYear()} Virtual Guide. All rights reserved.
</div>
</footer>
)
}