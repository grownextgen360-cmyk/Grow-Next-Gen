
import React, { useState } from 'react';
import { generateFreeAudit } from '../services/geminiService';
import { Search, Loader2, CheckCircle2, Trophy, ArrowRight } from 'lucide-react';

const AuditTool: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [website, setWebsite] = useState('');
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await generateFreeAudit(businessName, website, industry);
      setResult(data);
    } catch (err) {
      setError('Failed to generate audit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="audit" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-lime-400/5 blur-[100px] -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Get Your AI-Powered <span className="text-lime-400">Growth Audit</span></h2>
            <p className="text-slate-400 text-lg">Enter your details below and our AI will analyze your digital presence instantly.</p>
          </div>

          {!result ? (
            <form onSubmit={handleAudit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 uppercase">Business Name</label>
                <input 
                  required
                  type="text" 
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Zen Salon & Spa"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-all text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 uppercase">Website URL</label>
                <input 
                  required
                  type="url" 
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="e.g. https://zensalon.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-all text-white"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-300 uppercase">Industry</label>
                <select 
                  required
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-all text-white appearance-none"
                >
                  <option value="">Select Industry</option>
                  <option value="eCommerce">eCommerce</option>
                  <option value="Salon & Beauty">Salon & Beauty</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="SaaS">SaaS / Software</option>
                  <option value="Local Service">Local Service (Plumbing, HVAC, etc.)</option>
                </select>
              </div>

              <div className="md:col-span-2 pt-4">
                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full bg-lime-400 text-slate-950 font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-lime-300 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" />
                      <span>Analyzing your business...</span>
                    </>
                  ) : (
                    <>
                      <Search size={20} />
                      <span>Analyze My Business Now</span>
                    </>
                  )}
                </button>
              </div>
              {error && <p className="md:col-span-2 text-red-400 text-center mt-4">{error}</p>}
            </form>
          ) : (
            <div className="animate-in fade-in zoom-in duration-500">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-slate-800 pb-8">
                <div>
                  <h3 className="text-2xl font-bold">{businessName} Audit Report</h3>
                  <p className="text-slate-400">{industry} • {website}</p>
                </div>
                <div className="bg-slate-950 px-6 py-3 rounded-2xl border border-lime-400/30 text-center">
                  <div className="text-xs text-slate-400 font-bold uppercase">Growth Score</div>
                  <div className="text-4xl font-black text-lime-400">{result.score}/10</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center space-x-2 text-xl font-bold mb-3 text-lime-400">
                      <Trophy size={20} />
                      <span>The Strategy</span>
                    </h4>
                    <p className="text-slate-300 leading-relaxed italic border-l-4 border-slate-700 pl-4 bg-slate-950/30 py-4 rounded-r-xl">
                      "{result.strategy}"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-400">Detailed Analysis</h4>
                    <p className="text-slate-400 leading-relaxed">{result.analysis}</p>
                  </div>
                </div>

                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                  <h4 className="text-xl font-bold mb-6 flex items-center space-x-2">
                    <CheckCircle2 className="text-lime-400" />
                    <span>Quick Wins (Action Plan)</span>
                  </h4>
                  <ul className="space-y-4">
                    {result.quickWins.map((win: string, i: number) => (
                      <li key={i} className="flex items-start space-x-3 text-slate-300">
                        <span className="bg-lime-400/10 text-lime-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-1 shrink-0">{i+1}</span>
                        <span>{win}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => setResult(null)}
                    className="mt-8 w-full border border-slate-700 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-bold"
                  >
                    Start New Audit
                  </button>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-lime-400 text-slate-950 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold">Want us to execute this strategy for you?</h4>
                  <p className="font-medium opacity-80">Book a free 15-minute growth consultation.</p>
                </div>
                <a href="#contact" className="bg-slate-950 text-white px-8 py-3 rounded-full font-bold flex items-center space-x-2 hover:bg-slate-900 transition-all shrink-0">
                  <span>Claim My Strategy</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuditTool;
