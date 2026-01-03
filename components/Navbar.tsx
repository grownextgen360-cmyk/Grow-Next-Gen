
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for Active Link highlighting
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'services', 'portfolio', 'process', 'testimonials', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Results', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-xl py-4 border-b border-slate-800/50 shadow-2xl shadow-black/50' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 group">
          <Rocket className="text-lime-400 w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-bold tracking-tight text-white uppercase">GROW<span className="text-lime-400">NEXTGEN</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`px-4 py-2 rounded-full transition-all duration-300 font-bold text-[13px] uppercase tracking-wider whitespace-nowrap ${
                  isActive 
                  ? 'text-lime-400 bg-lime-400/10' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pl-4">
            <a 
              href="#audit" 
              className="bg-lime-400 text-slate-950 px-6 py-2.5 rounded-full font-bold text-[13px] hover:bg-lime-300 transition-all transform hover:scale-105 active:scale-95 neon-glow uppercase tracking-wider"
            >
              FREE AUDIT
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 top-[72px] bg-slate-950 z-40 md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold uppercase tracking-tight transition-colors ${activeSection === link.href.substring(1) ? 'text-lime-400' : 'text-slate-300'}`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-slate-800">
            <a 
              href="#audit" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-lime-400 text-slate-950 py-4 rounded-2xl font-black text-center text-xl uppercase tracking-wider shadow-lg shadow-lime-400/20"
            >
              GET FREE AUDIT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
