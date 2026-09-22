import React, { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBFA]/95 backdrop-blur-md border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Identity */}
        <div className="flex items-center gap-3">
          <a href="#home" className="group flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-semibold text-sm tracking-tight shadow-xs">
              AK
            </div>
            <div>
              <div className="font-medium text-sm text-zinc-900 leading-none group-hover:text-zinc-700 transition-colors">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-zinc-500 font-mono mt-0.5">
                Data Analyst • Fresher
              </div>
            </div>
          </a>

          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Available for Hire
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-zinc-900 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            id="open-resume-nav-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-3.5 py-1.5 rounded-md transition-all shadow-2xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white px-4 py-3 shadow-sm transition-all">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900 py-1.5 px-2 rounded-md hover:bg-zinc-50 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full text-center py-2 text-xs font-medium text-white bg-zinc-900 rounded-lg"
              >
                View & Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};