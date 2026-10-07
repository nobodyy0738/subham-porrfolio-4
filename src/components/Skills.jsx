import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode2, 
  Terminal, 
  BrainCircuit, 
  Sparkles, 
  Layout, 
  Zap, 
  CheckCircle2, 
  Layers,
  Code,
  Cpu
} from 'lucide-react';
import { skillsData, skillCategories } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Code2,
  Palette,
  FileCode2,
  Terminal,
  BrainCircuit,
  Sparkles,
  Layout,
  Zap,
  Code,
  Cpu
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Layers size={14} />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">Skills & Tech Stack</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Core technologies and digital systems I leverage to build modern software and explore AI.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = iconMap[skill.icon] || Code2;
            return (
              <div
                key={skill.id}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/90 p-6 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 backdrop-blur-sm flex flex-col justify-between"
              >
                {/* Top Skill Card Info */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} p-[2px] transition-transform duration-300 group-hover:scale-110 shadow-md`}>
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                        <Icon size={22} className="text-white" />
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800/80 text-indigo-300 border border-slate-700/60">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </h3>
                  
                  <span className="text-xs text-cyan-400 font-medium block mb-3">
                    {skill.category}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Proficiency Visual Bar */}
                <div className="pt-3 border-t border-slate-800/60">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-400 font-medium">Familiarity</span>
                    <span className="text-indigo-400 font-bold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 group-hover:opacity-100 opacity-90`}
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Skill Highlight Summary Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Always Learning & Practicing</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Continuously strengthening core programming in C and Python, modern web frameworks, and leveraging AI tools for development.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="shrink-0 text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 transition-all hover:scale-105 active:scale-95"
          >
            See Practical Projects ↓
          </a>
        </div>

      </div>
    </section>
  );
}
