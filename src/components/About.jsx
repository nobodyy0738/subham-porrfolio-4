import React, { useState } from 'react';
import { Bot, Code2, Zap, Target, MapPin, GraduationCap, Mail, ExternalLink, FileText, CheckCircle2, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const pillars = [
    {
      icon: Bot,
      color: "from-indigo-500 to-cyan-500",
      bgColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      title: "AI Tools & Exploration",
      description: "Exploring artificial intelligence, modern AI tools, and prompt engineering to build smarter workflows and practical solutions."
    },
    {
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      title: "Web Development",
      description: "Learning modern frontend technologies including HTML, CSS, JavaScript, and responsive UI design to build clean web applications."
    },
    {
      icon: Zap,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      title: "Digital Productivity",
      description: "Leveraging digital productivity systems, developer tools, and structured workflows to maximize focus and learning velocity."
    },
    {
      icon: Target,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      title: "Practical Projects & Problem Solving",
      description: "Practicing problem-solving in C and Python, strengthening algorithmic thinking, and building tangible software projects."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            B.Tech CSE student at JECRC University with a focus on modern software development and AI.
          </p>
        </div>

        {/* Top Split: Bio & Fast Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Main Narrative Card: Features the Exact About Me text */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-sm">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono font-medium mb-4">
                <span>Who I Am</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 leading-snug">
                Building practical projects and learning modern technologies.
              </h3>
              
              {/* Highlighted exact About Me quote */}
              <div className="p-5 rounded-2xl bg-slate-800/50 border-l-4 border-cyan-400 border border-slate-700/60 shadow-inner mb-6">
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                  "{personalInfo.aboutMe}"
                </p>
              </div>

              <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
                <p>
                  As an engineering student at <span className="text-slate-200 font-semibold">JECRC University, Jaipur</span>, I am developing strong foundations in core computing, from structured programming in C and Python to modern web development with HTML, CSS, and JavaScript.
                </p>
                <p>
                  I enjoy staying updated with evolving AI tools and productivity ecosystems, turning academic concepts into practical, working software.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink size={13} />
              </a>

              <button
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all hover:scale-105 active:scale-95"
              >
                <FileText size={14} className="text-cyan-400" />
                <span>View Student Profile Summary</span>
              </button>
            </div>
          </div>

          {/* Quick Details & Stats Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Quick Details Box */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 p-6 backdrop-blur-sm">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Student Details
              </h4>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <GraduationCap size={16} className="text-indigo-400" /> Role & Program
                  </span>
                  <span className="font-semibold text-white">B.Tech CSE Student</span>
                </li>
                <li className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <GraduationCap size={16} className="text-cyan-400" /> University
                  </span>
                  <span className="font-semibold text-white">JECRC University</span>
                </li>
                <li className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin size={16} className="text-rose-400" /> Location
                  </span>
                  <span className="font-semibold text-white">{personalInfo.location}</span>
                </li>
                <li className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Mail size={16} className="text-amber-400" /> Email
                  </span>
                  <span className="font-medium text-slate-200 text-xs sm:text-sm truncate max-w-[190px]">
                    {personalInfo.email}
                  </span>
                </li>
              </ul>
            </div>

            {/* Growth & Learning Mindset Box */}
            <div className="rounded-2xl bg-indigo-950/20 border border-indigo-500/20 p-5 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">Continuous Growth & Practice</h5>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Focused on hands-on project creation, coding fundamentals, and practical skill development.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-5 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 group"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${pillar.bgColor}`}>
                  <IconComponent size={22} />
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      {/* Quick Profile / Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setShowResumeModal(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-cyan-400 flex items-center justify-center font-bold text-lg border border-indigo-500/30">
                SM
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-xs text-indigo-400 font-medium">{personalInfo.role} • {personalInfo.college}</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Academic Education</span>
                <p className="font-semibold text-white">Bachelor of Technology (B.Tech) - Computer Science & Engineering</p>
                <p className="text-xs text-slate-300">JECRC University • Jaipur, India (Currently Pursuing)</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Key Technical Skills</span>
                <p className="text-xs text-slate-300">
                  C, Python, HTML, CSS, JavaScript, Web Development, AI Tools, Problem Solving.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Contact & Verification</span>
                <p className="text-xs text-slate-300">Email: {personalInfo.email}</p>
                <p className="text-xs text-slate-300">Location: {personalInfo.location}</p>
                <p className="text-xs text-slate-300">LinkedIn: {personalInfo.linkedin}</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                Close
              </button>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
