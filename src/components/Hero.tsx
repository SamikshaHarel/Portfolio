import { ChevronDown, Download, Github, Linkedin } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hero = heroRef.current;
      if (hero) {
        const elements = hero.querySelectorAll('.parallax');
        elements.forEach((el, i) => {
          const speed = (i + 1) * 0.1;
          (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="glow-orb w-96 h-96 bg-primary-500/30 top-20 -left-48 animate-pulse-slow" />
      <div className="glow-orb w-80 h-80 bg-accent-cyan/20 bottom-20 -right-40 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="glow-orb w-64 h-64 bg-accent-teal/20 top-1/2 left-1/2 animate-pulse-slow" style={{ animationDelay: '4s' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] parallax" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary-400 glass rounded-full border-primary-500/30">
            Available for opportunities
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">Samiksha Harel</span>
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          Full Stack Java Developer
        </h2>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          Passionate about building scalable web applications and crafting elegant solutions.
          Transforming ideas into production-ready software with modern technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <a
            href="#projects"
            className="btn-primary flex items-center gap-2"
          >
            View Projects
          </a>
        <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
>
  {/* <Download size={18} /> */}
  View Resume
</a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass-hover rounded-xl group"
            aria-label="GitHub Profile"
          >
            <Github size={24} className="text-gray-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass-hover rounded-xl group"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} className="text-gray-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ChevronDown size={32} className="text-gray-500 hover:text-primary-400 transition-colors" />
        </a>
      </div>
    </section>
  );
}
