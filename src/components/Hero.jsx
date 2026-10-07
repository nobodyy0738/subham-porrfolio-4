import React from 'react';
import { ArrowRight, Mail, Sparkles, MapPin, GraduationCap, Code2, Bot, Cpu } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status & University Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 backdrop-blur-md shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 animate-gradient-x">
                {personalInfo.name}
              </span>
            </h1>

            {/* Role & Tagline */}
            <div className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-semibold text-indigo-400 mb-6">
              <Sparkles size={22} className="text-cyan-400 animate-pulse" />
              <h2>{personalInfo.tagline}</h2>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              {personalInfo.aboutMe}
            </p>

            {/* University & Location Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <GraduationCap size={16} className="text-indigo-400" />
                <span>{personalInfo.college} • B.Tech CSE</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <MapPin size={16} className="text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons: View Projects and Connect on LinkedIn */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:bg-slate-800 hover:text-white hover:border-cyan-500/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2.5 shadow-sm"
              >
                <LinkedinIcon size={18} className="text-cyan-400" />
                <span>Connect on LinkedIn</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-medium text-xs text-slate-400 hover:text-slate-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail size={14} className="text-indigo-400" />
                <span>Contact Details</span>
              </button>
            </div>
          </div>

          {/* Right Column: Modern Tech Graphic / Interactive Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative behind glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl transform rotate-3" />
              
              {/* Terminal / Code Window Mockup */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-xl shadow-2xl overflow-hidden p-6">
                {/* Header Dots */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/90"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/90"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code2 size={13} className="text-indigo-400" />
                    shubham@jecrc:~$
                  </span>
                </div>

                {/* Code / Profile snippet */}
                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                    <span className="text-cyan-400">const</span>
                    <span>developer</span>
                    <span className="text-slate-400">=</span>
                    <span className="text-slate-300">&#123;</span>
                  </div>
                  
                  <div className="pl-4 space-y-1 text-slate-300">
                    <p>
                      <span className="text-purple-400">name:</span>{' '}
                      <span className="text-emerald-400">"{personalInfo.name}"</span>,
                    </p>
                    <p>
                      <span className="text-purple-400">role:</span>{' '}
                      <span className="text-emerald-400">"B.Tech CSE Student"</span>,
                    </p>
                    <p>
                      <span className="text-purple-400">university:</span>{' '}
                      <span className="text-emerald-400">"{personalInfo.college}"</span>,
                    </p>
                    <p>
                      <span className="text-purple-400">location:</span>{' '}
                      <span className="text-emerald-400">"{personalInfo.location}"</span>,
                    </p>
                    <p>
                      <span className="text-purple-400">coreSkills:</span> [
                      <span className="text-amber-300">"C"</span>,{' '}
                      <span className="text-amber-300">"Python"</span>,{' '}
                      <span className="text-amber-300">"Web Dev"</span>,{' '}
                      <span className="text-amber-300">"AI Tools"</span>
                      ],
                    </p>
                    <p>
                      <span className="text-purple-400">status:</span>{' '}
                      <span className="text-cyan-300">"Learning & Building Projects"</span>
                    </p>
                  </div>

                  <div className="text-slate-300">&#125;;</div>
                </div>

                {/* Live Pill Cards */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-slate-800/80">
                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Bot size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Focus</div>
                      <div className="text-xs font-semibold text-slate-200">AI & Web Tech</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Cpu size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Pursuit</div>
                      <div className="text-xs font-semibold text-slate-200">B.Tech CSE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}