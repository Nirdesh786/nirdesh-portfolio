import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaPuzzlePiece, FaBook, FaMusic } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section bg-slate-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">

        {/* Left Column - 4 spans */}
        <div className="lg:col-span-4 flex flex-col gap-6">

          {/* Quick Facts Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 border-slate-700/60 bg-slate-800/40"
          >
            <h3 className="text-xl text-white font-semibold mb-6">Quick Facts</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center text-lg shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Location</p>
                  <p className="text-sm text-slate-200 font-medium">Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-lg shrink-0">
                  <FaGraduationCap />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Education</p>
                  <p className="text-sm text-slate-200 font-medium">Pursuing B.Tech in CSE</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center text-lg shrink-0">
                  <FaBriefcase />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Experience</p>
                  <p className="text-sm text-slate-200 font-medium">Fresher / Intern</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* When I'm Not Coding Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 border-slate-700/60 bg-slate-800/40"
          >
            <h3 className="text-xl text-white font-semibold mb-6">When I'm Not Coding</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <FaPuzzlePiece className="text-cyan-400 text-xl" />
                <span className="text-sm text-slate-300 font-medium">Skill Development</span>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <FaBook className="text-green-400 text-xl" />
                <span className="text-sm text-slate-300 font-medium">Learning New Skills</span>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <FaMusic className="text-purple-400 text-xl" />
                <span className="text-sm text-slate-300 font-medium">Music</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Column - 8 spans */}
        <div className="lg:col-span-8 flex flex-col gap-6">

          {/* My Journey Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-slate-700/60 bg-slate-800/40 flex-grow"
          >
            <h3 className="text-2xl text-blue-400 font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
              <p>
                Hello! I'm <span className="font-semibold text-purple-400">Nirdesh Yadav</span>, an enthusiastic developer driven by a strong interest in turning complex challenges into efficient and impactful digital solutions.
              </p>
              <p>
                My journey in technology started with curiosity and gradually developed into a clear focus on full-stack and backend development. I work on building reliable, scalable, and user-focused applications using Java, C++, React, Node.js, and modern database systems.
              </p>
              <p>
                What motivates me is the blend of analytical thinking and creativity—achieving the right balance between optimized, efficient code and seamless user experience. I continuously improve my skills through practical projects, structured learning programs like CipherSchools DSA bootcamps, and by staying updated with evolving technologies.
              </p>
            </div>
          </motion.div>

          {/* My Approach Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 border-slate-700/60 bg-slate-800/40"
          >
            <h3 className="text-2xl text-blue-400 font-semibold mb-4">My Approach</h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              I focus on building technology that is not only functional but also impactful. Every piece of code I write is aimed at solving meaningful problems and improving user interaction. I believe in writing clean, maintainable code, working effectively in teams, and constantly learning to grow as a developer.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
