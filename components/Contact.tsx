
import React from 'react';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-lime-400 font-bold uppercase tracking-widest text-sm">Contact Us</h2>
              <h3 className="text-4xl md:text-6xl font-extrabold">Ready to Start<br /><span className="text-slate-600">Growing?</span></h3>
              <p className="text-slate-400 text-xl max-w-md">
                Don't waste another dollar on marketing that doesn't work. Let's build your brand and grow your sales.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-lime-400">
                  <Mail />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Email Us</div>
                  <div className="text-lg font-bold">hello@grownextgen.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-blue-400">
                  <MapPin />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Office</div>
                  <div className="text-lg font-bold">Global / Remote HQ</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-orange-400">
                  <Phone />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Call Directly</div>
                  <div className="text-lg font-bold">+1 (555) 000-0000</div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105"
              >
                <MessageSquare size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:border-lime-400 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                  <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:border-lime-400 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Service Interested In</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:border-lime-400 outline-none transition-all appearance-none">
                  <option>Sales Growth Funnel</option>
                  <option>Paid Ads Management</option>
                  <option>Web Design / Shopify</option>
                  <option>SEO & Content</option>
                  <option>Complete Package</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:border-lime-400 outline-none transition-all"></textarea>
              </div>
              <button className="w-full bg-lime-400 text-slate-950 font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-lime-300 transition-all">
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
