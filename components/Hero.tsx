
import React from 'react';
import { ArrowRight, BarChart3, Target, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-lime-400 text-xs font-bold uppercase tracking-wider">
            <Zap size={14} />
            <span>The #1 Growth Agency for SMBs</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
            Turn Your Business Into a <span className="gradient-text">Sales Machine</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            We don't just run ads. We build sustainable growth ecosystems using data-driven strategies and high-converting design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#audit" className="bg-lime-400 text-slate-950 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 hover:bg-lime-300 transition-all group shadow-lg shadow-lime-400/20">
              <span>Get Free Audit</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="border border-slate-700 bg-slate-900/50 backdrop-blur text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center hover:bg-slate-800 transition-all">
              Contact Us
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-800">
            <div>
              <p className="text-3xl font-bold text-white">3.5X</p>
              <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Avg ROAS</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Campaigns</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">120%</p>
              <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold">YOY Growth</p>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-800/50">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
              alt="Marketing Strategy" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay UI Elements */}
            <div className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur p-4 rounded-2xl border border-slate-700/50 animate-bounce transition-all duration-500 delay-300 shadow-xl">
              <BarChart3 className="text-lime-400 mb-2" />
              <div className="text-[10px] text-slate-400 font-bold uppercase">Total Conversions</div>
              <div className="text-xl font-black text-white">+1,248</div>
            </div>
            <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur p-4 rounded-2xl border border-slate-700/50 shadow-xl">
              <Target className="text-cyan-400 mb-2" />
              <div className="text-[10px] text-slate-400 font-bold uppercase">Target Reach</div>
              <div className="text-xl font-black text-white">450,000+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
