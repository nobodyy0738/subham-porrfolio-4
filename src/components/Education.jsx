import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <GraduationCap size={14} />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Education</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Building strong theoretical principles and practical software engineering capabilities.
          </p>
        </div>

        {/* Education Timeline / Showcase */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl bg-slate-900/70 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-md overflow-hidden group hover:border-slate-700 transition-all duration-300"
            >
              {/* Decorative top gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
                    <Award size={13} />
                    <span>{item.badge}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    {item.degree}
                  </h3>
                  <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mt-1">
                    {item.institution}
                  </div>
                </div>

                {/* Timeline & Location Badges */}
                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2.5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200">
                    <Calendar size={14} className="text-indigo-400" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-300">
                    <MapPin size={14} className="text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {item.description}
              </p>

              {/* Highlights & Key Learnings */}
              <div className="border-t border-slate-800/80 pt-6">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-4 flex items-center gap-2">
                  <BookOpen size={15} className="text-cyan-400" />
                  Key Academic Highlights & Coursework Focus
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {item.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* University Environment Feature Bar */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Active Student Status</span>
                </div>
                <div>Focus: Computer Science & Engineering • Web Development • AI Tools</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
