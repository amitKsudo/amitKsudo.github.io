import React, { useState } from 'react';
import { Award, ExternalLink, Link as LinkIcon, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const [activeNotice, setActiveNotice] = useState<string | null>(null);

  const handleCertificateClick = (title: string, url?: string, credentialId?: string) => {
    if (url && url.trim() !== '' && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setActiveNotice(`Certificate verification link for "${title}" will be updated soon.`);
      setTimeout(() => setActiveNotice(null), 3000);
    }
  };

  return (
    <section id="certifications" className="py-16 md:py-20 border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            <span>Verified Credentials</span>
            <span>•</span>
            <span className="text-zinc-700 font-semibold">Continuous Learning</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-zinc-900 tracking-tight">
            Certifications & Training
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-3xl">
            Formal coursework and external certifications complementing my academic degree at the University of Delhi.
          </p>
        </div>

        {activeNotice && (
          <div className="mb-6 p-3 rounded-lg bg-zinc-100 border border-zinc-300 text-xs font-mono text-zinc-800 flex items-center gap-2 transition-all">
            <LinkIcon className="w-4 h-4 text-zinc-600 shrink-0" />
            <span>{activeNotice}</span>
          </div>
        )}

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <div 
              key={cert.id} 
              className="p-5 sm:p-6 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 transition-all flex flex-col justify-between shadow-2xs group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-zinc-100 text-zinc-800">
                      <Award className="w-4 h-4 text-zinc-700" />
                    </div>
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Certificate Link Button */}
                  <button
                    onClick={() => handleCertificateClick(cert.title, cert.certificateUrl, cert.credentialId)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium text-zinc-700 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 transition-colors cursor-pointer"
                    title={`View certificate link for ${cert.title}`}
                  >
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                    <span>Certificate Link</span>
                    <span className="text-[10px] text-zinc-400 font-mono">(Link soon)</span>
                  </button>
                </div>

                <h3 className="text-sm sm:text-base font-semibold text-zinc-900 leading-snug group-hover:text-zinc-700 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-zinc-400 mt-1">
                  Platform: <span className="text-zinc-600 font-medium">{cert.platform}</span>
                </div>

                <p className="mt-2.5 text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-zinc-100">
                <div className="text-[11px] font-mono text-zinc-400 uppercase mb-2">
                  Core Topics Covered
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.topics.map((topic) => (
                    <span 
                      key={topic} 
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-50 border border-zinc-200/70 text-zinc-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
