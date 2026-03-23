import { motion } from 'framer-motion';

const certData = [
  {
    id: 1,
    title: 'Data Structure and Algorithm using Java',
    provider: 'CipherSchools',
    date: 'June 2025',
    desc: 'Comprehensive training on implementing robust data structures and algorithms using Java to build optimized solutions.',
    image: '/Nirdesh_DSA_Thumb.png',
    link: '/Nirdesh_DSA_Certificate.pdf'
  },
  {
    id: 2,
    title: 'Cloud Computing',
    provider: 'NPTEL',
    date: 'April 2025',
    desc: 'An intensive course focusing on cloud computing fundamentals, essential services, deployment models, and best practices.',
    image: '/Cloud_Computing_Thumb.png',
    link: '/Cloud_Computing_Certificate.pdf'
  },
  {
    id: 3,
    title: 'Responsive Web Design',
    provider: 'freeCodeCamp',
    date: 'May 2023',
    desc: 'Development fundamentals covering semantic HTML, modern CSS techniques, flexbox, grid layouts, and mobile-first design.',
    image: '/Nirdesh_FCC_Thumb.png',
    link: '/Nirdesh_FCC_Certificate.pdf'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section bg-slate-900/50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <p className="text-slate-400 max-w-2xl text-center">
            Professional credentials that validate my technical expertise and continuous learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certData.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target={cert.link !== '#' ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-800/40 border border-slate-700/60 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              {/* Certificate Image Placeholder */}
              <div className="h-48 w-full bg-slate-700 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {cert.provider}
                </div>
                {/* Fallback pattern if no actual cert image. Using a generic dev splash. */}
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Content Box */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-blue-400 mb-3 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-300 mb-6 flex-1 line-clamp-3">
                  {cert.desc}
                </p>
                
                <div className="flex justify-between items-center text-sm text-slate-400 font-medium">
                  <span>{cert.provider}</span>
                  <span className="text-blue-300">{cert.date}</span>
                </div>
              </div>

              {/* Hover Footer */}
              <div className="border-t border-slate-700/50 py-3 text-center text-xs text-slate-500 group-hover:bg-slate-800 transition-colors">
                Hover to view details
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
