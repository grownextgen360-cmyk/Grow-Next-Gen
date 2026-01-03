
import React from 'react';
import { Search, Compass, Play, LineChart, FastForward } from 'lucide-react';

const steps = [
  {
    title: 'Audit',
    description: 'We identify holes in your current funnel and analyze competitors.',
    icon: <Search className="text-lime-400" />
  },
  {
    title: 'Strategy',
    description: 'We build a 90-day custom growth roadmap focused on ROI.',
    icon: <Compass className="text-blue-400" />
  },
  {
    title: 'Execution',
    description: 'Our specialists launch your ads and optimize your assets.',
    icon: <Play className="text-purple-400" />
  },
  {
    title: 'Optimization',
    description: 'A/B testing everything to lower costs and increase revenue.',
    icon: <LineChart className="text-pink-400" />
  },
  {
    title: 'Scaling',
    description: 'Once profitable, we pump more volume to aggressively take market share.',
    icon: <FastForward className="text-orange-400" />
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-lime-400 font-bold uppercase tracking-widest text-sm">The Method</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold">How We Scale Brands</h3>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-slate-950 border-2 border-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-lime-400 transition-all duration-500 transform group-hover:-rotate-6 group-hover:scale-110">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
                </div>
                <div className="text-lime-400 font-black mb-2">0{index + 1}</div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
