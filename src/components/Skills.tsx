import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Backend
  { name: 'Java', level: 90, category: 'Backend' },
  { name: 'Spring Boot', level: 85, category: 'Backend' },
  { name: 'Python', level: 80, category: 'Backend' },
  { name: 'Django', level: 82, category: 'Backend' },
{ name: 'Flask', level: 80, category: 'Backend' },
  { name: 'REST APIs', level: 88, category: 'Backend' },
  { name: 'MySQL', level: 82, category: 'Backend' },
  // Frontend
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'HTML/CSS', level: 92, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 88, category: 'Frontend' },
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  // Database
  { name: 'MySQL', level: 85, category: 'Database' },
  { name: 'MongoDB', level: 78, category: 'Database' },
  // Tools & Others
  { name: 'Git', level: 85, category: 'Tools' },
  { name: 'GitHub', level: 88, category: 'Tools' },
  { name: 'VS Code', level: 92, category: 'Tools' },
  { name: 'Postman', level: 82, category: 'Tools' },
 
];

const techIcons = [
  { name: 'Java', color: 'from-orange-500 to-red-600' },
  { name: 'Spring', color: 'from-green-500 to-emerald-600' },
  { name: 'Python', color: 'from-yellow-400 to-blue-500' },
  { name: 'React', color: 'from-cyan-400 to-blue-500' },
  { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
  { name: 'MySQL', color: 'from-blue-500 to-indigo-600' },
  { name: 'MongoDB', color: 'from-green-500 to-green-700' },
  { name: 'Git', color: 'from-red-500 to-orange-500' },
];

export default function Skills() {
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

  const categories = ['Backend', 'Frontend', 'Tools'];

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="glow-orb w-96 h-96 bg-primary-500/20 -left-48 top-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies I've been working with and mastered over time
          </p>
        </div>

        {/* Tech Icons Banner */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 animate-on-scroll">
          {techIcons.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${tech.color} p-0.5`}>
                <div className="w-full h-full rounded-2xl bg-dark-800 flex items-center justify-center group-hover:bg-dark-700 transition-colors">
                  <span className="font-display font-bold text-white text-xs md:text-sm">
                    {tech.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills by Category */}
        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <div
              key={category}
              className="animate-on-scroll glass p-6 rounded-2xl"
              style={{ animationDelay: `${catIndex * 0.2}s` }}
            >
              <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${
                  category === 'Backend' ? 'bg-green-400' :
                  category === 'Frontend' ? 'bg-blue-400' : 'bg-purple-400'
                }`} />
                {category}
              </h3>

              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-primary-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: '0%',
                            ['--target-width' as string]: `${skill.level}%`,
                          }}
                          ref={(el) => {
                            if (el) {
                              setTimeout(() => {
                                el.style.width = `${skill.level}%`;
                              }, 200 + index * 100);
                            }
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

       {/* Additional Skills */}
<div className="mt-12 animate-on-scroll">
  <h3 className="text-center text-gray-400 mb-6">
    Core Concepts and practices
  </h3>
  <div className="flex flex-wrap justify-center gap-3">
    {[
      'OOPS',
      'DSA',
      'Git',
      'DBMS',
      'Maven',
      'NLP',
      'Machine Learning'
    ].map((skill) => (
      <span
        key={skill}
        className="px-4 py-2 text-sm text-gray-300 glass-hover rounded-full"
      >
        {skill}
      </span>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
