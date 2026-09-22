import React, { useState } from 'react';
import { Terminal, Database, Wrench, BarChart2, Layers, CheckCircle } from 'lucide-react';
import { SKILLS, CORE_COMPETENCIES } from '../data/portfolioData';
import { SkillItem } from '../types';

type CategoryFilter = 'All' | 'Languages' | 'Libraries' | 'Databases' | 'Tools' | 'Methodologies';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS[0]);

  const categories: CategoryFilter[] = ['All', 'Languages', 'Libraries', 'Databases', 'Tools', 'Methodologies'];

  const filteredSkills = activeCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            <span>Technical Foundation</span>
            <span>•</span>
            <span className="text-zinc-700 font-semibold">Practical Application</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-zinc-900 tracking-tight">
            Skills & Hands-on Toolkit
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-3xl">
            Click any skill below to see its exact practical application across coursework, projects, and certifications.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-zinc-900 text-white shadow-2xs font-semibold'
                  : 'bg-white text-zinc-600 hover:bg-zinc-50 border border-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Skill Pills */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill.name === skill.name;
              return (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-3 rounded-xl text-left transition-all border ${
                    isSelected
                      ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                      : 'bg-white text-zinc-800 hover:bg-zinc-50 border-zinc-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-xs sm:text-sm">{skill.name}</span>
                    {skill.tag && (
                      <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                        isSelected 
                          ? 'bg-zinc-800 text-zinc-300' 
                          : 'bg-zinc-100 text-zinc-600'
                      }`}>
                        {skill.tag}
                      </span>
                    )}
                  </div>
                  <div className={`text-[11px] font-mono mt-1 ${isSelected ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {skill.level}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Skill Practical Context Card */}
          <div className="p-5 rounded-xl bg-white border border-zinc-200 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                Skill Detail & Context
              </div>
              <h3 className="text-lg font-serif font-bold text-zinc-900 mt-1">
                {selectedSkill.name}
              </h3>
              <div className="inline-block mt-1 px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 text-zinc-700">
                Category: {selectedSkill.category} • {selectedSkill.level}
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-100">
                <div className="text-xs font-semibold text-zinc-700 mb-1">
                  How Amit applies this:
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {selectedSkill.context}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 text-[11px] text-zinc-400 font-mono flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Tested through hands-on code & coursework</span>
            </div>
          </div>
        </div>

        {/* Core Competencies (Soft/Analytical skills) */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider font-mono mb-3">
            Core Analytical Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CORE_COMPETENCIES.map((comp) => (
              <div key={comp.name} className="p-3.5 rounded-xl bg-white border border-zinc-200/90">
                <div className="text-xs font-semibold text-zinc-900">{comp.name}</div>
                <div className="text-xs text-zinc-500 mt-1 leading-relaxed">{comp.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
