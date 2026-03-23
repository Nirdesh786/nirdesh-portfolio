import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'FitForge – Fitness Challenge Tracker',
    description: 'Built a full-stack web application that enables users to set, monitor, and achieve long-term fitness goals. Implemented secure OAuth 2.0 user authentication, progress tracking logic, and built a scalable RESTful API to manage user data securely.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    role: 'Full Stack Developer',
    github: 'https://github.com/Nirdesh786',
    live: '#',
  },
  {
    id: 2,
    title: 'LinguaLink – Language Exchange',
    description: 'Developed a global language-learning platform featuring smart user matching, real-time chat/video capabilities, and learning progress tracking. Optimized database queries to enable seamless peer-to-peer language learning globally.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'WebRTC'],
    role: 'Backend Developer',
    github: 'https://github.com/Nirdesh786',
    live: '#',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl flex items-center gap-4">
          <span className="text-primary font-mono text-2xl font-normal">02.</span> 
          Featured Projects
        </h2>
        <div className="h-px bg-gradient-to-r from-slate-700 to-transparent w-full max-w-md mt-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 group flex flex-col h-full"
          >
            <div className="flex justify-between items-center mb-8">
              <FaFolderOpen className="text-5xl text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-xl text-slate-400 hover:text-primary transition-colors">
                  <FaGithub />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="text-xl text-slate-400 hover:text-primary transition-colors">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            <h3 className="text-2xl mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            
            <p className="text-primary text-sm font-mono mb-4 border border-primary/30 bg-primary/10 inline-block px-3 py-1 rounded-full w-max">
              Role: {project.role}
            </p>

            <p className="text-slate-300 leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-slate-400">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
