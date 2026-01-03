
import React from 'react';
import { Share2, TrendingUp, Code2, MousePointer2, Megaphone, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Social Media Marketing',
    description: 'DOMINATE Facebook, Instagram, and TikTok with viral content and targeted engagement strategies.',
    icon: <Share2 className="w-10 h-10 text-lime-400" />,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Paid Ads Management',
    description: 'High-ROI Google & Meta ads. We turn $1 into $4 with precision targeting and continuous optimization.',
    icon: <Megaphone className="w-10 h-10 text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Sales Funnel Strategy',
    description: 'We map out the entire customer journey, from first click to repeat purchase. Automated and scalable.',
    icon: <TrendingUp className="w-10 h-10 text-purple-400" />,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Website Development',
    description: 'Custom WordPress & Shopify stores designed for speed, beauty, and maximum conversion rates.',
    icon: <Code2 className="w-10 h-10 text-orange-400" />,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Conversion Rate Opt (CRO)',
    description: 'Data-driven landing page tweaks that double your sales without increasing your ad spend.',
    icon: <MousePointer2 className="w-10 h-10 text-pink-400" />,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'App Marketing',
    description: 'Scale your mobile app user base through strategic ASO and user acquisition campaigns.',
    icon: <Smartphone className="w-10 h-10 text-cyan-400" />,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=500'
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-lime-400 font-bold uppercase tracking-widest text-sm">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">Services We Crush</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We provide full-stack growth solutions tailored for ambitious brands looking to dominate their market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-lime-400/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-lg shadow-black/20"
            >
              <div className="mb-6 bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-lime-400 group-hover:text-slate-950 transition-all duration-500">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <div className="mt-auto overflow-hidden rounded-2xl h-48 opacity-40 group-hover:opacity-100 transition-opacity">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
