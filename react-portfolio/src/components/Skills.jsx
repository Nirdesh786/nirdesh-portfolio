import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const skillsData = [
  {
    category: 'Languages',
    icon: <FaCode />,
    items: ['Java', 'Python', 'C++', 'C', 'JavaScript'],
  },
  {
    category: 'Backend',
    icon: <FaServer />,
    items: ['Node.js', 'Express', 'Laravel', 'PHP'],
  },
  {
    category: 'Database',
    icon: <FaDatabase />,
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Tools & Platforms',
    icon: <FaTools />,
    items: ['Git', 'GitHub', 'Docker', 'XAMPP', 'Tailwind CSS'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section bg-slate-900/50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl flex items-center gap-4">
          <span className="text-primary font-mono text-2xl font-normal">01.</span> 
          Skills & Expertise
        </h2>
        <div className="h-px bg-gradient-to-r from-slate-700 to-transparent w-full max-w-md mt-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
              {skillGroup.icon}
            </div>
            <h3 className="text-xl mb-6">{skillGroup.category}</h3>
            
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item) => (
                <span 
                  key={item} 
                  className="px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-sm font-medium text-slate-300 hover:border-primary hover:text-white transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
