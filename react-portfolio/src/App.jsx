import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen font-sans text-slate-300">
      {/* Dynamic Background Noise/Gradient */}
      <div className="fixed inset-0 z-0 bg-slate-900">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[150px] pointer-events-none mix-blend-screen" style={{animation: 'pulse 8s infinite alternate'}}></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
        
        <footer className="py-8 text-center text-slate-500 font-mono text-sm border-t border-slate-800">
          <p>
            Built with React &amp; Tailwind CSS <br/>
            &copy; {new Date().getFullYear()} Nirdesh. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
