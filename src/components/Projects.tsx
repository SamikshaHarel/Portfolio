import { ExternalLink, Folder, Github } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
  id: 1,
  title: 'SmartDesk - Employee Monitoring & AI Hiring System',
  description:
    'Final year project focused on employee monitoring, performance evaluation, and AI-based hiring recommendations with secure authentication and dashboard analytics.',
  image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
  technologies: ['Javafx', 'Flask', 'Supabase', 'AI/ML','spring boot','REST APIs'],
  github: 'https://github.com/your-username/smartdesk', 
  live: 'https://github.com/your-username/smartdesk',
  featured: true,
},
  {
    id: 2,
    title: 'StyleHub - Fashion E-Commerce Platform (In Progress)',
    description:
      'Full-stack fashion e-commerce platform with outfit recommendations, accessories, makeup suggestions, and AI-based styling features. Currently under development.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    technologies: ['React', 'Java', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/SamikshaHarel/StyleHub-Fashion-Ecommerce',
    live: 'https://github.com/SamikshaHarel/StyleHub-Fashion-Ecommerce',
    featured: true,
  },

  {
    id: 3,
    title: 'E-Commerce Website (Team Project)',
    description:
      'Full-stack e-commerce web application with product listing, authentication, and cart system developed in a team.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL'],
    github: 'https://github.com/SamikshaHarel/Ecommerce-Website-Using-SpringBoot',
    live: 'https://github.com/SamikshaHarel/Ecommerce-Website-Using-SpringBoot',
  },

  {
    id: 4,
    title: 'Language Translation Web App',
    description:
      'Web application that translates text between multiple languages using Google Translate API.',
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/SamikshaHarel',
    live: 'https://github.com/SamikshaHarel',
  },

  {
    id: 5,
    title: 'Task Management Chatbot',
    description:
      'AI-powered chatbot for task creation, reminders, and voice-based input with NLP support.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
    technologies: ['Python', 'Flask', 'NLP'],
    github: 'https://github.com/SamikshaHarel',
    live: 'https://github.com/SamikshaHarel',
  },
 {
  id: 6,
  title: 'Portfolio Website',
  description:
    'Personal developer portfolio showcasing projects, skills, and experience with a modern responsive UI and smooth animations.',
  image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
  technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  github: 'https://github.com/SamikshaHarel',
  live: '',
},
];

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="glow-orb w-80 h-80 bg-accent-teal/20 bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects I've built and contributed to
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="animate-on-scroll group glass-hover rounded-2xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />

                {/* Featured Badge */}
                {project.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary-500/90 text-white rounded-full">
                    Featured
                  </span>
                )}

                {/* Folder Icon */}
                <div className="absolute top-4 right-4 p-2 bg-dark-800/80 rounded-lg backdrop-blur-sm">
                  <Folder className="w-5 h-5 text-primary-400" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-dark-600 text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-dark-600 text-gray-400 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 animate-on-scroll">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            View more projects on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
