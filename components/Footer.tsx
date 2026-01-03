
import React from 'react';
import { Rocket, Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Rocket className="text-lime-400 w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight text-white">GROW<span className="text-lime-400">NEXTGEN</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              We grow your sales. We build your brand. The premium digital agency for ambitious business owners.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Paid Ads Management</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Conversion Rate Opt</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Website Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-lime-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Get weekly sales growth tips directly to your inbox.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-l-lg outline-none focus:border-lime-400 transition-colors text-sm w-full" />
              <button className="bg-lime-400 text-slate-950 px-4 py-2 rounded-r-lg font-bold text-sm">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 text-slate-600 text-xs">
          <p>© 2024 Grow Next Gen Marketing. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed by Grow Next Gen</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
