
import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

const caseStudies = [
  {
    client: 'Glow Skin Studio',
    category: 'Sales Funnel & Ads',
    result: '3.2X ROAS',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
    description: 'We rebuilt their Instagram funnel and launched high-conversion video ads.'
  },
  {
    client: 'EcoWare Store',
    category: 'Shopify Optimization',
    result: '120% Sales Lift',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
    description: 'Speed optimization and conversion-focused UX design for a Shopify store.'
  },
  {
    client: 'Prime Fit Gym',
    category: 'Lead Generation',
    result: '450+ Monthly Leads',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
    description: 'Automated FB Lead Form ads connected to a direct SMS nurturing system.'
  },
  {
    client: 'TechFlow SaaS',
    category: 'Google Ads',
    result: 'Cost/Lead Reduced by 40%',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=600',
    description: 'Precision semantic keyword targeting and dynamic landing page creation.'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-lime-400 font-bold uppercase tracking-widest text-sm">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">Results That Matter</h3>
            <p className="text-slate-400 max-w-lg text-lg">
              We focus on one thing only: making our clients more money. Here's the proof.
            </p>
          </div>
          <button className="text-white border-b-2 border-lime-400 pb-2 font-bold flex items-center space-x-2 hover:text-lime-400 transition-colors">
            <span>View All Case Studies</span>
            <ExternalLink size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 transition-all hover:border-lime-400/50">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.client} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-lime-400 text-xs font-bold uppercase tracking-widest mb-1 block">{item.category}</span>
                    <h4 className="text-2xl font-bold">{item.client}</h4>
                  </div>
                  <div className="bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full text-sm font-black flex items-center space-x-1">
                    <TrendingUp size={14} />
                    <span>{item.result}</span>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
              
              {/* Desktop Hover Overlay */}
              <div className="absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
