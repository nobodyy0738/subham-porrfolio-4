import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  BookOpen, 
  Medal, 
  Users, 
  Calendar, 
  CheckCircle, 
  PlusCircle, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { achievementsData, achievementCategories } from '../data/portfolioData';

const achievementIconMap = {
  Award,
  Sparkles,
  BookOpen,
  Trophy,
  Medal,
  Users,
  GraduationCap
};

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredAchievements = activeCategory === 'All'
    ? achievementsData
    : achievementsData.filter(item => item.category === activeCategory);

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <Trophy size={14} />
            <span>ROADMAP & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-blue-400">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            A dedicated section prepared for upcoming certifications, hackathons, coding competitions, and academic milestones during B.Tech CSE.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {achievementCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredAchievements.map((item, index) => {
            const Icon = achievementIconMap[item.icon] || Trophy;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/5 backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-medium">
                    <span>{item.issuer}</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Calendar size={12} className="text-cyan-400" />
                      {item.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                    <CheckCircle size={13} />
                    Ready for Milestone Entry
                  </span>
                  <span className="text-slate-400">{item.category}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Extensibility / How to Add Box */}
        <div className="mt-14 rounded-2xl bg-slate-900/40 border border-dashed border-slate-700/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
              <PlusCircle size={22} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Ready to Log Future Achievements?
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Keep this section ready! As you earn certificates, attend hackathons, or win competitions, add entries anytime in <code className="text-indigo-300 bg-slate-800 px-1.5 py-0.5 rounded text-[11px]">src/data/portfolioData.js</code>.
              </div>
            </div>
          </div>

          <a
            href={`mailto:shubhammurari85@gmail.com?subject=Portfolio%20Achievement%20Inquiry`}
            className="shrink-0 text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
          >
            Connect with Shubham
          </a>
        </div>

      </div>
    </section>
  );
}
