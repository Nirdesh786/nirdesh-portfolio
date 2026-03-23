import { motion } from 'framer-motion';

const skillsPills = ['Java', 'Python', 'React', 'JavaScript', 'Node.js', 'MongoDB', 'CSS'];

const Hero = () => {
  return (
    <section id="home" className="section flex flex-col items-center text-center justify-center min-h-screen pt-24 pb-12 relative overflow-hidden">

      {/* Background glow similar to the image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
          <img
            src="/nirdesh_photo.jpg"
            alt="Nirdesh"
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover object-[center_20%] border-4 border-slate-900 shadow-2xl"
          />
        </div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold font-heading mb-4 tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent pb-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nirdesh Yadav
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-slate-300 font-medium mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer <span className="text-primary animate-pulse font-mono">|</span>
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Welcome to my portfolio, where I turn ideas into structured, efficient, and real-world applications through code.
        </motion.p>

        <motion.div
          className="flex justify-center flex-wrap gap-3 mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {skillsPills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(79,70,229,0.3)] transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg bg-transparent border border-slate-600 text-slate-300 font-medium hover:border-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
