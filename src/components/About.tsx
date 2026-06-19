import { useEffect, useRef } from 'react';
import { Code2, Coffee, Rocket, Heart } from 'lucide-react';
import myPhoto from '../assets/my-photo.jpg';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices and design patterns.',
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies and frameworks to deliver solutions.',
  },
  {
    icon: Coffee,
    title: 'Dedicated',
    description: 'Passionate about crafting exceptional user experiences and robust backends.',
  },
  {
    icon: Heart,
    title: 'Team Player',
    description: 'Collaborating effectively with cross-functional teams to achieve goals.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="glow-orb w-72 h-72 bg-accent-cyan/20 top-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me and my journey</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <div className="animate-on-scroll">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-3xl overflow-hidden gradient-border">
                <div className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
                <img
                  src={myPhoto}
                  alt="Developer portrait"
                  className="w-full h-full object-contain scale-95 opacity-80 hover:opacity-100 transition-all duration-300"
                />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary-500/30 to-accent-cyan/30 rounded-2xl blur-xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent-teal/30 to-primary-500/30 rounded-xl blur-xl" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                A passionate developer crafting digital experiences
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a recent Computer engineering graduate with a passion for building web applications
                that make a difference. My journey started with Java during my university days,
                and since then, I've expanded my skill set to include modern web technologies.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I believe in writing clean, maintainable code and continuously learning new
                technologies. When I'm not coding, you'll find me contributing to open-source
                projects or exploring the latest tech trends.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="animate-on-scroll p-4 glass-hover rounded-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-6 h-6 text-primary-400 mb-2" />
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
