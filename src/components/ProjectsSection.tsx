import React, { useState } from 'react';
import { ExternalLink, Github, FolderGit2, CheckCircle2, Link as LinkIcon, Sparkles } from 'lucide-react';
import { PROJECTS_LIST } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [copiedLinkNotice, setCopiedLinkNotice] = useState<string | null>(null);

  const handleLinkClick = (title: string, url?: string) => {
    if (url && url.trim() !== '' && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setCopiedLinkNotice(`Project link for "${title}" will be updated soon.`);
      setTimeout(() => setCopiedLinkNotice(null), 3000);
    }
  };

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            <span>Portfolio Work</span>
            <span>•</span>
            <span className="text-zinc-700 font-semibold">Practical Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-zinc-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-3xl">
            Hands-on data analysis projects applying Python, SQL, Pandas, NumPy, and visualization libraries (Matplotlib & Seaborn) to clean raw records and extract meaningful insights.
          </p>
        </div>

        {copiedLinkNotice && (
          <div className="mb-6 p-3 rounded-lg bg-zinc-100 border border-zinc-300 text-xs font-mono text-zinc-800 flex items-center gap-2 transition-all">
            <LinkIcon className="w-4 h-4 text-zinc-600 shrink-0" />
            <span>{copiedLinkNotice}</span>
          </div>
        )}

        {/* Projects Cards List */}
        <div className="space-y-6">
          {PROJECTS_LIST.map((project, idx) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-xl bg-white border border-zinc-200/90 hover:border-zinc-300 transition-all shadow-2xs flex flex-col justify-between group"
            >
              <div>
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-zinc-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-800 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-zinc-500">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Link button */}
                  <button
                    onClick={() => handleLinkClick(project.title, project.linkUrl)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-700 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 transition-colors self-start sm:self-auto cursor-pointer"
                    title="Project repository or demo link"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{project.linkText || 'Project Link'}</span>
                    <span className="text-[10px] text-zinc-400 font-mono">(Link soon)</span>
                  </button>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  {project.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-zinc-400 mr-1.5 uppercase">
                  Tech Stack:
                </span>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-zinc-100/80 text-zinc-700 border border-zinc-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
