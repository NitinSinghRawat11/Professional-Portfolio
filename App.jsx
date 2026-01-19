import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  Palette, 
  Terminal, 
  Cpu, 
  GraduationCap, 
  Briefcase,
  Layers,
  ChevronRight,
  User
} from 'lucide-react';

// --- DATA FROM YOUR RESUME ---
const userData = {
  name: "Nitin Singh Rawat",
  title: "MCA Student & Full-Stack Developer",
  location: "Dehradun, India",
  email: "nitinsinghrawat8983@gmail.com",
  phone: "9520221151",
  summary: "Motivated MCA student with a strong foundation in computer applications, programming, graphic designing and software development. Passionate about building scalable applications and innovative solutions.",
  education: [
    {
      degree: "Master of Computer Application (MCA)",
      school: "Graphic Era Hill University",
      duration: "2024 - 2026",
      status: "Pursuing"
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      school: "Graphic Era Hill University",
      duration: "Completed Jul 2024",
      grade: "CGPA: 7.03/10.0"
    }
  ],
  experience: [
    {
    role: "Graphic Designing Intern",
    company: "Alpha Innovation",
    duration: "Sep 2025 - Nov 2025",
    description: [
      "Created high-quality visual assets for digital marketing campaigns.",
      "Collaborated with the creative team to design UI components.",
      "Mastered tools like Adobe Photoshop and Illustrator."
    ]
  },
    {
      role: "Web Development Intern",
      company: "Prodigy InfoTech",
      duration: "Nov 2025 - Dec 2025",
      description: [
        "Developed responsive front-end components using React.js and Tailwind CSS.",
        "Implemented interactive features and optimized website performance.",
        "Worked on bug fixes and cross-browser compatibility issues."
      ]
    }
  ],
  projects: [
    {
      title: "ThreatGuard",
      category: "Cyber Security",
      description: "AI-Powered URL and Content Threat Detection System for preventing malicious file downloads and phishing scams.",
      tags: ["Python", "HTML", "CSS", "JS"],
      icon: <Cpu className="w-6 h-6" />,
      github: "https://github.com/NitinSinghRawat11/ThreatGuard", // INSERT YOUR GITHUB LINK HERE
      live: "https://threatguard-demo.vercel.app"
    },
    {
      title: "Hotel Website",
      category: "Web App",
      description: "Full-scale hospitality platform for room bookings and nature sightseeing availability tracking.",
      tags: ["ReactJS", "UI/UX", "Deployment"],
      icon: <ExternalLink className="w-6 h-6" />,
      github: "https://github.com/NitinSinghRawat11/Hotel-Website",
      live: "https://balram-guest-house.web.app"
    },
    {
      title: "Money-Matrix",
      category: "System Design",
      description: "A C-based Banking Management System utilizing complex data structures and file handling for secure transactions.",
      tags: ["C", "Data Structures", "File Handling"],
      icon: <Terminal className="w-6 h-6" />,
      github: "https://github.com/NitinSinghRawat11/Banking_Management_System.git",
      live: "https://money-matrix-demo.vercel.app"
    },
    {
      title: "Bits & Bytes",
      category: "Web App",
      description: "Dynamic restaurant website featuring an integrated floating AI chatbot for enhanced user interaction.",
      tags: ["ReactJS", "AI Integration", "Tailwind"],
      icon: <Layers className="w-6 h-6" />,
      github: "https://github.com/NitinSinghRawat11/Monal-Fast-Food.git",
      live: "https://bits-and-bytes-demo.vercel.app"
    },
    
  ],
  skills: {
    technical: ["C", "Java", "Python", "HTML/CSS", "JavaScript", "ReactJS", "Data Structures"],
    creative: ["Graphic Designing", "Video Editing", "Power of Expression"],
    videoDrive: "https://drive.google.com/drive/folders/1N2Tf1OaLkb_FkeVqHOvMiMobWKpx1FHG", // PASTE YOUR DRIVE LINK HERE
    soft: ["Problem-solving", "Leadership", "Team Collaboration", "Communication", "Time Management"]
  },
  socials: {
    linkedin: "https://linkedin.com/in/nitin-singh-rawat-6b4a43398",
    github: "https://github.com/NitinSinghRawat11",
    instagram: "https://www.instagram.com/_himalayan_stories?igsh=dGU1dmJjNDA4d3dw"
  }
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  // Add this near your existing 'scrolled' state
const [activeTab, setActiveTab] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
   };
    const handleOpenResume = () => {
    // This points to the file in your 'public' folder
    const resumeUrl = "Nitin Singh Rawat.pdf"; 
    
    // This opens the PDF in a new browser tab
    window.open(resumeUrl, "_blank", "noreferrer");
  };
  

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      {/* Animated Live Background */}
<div className="fixed inset-0 z-0 overflow-hidden bg-slate-950 pointer-events-none">
  {/* Blob 1 - Blue */}
  <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full animate-blob"></div>
  
  {/* Blob 2 - Cyan */}
  <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full animate-blob animation-delay-2000"></div>
  
  {/* Blob 3 - Indigo/Purple */}
  <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/15 blur-[120px] rounded-full animate-blob animation-delay-4000"></div>
  
  {/* Subtle Grid Overlay for a Technical Look */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  
  {/* Radial Mask to fade edges */}
  <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/50 to-slate-950"></div>
</div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollTo('home')}>
            NSR.
          </div>
          <div className="hidden md:flex gap-8 items-center">
            {['About','Experience', 'Projects', 'Skills','Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-slate-400'}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={handleOpenResume}
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-lg shadow-blue-900/20"
            >
             Resume
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
                Available for Jobs
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                Designing <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">The Future</span> <br />
                of Digital.
              </h1>
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                Hi, I'm <span className="text-white font-medium">{userData.name}</span>. 
                I combine the logic of a developer with the eye of a designer to build seamless digital experiences.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <button 
                  onClick={() => scrollTo('projects')}
                  className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all flex items-center gap-2 group"
                >
                  View My Work <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex gap-3">
                  <a href="https://linkedin.com/in/nitin-singh-rawat-6b4a43398" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-400 hover:text-blue-400 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/NitinSinghRawat11" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-white text-slate-400 hover:text-white transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 w-full aspect-square max-w-md mx-auto bg-slate-900 rounded-[2.5rem] border border-slate-800 overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="w-full h-full flex items-center justify-center">
  {/* Replace the User icon with your actual image */}
              <img 
               src="/xyz.jpg" 
               alt="Nitin Singh Rawat" 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
  {/* If you want to keep the text overlay, you can remove it or keep it below */}
              {/* Fixed Name Overlay: Higher position, two lines, and brighter color */}
  <div className="absolute bottom-14 left-0 w-full text-center pointer-events-none">
    <p className="text-white/90 text-[11px] font-medium uppercase tracking-[0.3em] leading-relaxed drop-shadow-2xl">
      Nitin Singh <br /> Rawat
    </p>
  </div>
               </div>
              </div>
              {/* Floating Info Badge - FIXED POSITION AND Z-INDEX */}
              <div className="absolute -bottom-6 -left-2 md:-left-8 z-20 p-5 md:p-6 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform group-hover:-translate-y-2">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                    <Code className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">MCA Candidate</div>
                    <div className="text-[10px] md:text-xs text-slate-500 font-medium">Graphic Era Hill University</div>
                  </div>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-blue-500/20 rounded-tr-[3rem] pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm">01. Discovery</h2>
                  <h3 className="text-4xl font-bold text-white">About Me</h3>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {userData.summary}
                </p>
                <div className="space-y-6 pt-4">
                  <h4 className="text-xl font-bold text-white flex items-center gap-3">
                    <GraduationCap className="text-blue-500" /> Education
                  </h4>
                  {userData.education.map((edu, idx) => (
                    <div key={idx} className="relative pl-8 border-l-2 border-slate-800">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500"></div>
                      <div className="text-sm text-blue-400 font-bold mb-1">{edu.duration}</div>
                      <h5 className="text-white font-bold">{edu.degree}</h5>
                      <p className="text-slate-500 text-sm">{edu.school}</p>
                      {edu.grade && <p className="text-blue-500/80 text-xs font-bold mt-1">{edu.grade}</p>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square rounded-3xl bg-slate-900/50 border border-slate-800 p-8 flex flex-col justify-end hover:border-blue-500/50 transition-all">
                  <div className="text-4xl font-bold text-blue-500 mb-2">2+</div>
                  <div className="text-slate-400 font-medium">Industry Internships</div>
                </div>
                <div className="aspect-square rounded-3xl bg-slate-900/50 border border-slate-800 p-8 flex flex-col justify-end hover:border-cyan-500/50 transition-all">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
                  <div className="text-slate-400 font-medium">Core Projects</div>
                </div>
                <div className="col-span-2 p-8 rounded-3xl bg-gradient-to-br from-blue-600/10 to-transparent border border-slate-800">
                   <h4 className="text-white font-bold mb-4">Core Philosophy</h4>
                   <p className="text-slate-400 text-sm leading-relaxed">
                     I believe that great software is not just about writing clean code, but about creating an experience that resonates with the end-user through intuitive design and performance.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Experience Section */}
        <section id="experience" className="py-32 bg-slate-950/50">
  <div className="max-w-4xl mx-auto px-6">
    <div className="flex items-center gap-4 mb-16">
      <h2 className="text-3xl font-bold text-white whitespace-nowrap"><span className="text-blue-500 font-mono text-xl mr-2">02.</span> Experience</h2>
      <div className="h-px w-full bg-slate-800"></div>
    </div>

    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar Tabs */}
      <div className="flex md:flex-col overflow-x-auto border-b md:border-b-0 md:border-l border-slate-800 min-w-[160px]">
        {userData.experience.map((exp, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-4 text-left text-sm font-medium transition-all border-b-2 md:border-b-0 md:border-l-2 -ml-px ${
              activeTab === index 
                ? 'text-blue-400 border-blue-400 bg-blue-400/5' 
                : 'text-slate-500 border-transparent hover:text-blue-400 hover:bg-slate-900'
            }`}
          >
            {exp.company}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 py-2 md:px-6">
        <h3 className="text-xl font-bold text-slate-100">
          {userData.experience[activeTab].role} <span className="text-blue-400">@ {userData.experience[activeTab].company}</span>
        </h3>
        <p className="text-sm font-mono text-slate-500 mb-6">{userData.experience[activeTab].duration}</p>
        
        <ul className="space-y-4">
          {userData.experience[activeTab].description.map((item, i) => (
            <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
              <ChevronRight className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

 {/* Projects Section */}
        <section id="projects" className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-end mb-20">
              <div className="space-y-4">
                <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm">03. Portfolio</h2>
                <h3 className="text-4xl font-bold text-white">Featured Projects</h3>
              </div>
              <button className="hidden md:block text-slate-500 hover:text-white transition-colors text-sm font-bold border-b border-slate-800 pb-1">View All Projects</button>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {userData.projects.map((proj, idx) => (
                <div key={idx} className="group relative bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 hover:border-blue-500 transition-all">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 rounded-2xl bg-slate-950 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {proj.icon}
                    </div>
                   {/* UPDATED: Functional Links */}
                    <div className="flex gap-4">
                      {proj.github && (
                        <a 
                          href={proj.github} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-slate-500 hover:text-white transition-colors"
                          title="View Source on GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {proj.live && (
                        <a 
                          href={proj.live} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-slate-500 hover:text-blue-400 transition-colors"
                          title="View Deployed Project"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">{proj.category}</div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{proj.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 rounded bg-slate-950 text-[10px] font-bold text-slate-500 border border-slate-800 uppercase tracking-tighter">#{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* NEW: More Projects / LinkedIn Link */}
            <div className="mt-20 flex flex-col items-center gap-6">
              <div className="h-px w-24 bg-slate-800"></div>
              <p className="text-slate-400 text-sm font-medium tracking-wide">
                For more projects, visit my GitHub profile
              </p>
              <a 
                href={userData.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                className="group flex flex-col items-center gap-3 transition-all hover:scale-110"
              >
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-500 group-hover:border-blue-500 group-hover:text-blue-500 transition-all shadow-xl shadow-blue-500/5">
                  <Github className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                  View GitHub Profile
                </span>
              </a>
            </div>
          </div>
        </section>


        {/* Skills Section */}
        <section id="skills" className="py-32 bg-slate-900/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm">04. Expertise</h2>
              <h3 className="text-4xl font-bold text-white">Skills & Tools</h3>
              <p className="text-slate-500">My technical toolkit is balanced between robust backend logic and elegant frontend presentation.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-10 rounded-[2rem] bg-slate-950 border border-slate-800 hover:border-blue-500/30 transition-all">
                <Terminal className="w-12 h-12 text-blue-500 mb-8" />
                <h4 className="text-xl font-bold text-white mb-6">Development</h4>
                <div className="flex flex-wrap gap-2">
                  {userData.skills.technical.map(s => (
                    <span key={s} className="px-3 py-1.5 rounded-lg bg-blue-500/5 border border-blue-500/10 text-blue-400 text-xs font-bold uppercase">{s}</span>
                  ))}
                </div>
              </div>
              <div className="p-10 rounded-[2rem] bg-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col h-full group">
                <Palette className="w-12 h-12 text-cyan-500 mb-8" />
                <h4 className="text-xl font-bold text-white mb-6">Creative</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {userData.skills.creative.map(s => (
                    <span key={s} className="px-3 py-1.5 rounded-lg bg-cyan-500/5 border border-cyan-500/10 text-cyan-400 text-xs font-bold uppercase">{s}</span>
                  ))}
                </div>
                
                {/* Google Drive Link Button */}
                <div className="mt-auto pt-4">
                  <a 
                    href={userData.skills.videoDrive} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-500 hover:text-cyan-300 transition-colors tracking-widest"
                  >
                    VIEW MY VIDEO EDITING WORK!
                    <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              <div className="p-10 rounded-[2rem] bg-slate-950 border border-slate-800 hover:border-emerald-500/30 transition-all">
                <Briefcase className="w-12 h-12 text-emerald-500 mb-8" />
                <h4 className="text-xl font-bold text-white mb-6">Professional</h4>
                <div className="flex flex-wrap gap-2">
                  {userData.skills.soft.map(s => (
                    <span key={s} className="px-3 py-1.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-xs font-bold uppercase">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

       
       

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">05. Connect</h2>
                <h3 className="text-5xl font-bold text-white mb-8">Let's build something <span className="text-blue-600 underline underline-offset-8">great.</span></h3>
                <p className="text-slate-400 text-lg mb-10">
                  I'm currently looking for new opportunities. Whether you have a question or just want to connect, my inbox is always open.
                </p>
                <div className="space-y-6">
                  <a href={`mailto:${userData.email}`} className="flex items-center gap-5 group cursor-pointer transition-transform hover:scale-105">
                    <div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                     <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-slate-300 font-medium group-hover:text-blue-400 transition-colors">{userData.email}</span>
                  </a>
                  <div className="flex items-center gap-5 group">
                    <div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-slate-300 font-medium">+91 {userData.phone}</span>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-slate-300 font-medium">{userData.location}</span>
                  </div>
                </div>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl">
                <form 
                 className="space-y-6" 
                 action={`mailto:${userData.email}`} 
                 method="post" 
                 enctype="text/plain"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Your Name</label>
                      <input 
                        name="Name"
                        type="text" 
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Email</label>
                      <input 
                       name="Email"
                       type="email" 
                       required
                       className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Message</label>
                   <textarea 
                    name="Message"
                    rows="4" 
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all resize-none"
                  ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-xl shadow-blue-900/20"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

     {/* Updated Footer with Visibility Fix */}
<footer className="relative z-10 py-20 border-t border-slate-900/50 text-center bg-slate-950/50 backdrop-blur-sm">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex justify-center gap-8 mb-10">
      <a href={userData.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors">
        <Linkedin className="w-6 h-6" />
      </a>
      <a href={userData.socials.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
        <Github className="w-6 h-6" />
      </a>
      <a href={userData.socials.instagram} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-pink-500 transition-colors">
        <Instagram className="w-6 h-6" />
      </a>
    </div>
    <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
      Handcrafted by <span className="text-blue-400">{userData.name}</span> 2026
    </p>
  </div>
</footer>
    </div>
  );
};

export default App;