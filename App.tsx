
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AuditTool from './components/AuditTool';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "CEO, Lumiere Salon",
      text: "Grow Next Gen completely transformed our booking rate. We went from 20 leads a month to over 150 in just 60 days.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "David Chen",
      role: "Founder, Peak Supplements",
      text: "Their Shopify optimization alone increased our conversion rate from 1.2% to 3.8%. Our ROAS has never been higher.",
      avatar: "https://i.pravatar.cc/150?u=david"
    },
    {
      name: "Mike Rodriguez",
      role: "Owner, MR HVAC Services",
      text: "Finally, an agency that actually talks about sales instead of just 'vanity metrics'. They're like our outsourced sales team.",
      avatar: "https://i.pravatar.cc/150?u=mike"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-lime-400 font-bold uppercase tracking-widest text-sm mb-4">Results</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4">Client Success Stories</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative group hover:border-lime-400/50 transition-all duration-500">
              <Quote className="absolute top-6 right-8 text-slate-800 w-12 h-12" />
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-lime-400 text-lime-400" />)}
              </div>
              <p className="text-slate-300 mb-8 italic text-lg leading-relaxed relative z-10">"{rev.text}"</p>
              <div className="flex items-center space-x-4">
                <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full border-2 border-slate-700" />
                <div>
                  <div className="font-bold text-white">{rev.name}</div>
                  <div className="text-sm text-slate-500">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square bg-slate-800 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="The Team" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-lime-400 text-slate-950 p-8 rounded-2xl shadow-2xl animate-bounce duration-[3000ms]">
            <div className="text-4xl font-black text-slate-950">150+</div>
            <div className="text-sm font-bold uppercase tracking-tighter text-slate-900">Brands Scaled</div>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-lime-400 font-bold uppercase tracking-widest text-sm">Our Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">We're Not Just An Agency, We're Your <span className="text-lime-400">Growth Partner.</span></h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Grow Next Gen was born from a simple observation: most agencies focus on clicks, not customers. We bridge that gap. We combine cutting-edge psychological triggers with modern technology to build sales engines that don't sleep.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="text-white font-bold text-xl">Data-First</div>
              <p className="text-slate-500 text-sm">Every decision we make is backed by real performance metrics.</p>
            </div>
            <div className="space-y-2">
              <div className="text-white font-bold text-xl">ROI Focus</div>
              <p className="text-slate-500 text-sm">If it doesn't make you money, we don't do it. Period.</p>
            </div>
          </div>
          <a href="#contact" className="inline-block bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all text-center">
            Start Your Growth Journey
          </a>
        </div>
      </div>
    </section>
  );
}

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <AuditTool />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
