import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, FileText, ArrowDown, Database, BarChart3, Terminal } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="home" className="py-12 sm:py-16 md:py-20 border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Intro Meta Tag */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono text-zinc-500">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            {PERSONAL_INFO.location}
          </span>
          <span>•</span>
          <span>{EDUCATION.institution} (2023–2026)</span>
          <span>•</span>
          <span className="text-zinc-700 font-medium">B.A. History + CS Elective</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-zinc-900 leading-[1.15] mb-6">
          Hello, I’m <span className="underline decoration-zinc-300 underline-offset-4">{PERSONAL_INFO.name}</span>. An aspiring data analyst who loves asking sharp questions from raw tables.
        </h1>

        {/* Human Narrative & Context */}
        <div id="about" className="scroll-mt-24 space-y-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-3xl">
          <p>
            I’m a fresh graduate from the <strong>University of Delhi</strong> with a background in 
            History and academic coursework in <strong>Computer Science</strong>. This unique combination gives me a double advantage: the investigative discipline to interrogate messy source records, and the practical technical toolkit of <strong>Python (NumPy, Pandas, Seaborn, Matplotlib), SQL, and Excel</strong> to clean, query, and visualize answers.
          </p>
          <p className="text-sm sm:text-base text-zinc-500">
            I don’t just write queries for syntax; I care about data integrity, handling missing values responsibly, and translating statistical distributions into clear, human-understandable decisions.
          </p>
        </div>

        {/* Action Buttons & Contact Badges */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            id="hero-view-projects-btn"
            href="#projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium transition-all shadow-xs"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            id="hero-open-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-50 text-zinc-800 text-sm font-medium border border-zinc-200 transition-all shadow-2xs"
          >
            <FileText className="w-4 h-4 text-zinc-500" />
            <span>View Full Resume</span>
          </button>
        </div>

        {/* Real Analytical Foundation Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-zinc-200/80">
          <div className="p-4 rounded-xl bg-white border border-zinc-200/80">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
              <Database className="w-3.5 h-3.5 text-zinc-700" />
              Primary Stack
            </div>
            <div className="text-base font-semibold text-zinc-900 mt-1">Python, SQL, Excel</div>
            <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
              Pandas, NumPy, Seaborn, Matplotlib & MySQL for data pipelines, EDA, and statistical reporting.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-zinc-200/80">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
              <BarChart3 className="w-3.5 h-3.5 text-zinc-700" />
              Applied Projects
            </div>
            <div className="text-base font-semibold text-zinc-900 mt-1">Data Cleaning & EDA</div>
            <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
              Netflix catalog exploration & university coursework data wrangling and statistical modeling.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-zinc-200/80">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
              <Terminal className="w-3.5 h-3.5 text-zinc-700" />
              Certifications
            </div>
            <div className="text-base font-semibold text-zinc-900 mt-1">4 Verified Credentials</div>
            <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
              HCL GUVI (Python), Harvard CS50 edX (SQL), upGrad (Excel), Google Coursera (AI).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
