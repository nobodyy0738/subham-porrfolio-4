import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Bot, 
  Globe, 
  Timer, 
  Terminal,
  Sparkles, 
  X, 
  Check, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

// Map icon
const projectIconMap = {
  Globe,
  Bot,
  Timer,
  Terminal
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <FolderGit2 size={14} />
            <span>PRACTICAL IMPLEMENTATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Practical web and AI projects crafted with clean architecture and modern user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const IconComponent = projectIconMap[project.iconName] || Globe;
            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-slate-900/70 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 backdrop-blur-md"
              >
                {/* Ambient Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient} rounded-3xl opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10">
                  {/* Top Badges & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-indigo-400 group-hover:text-cyan-400 group-hover:scale-105 transition-all shadow-md">
                      <IconComponent size={24} />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${project.statusBadgeColor || "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"}`}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Technologies Used */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-slate-400 mb-2.5 flex items-center gap-1.5">
                      <Layers size={13} className="text-indigo-400" />
                      <span>Technologies Used:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 text-[11px] font-medium border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="relative z-10 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all"
                    title="View GitHub Repository"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Project Section Helper Note */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <span>Practical project slots configured cleanly to showcase active builds and future GitHub repositories.</span>
        </div>

      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="pr-10 mb-6">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-indigo-400 mt-1 font-semibold">
                Status: {selectedProject.badge}
              </p>
            </div>

            {/* Full Description */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
                Project Overview
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedProject.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                Key Features & Architecture
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                Technologies & Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 text-indigo-300 text-xs font-semibold border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-5 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                Close
              </button>
              
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <GithubIcon size={15} />
                <span>Source Code</span>
              </a>

              <button
                onClick={() => {
                  if (selectedProject.id === 'personal-portfolio') {
                    setSelectedProject(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    alert('This practical project slot is currently in active development as part of B.Tech CSE coursework. Source code and live demo will be linked upon release!');
                  }
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 text-white flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>{selectedProject.id === 'personal-portfolio' ? 'Explore Live Site' : 'Project Status'}</span>
                <ExternalLink size={14} />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}