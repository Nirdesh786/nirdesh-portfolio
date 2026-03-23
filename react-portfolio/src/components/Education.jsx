import { motion } from 'framer-motion';

const educationData = [
  {
    id: 1,
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 7.02",
    date: "Aug '23 - Present"
  },
  {
    id: 2,
    institution: "Arihant Public School",
    location: "Kota, Rajasthan",
    degree: "Intermediate",
    score: "Percentage: 93%",
    date: "Mar '21 - May '22"
  },
  {
    id: 3,
    institution: "Delhi Public School",
    location: "Etawah, Uttar Pradesh",
    degree: "Matriculation",
    score: "Percentage: 92.6%",
    date: "Mar '19 - May '20"
  }
];

const Education = () => {
  return (
    <section id="education" className="section bg-slate-900/50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl flex items-center gap-4">
          <span className="text-primary font-mono text-xl md:text-2xl font-normal">04.</span> 
          Education
        </h2>
        <div className="h-px bg-gradient-to-r from-slate-700 to-transparent w-full max-w-md mt-6"></div>
      </motion.div>

      <div className="max-w-5xl mx-auto w-full space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6 md:p-8 hover:bg-slate-800/60 transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-300">
                {edu.institution}
              </h3>
              <div className="text-xs md:text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full w-max mt-1 md:mt-0">
                {edu.date}
              </div>
            </div>
            
            <p className="text-sm md:text-base text-slate-400 mb-4">
              {edu.location}
            </p>
            
            <p className="text-base md:text-lg text-slate-200 font-medium mb-1">
              {edu.degree}
            </p>
            
            <p className="text-sm md:text-base text-slate-400">
              {edu.score}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
