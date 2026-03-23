import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section relative flex flex-col items-center text-center justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <p className="text-primary font-mono mb-4 text-sm md:text-base">06. What's Next?</p>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white font-heading tracking-tight">
          Get In Touch
        </h2>
        
        <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-xl mx-auto">
          I'm currently looking for new opportunities as a Backend Developer. 
          Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:nirdesh2003n@gmail.com" 
          className="btn btn-primary btn-large text-lg font-bold tracking-wide shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
        >
          Say Hello <FaPaperPlane />
        </a>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-slate-400 font-mono">
          <a href="tel:+918306969010" className="flex items-center gap-3 hover:text-primary transition-colors group">
            <span className="w-10 h-10 rounded-full bg-slate-800 flex justify-center items-center group-hover:bg-primary/20 transition-colors border border-slate-700">
              <FaPhoneAlt className="text-primary" />
            </span>
            +91 8306969010
          </a>
          <a href="mailto:nirdesh2003n@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
            <span className="w-10 h-10 rounded-full bg-slate-800 flex justify-center items-center group-hover:bg-primary/20 transition-colors border border-slate-700">
              <FaEnvelope className="text-primary" />
            </span>
            nirdesh2003n@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
