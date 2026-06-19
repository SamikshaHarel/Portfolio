import { useEffect, useRef } from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

interface EducationItem {
  id: number;
  type: 'education' | 'certification';
  title: string;
  institution: string;
  date: string;
  description?: string;
  grade?: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    type: 'education',
    title: 'Bachelor of Engineering in Computer Engineering',
    institution: 'Savitribai Phule Pune University',
    date: '2023 - 2026',
    description: 'Studying core computer science subjects including Data Structures, DBMS, Operating Systems, Computer Networks, Software Engineering, and Web Development.',
    grade: 'CGPA: 8.05/10.0',
  },
    {
    id: 2,
    type: 'certification',
    title: 'Java Full Stack Development Training',
    institution: 'sahyadri software and pvt.ltd',
    date: '2025',
    description:
      'Completed comprehensive training in Java, Spring Boot, React, MySQL, REST APIs, HTML, CSS, and JavaScript.',
  },

  {
    id: 3,
    type: 'experience',
    title: 'AI Internship',
    institution: 'CodeAlpha',
    date: '2025',
    description: 'Worked on AI-based applications including FAQ Chatbot and Language Translation Web App using Python, Flask, and Google Translate API.',
  },
  {
    id: 4,
    type: 'achievement',
    title: 'Participant - Zonal Level Research Project Competition',
    institution: 'Research Project Competition',
    date: '2025',
    description: 'Presented an innovative research project and participated in the zonal-level competition, gaining experience in research, problem-solving, and technical presentation.',
  },
   {
    id: 5,
    type: 'achievement',
    title: 'Second Prize in Project Competition',
    institution: 'College Project Competition',
    date: '2026',
    description:
      'Secured 2nd prize for project development and implementation.',
  },
 
];

export default function Education() {
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
    <section id="education" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="glow-orb w-72 h-72 bg-accent-cyan/20 top-1/3 -left-36" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">My academic journey and professional certifications</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 via-accent-cyan to-accent-teal" />

          {/* Items */}
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex items-center justify-between mb-8 md:mb-12 animate-on-scroll ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-[9px] md:-translate-x-1/2 z-10">
                <div className="w-[18px] h-[18px] rounded-full bg-dark-800 border-2 border-primary-500 shadow-lg shadow-primary-500/50" />
              </div>

              {/* Content Card */}
              <div
                className={`w-full md:w-[calc(50%-40px)] ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <article className="glass p-6 rounded-2xl hover:border-primary-500/30 transition-all duration-300">
                  {/* Icon */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`p-3 rounded-xl ${
                      item.type === 'education'
                        ? 'bg-primary-500/20 text-primary-400'
                        : 'bg-accent-teal/20 text-accent-teal'
                    }`}>
                      {item.type === 'education' ? (
                        <GraduationCap className="w-6 h-6" />
                      ) : (
                        <Award className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg text-white">
                        {item.title}
                      </h3>
                      <p className="text-primary-400 text-sm">{item.institution}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  )}

                  {/* Grade */}
                  {item.grade && (
                    <div className="mt-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-accent-teal" />
                      <span className="text-sm text-accent-teal font-medium">{item.grade}</span>
                    </div>
                  )}
                </article>
              </div>

              {/* Empty space for the other side on desktop */}
              <div className="hidden md:block w-[calc(50%-40px)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
