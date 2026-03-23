import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';

const achievementsData = [
  {
    id: 1,
    title: 'Smart India Hackathon 2025',
    date: 'June 2025',
    desc: 'Selected and participated in the Prototype Round of the national-level Smart India Hackathon 2025.',
    icon: <FaTrophy className="text-amber-500 text-xl" />,
  },
  {
    id: 2,
    title: 'HackerRank Silver Badge',
    date: 'May 2024',
    desc: 'Earned Silver Badge in C++, Java and Python on HackerRank for problem-solving and coding proficiency.',
    icon: <SiHackerrank className="text-green-500 text-xl" />,
  },
  {
    id: 3,
    title: '150+ Question Solved on LeetCode',
    date: 'Consistent',
    desc: 'Sharpened algorithmic thinking and optimized problem solving strategies by tackling over 150 diverse challenges on LeetCode.',
    icon: <SiLeetcode className="text-yellow-500 text-xl" />,
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section bg-slate-900 min-h-screen py-24">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 bg-slate-800/40 border border-slate-700/60 rounded-2xl hover:bg-slate-800/60 transition-colors"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-slate-700/50 border border-slate-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 w-full relative">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-blue-100">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full w-max mt-1 md:mt-0 md:absolute md:right-0 md:-top-1">
                    {item.date}
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
