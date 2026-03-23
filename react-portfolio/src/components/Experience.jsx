import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    company: 'Vanillakart',
    role: 'Web Development Intern',
    duration: "Sep '25 - Nov '25",
    workDone: [
      'Successfully completed a 2-month internship gaining practical hands-on experience in MERN stack development and WordPress.',
      'Built and managed highly responsive client websites utilizing MongoDB, Express.js, React.js, and Node.js.',
      'Focused on full-stack web development best practices, responsive design optimization, and overall user experience enhancements.',
    ],
  },
  {
    id: 2,
    company: 'Cipher Schools',
    role: 'Data Structure and Algorithms using Java',
    duration: "Jun '25 - Jul '25",
    workDone: [
      'Completed an intensive training program on Data Structures and Algorithms using Java, gaining hands-on experience with arrays, linked lists, stacks, queues, trees, graphs, and hash tables.',
      'Designed and implemented classic algorithms including searching, sorting, recursion, dynamic programming, and graph traversal to solve real-world computational problems.',
      'Worked on practical mini-projects such as an event scheduling system and library management features, using custom data structures to enhance efficiency and modularity.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-slate-900/50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl flex items-center gap-4">
          <span className="text-primary font-mono text-xl md:text-2xl font-normal">03.</span> 
          Internships & Training
        </h2>
        <div className="h-px bg-gradient-to-r from-slate-700 to-transparent w-full max-w-md mt-6"></div>
      </motion.div>

      <div className="max-w-4xl border-l-[1.5px] border-slate-700 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[45px] md:-left-[60px] top-1 w-5 h-5 bg-slate-900 border-[3px] border-primary rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
            
            <div className="glass-card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl text-white font-heading font-semibold mb-1 flex items-center gap-3">
                    <FaBriefcase className="text-primary text-xl" />
                    {exp.role}
                  </h3>
                  <p className="text-lg text-slate-400 font-medium">{exp.company}</p>
                </div>
                <div className="text-primary font-mono text-sm border border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full w-max">
                  {exp.duration}
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
                {exp.workDone.map((work, i) => (
                  <li key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                    <span className="text-primary mt-1">▹</span>
                    {work}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
