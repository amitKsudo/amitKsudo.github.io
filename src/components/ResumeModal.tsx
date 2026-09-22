import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText, CheckCircle2 } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, EDUCATION, SKILLS, CERTIFICATIONS, CORE_COMPETENCIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    setIsGenerating(true);
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 40;
      const contentWidth = pageWidth - margin * 2;
      let y = 42;

      // Helper function for section headers
      const addSectionHeader = (title: string) => {
        y += 7;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(30, 41, 59); // slate-800
        doc.text(title.toUpperCase(), margin, y);
        y += 3;
        doc.setDrawColor(203, 213, 225); // slate-300
        doc.setLineWidth(0.75);
        doc.line(margin, y, pageWidth - margin, y);
        y += 11;
      };

      // Header: Name
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.setTextColor(15, 23, 42); // slate-900
      doc.text(PERSONAL_INFO.name.toUpperCase(), pageWidth / 2, y, { align: 'center' });
      y += 15;

      // Contact info
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(71, 85, 105); // slate-600
      const contactText = `Phone: ${PERSONAL_INFO.phone}   |   Email: ${PERSONAL_INFO.email}   |   Location: ${PERSONAL_INFO.location}`;
      doc.text(contactText, pageWidth / 2, y, { align: 'center' });
      y += 10;

      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.5);
      doc.line(margin, y, pageWidth - margin, y);
      y += 10;

      // Professional Summary
      addSectionHeader('Professional Summary');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.8);
      doc.setTextColor(51, 65, 85);
      const summaryLines = doc.splitTextToSize(
        'Recent B.A. (History) graduate from the University of Delhi with a strong foundation in Data Analytics. Proficient in Python, SQL, Microsoft Excel, Google Workspace, Pandas, NumPy, Matplotlib, Seaborn, and data visualization. Hands-on experience through academic coursework, self-driven projects, and professional certifications.',
        contentWidth
      );
      doc.text(summaryLines, margin, y);
      y += summaryLines.length * 11 + 4;

      // Education
      addSectionHeader('Education');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text(EDUCATION.institution, margin, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 116, 139);
      doc.text(EDUCATION.timeline, pageWidth - margin, y, { align: 'right' });
      y += 10;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.8);
      doc.setTextColor(51, 65, 85);
      doc.text(EDUCATION.degree, margin, y);
      y += 9.5;
      doc.setFont('helvetica', 'italic');
      doc.text(EDUCATION.minorOrElective, margin, y);
      y += 12;

      // Technical Skills
      addSectionHeader('Technical Skills');
      const skillsList = [
        { label: 'Languages', val: 'Python, SQL' },
        { label: 'Libraries', val: 'Pandas, NumPy, Seaborn, Matplotlib' },
        { label: 'Databases', val: 'MySQL' },
        { label: 'Tools', val: 'Microsoft Excel, Google Sheets, VS Code, Jupyter Notebook, Google Colab' },
        { label: 'Operating Systems', val: 'Windows, Ubuntu' },
        { label: 'Data Analytics', val: 'Data Cleaning, Exploratory Data Analysis (EDA), Data Visualization, Statistics' },
      ];
      skillsList.forEach((s) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.8);
        doc.setTextColor(30, 41, 59);
        const labelStr = `${s.label}: `;
        doc.text(labelStr, margin, y);
        const labelW = doc.getTextWidth(labelStr);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(51, 65, 85);
        const valLines = doc.splitTextToSize(s.val, contentWidth - labelW);
        doc.text(valLines, margin + labelW, y);
        y += valLines.length * 10;
      });
      y += 3;

      // Projects
      addSectionHeader('Projects');
      
      // Project 1
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text('1. Netflix Data Analysis', margin, y);
      y += 10;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      const p1_bullets = [
        'Cleaned and analyzed Netflix data using Python, Pandas, and SQL.',
        'Queried datasets, performed exploratory data analysis, and created visualizations using Matplotlib and Seaborn to identify trends and insights.',
      ];
      p1_bullets.forEach((b) => {
        doc.circle(margin + 4, y - 2.5, 1.2, 'F');
        const lines = doc.splitTextToSize(b, contentWidth - 14);
        doc.text(lines, margin + 12, y);
        y += lines.length * 9.5 + 2;
      });
      y += 3;

      // Project 2
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text('2. Academic Projects', margin, y);
      y += 10;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      const p2_bullets = [
        'Completed academic exercises using NumPy, Pandas, and SQL for data manipulation, querying, and statistical analysis.',
        'Performed DataFrame merging, indexing, descriptive statistics, and data cleaning.',
        'Implemented Python data structures and Cisco Packet Tracer networking simulations.',
      ];
      p2_bullets.forEach((b) => {
        doc.circle(margin + 4, y - 2.5, 1.2, 'F');
        const lines = doc.splitTextToSize(b, contentWidth - 14);
        doc.text(lines, margin + 12, y);
        y += lines.length * 9.5 + 2;
      });
      y += 3;

      // Certifications
      addSectionHeader('Certifications');
      const certs = [
        'Python Programming Course: Beginner to Advanced with Certification - GUVI HCL',
        'Introduction to Data Analysis using Excel – upGrad',
        "CS50's Introduction to Databases with SQL — edX (Harvard)",
        'Introduction to AI - Coursera (Google)',
      ];
      certs.forEach((c) => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(51, 65, 85);
        doc.circle(margin + 4, y - 2.5, 1.2, 'F');
        const lines = doc.splitTextToSize(c, contentWidth - 14);
        doc.text(lines, margin + 12, y);
        y += lines.length * 9.5 + 2;
      });
      y += 3;

      // Core Competencies
      addSectionHeader('Core Competencies');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      const compText = 'Analytical Thinking   •   Problem Solving   •   Critical Thinking   •   Communication   •   Teamwork   •   Attention to Detail   •   Continuous Learning';
      const compLines = doc.splitTextToSize(compText, contentWidth);
      doc.text(compLines, margin, y);

      // Trigger automatic file download
      doc.save('Amit_Kumar_Data_Analyst_Resume.pdf');
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyText = () => {
    const textResume = `
AMIT KUMAR
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}

PROFESSIONAL SUMMARY
Recent B.A. (History) graduate from the University of Delhi with a strong foundation in Data Analytics. Proficient in Python, SQL, Microsoft Excel, Google Workspace, Pandas, NumPy, Matplotlib, Seaborn, and data visualization. Hands-on experience through academic coursework, self-driven projects, and professional certifications.

EDUCATION
University of Delhi
Bachelor of Arts (History)
Computer Science (Generic Elective)
August 2023 – June 2026

TECHNICAL SKILLS
- Languages: Python, SQL
- Libraries: Pandas, NumPy, Seaborn, Matplotlib
- Database: MySQL
- Tools: Gmail, Google Docs, Google Sheets, Microsoft Excel, VS Code, Jupyter Notebook, Google Colab
- Operating Systems: Windows, Ubuntu
- Data Analytics: Data Cleaning, Exploratory Data Analysis (EDA), Data Visualization, Statistics

PROJECTS
1. Netflix Data Analysis
• Cleaned and analyzed Netflix data using Python, Pandas, and SQL.
• Queried datasets, performed exploratory data analysis, and created visualizations using Matplotlib & Seaborn to identify trends and insights.

2. Academic Projects
• Completed academic exercises using NumPy, Pandas, and SQL for data manipulation, querying, and statistical analysis.
• Performed DataFrame merging, indexing, descriptive statistics, and data cleaning.
• Implemented Python data structures and Cisco Packet Tracer networking simulations.

CERTIFICATIONS
• Python Programming Course: Beginner to Advanced with Certification - GUVI HCL
• Introduction to Data Analysis using Excel – upGrad
• CS50's Introduction to Databases with SQL — edX (Harvard)
• Introduction to AI - Coursera (Google)

CORE COMPETENCIES
Analytical Thinking • Problem Solving • Critical Thinking • Communication • Teamwork • Attention to Detail • Continuous Learning
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top toolbar */}
        <div className="no-print flex flex-wrap items-center justify-between gap-2 px-4 sm:px-5 py-3 bg-zinc-50 border-b border-zinc-200">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-xs text-zinc-800">Resume Preview</span>
            <span className="text-zinc-400 text-xs">•</span>
            <span className="text-xs text-zinc-500 font-mono">Amit Kumar (Fresher)</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-100 border border-zinc-200 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            {/* Direct PDF Download Button */}
            <button
              id="download-resume-pdf-btn"
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 active:scale-95 transition-all shadow-2xs cursor-pointer disabled:opacity-50"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PDF Downloaded!</span>
                </>
              ) : isGenerating ? (
                <span>Generating PDF...</span>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-100 border border-zinc-200 transition-colors cursor-pointer"
              title="Open browser print dialog"
            >
              <Printer className="w-3.5 h-3.5 text-zinc-500" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/60 transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-zinc-900 text-xs sm:text-sm leading-relaxed space-y-5">
          {/* Header */}
          <div className="text-center border-b border-zinc-300 pb-4">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-zinc-600 font-mono">
              <span>Phone: <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">{PERSONAL_INFO.phone}</a></span>
              <span>|</span>
              <span>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a></span>
              <span>|</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="mt-1 flex items-center justify-center gap-4 text-xs font-mono text-zinc-500">
              <span>Data Analyst (Fresher)</span>
              <span>•</span>
              <span>Delhi, India</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-1 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-zinc-700 leading-relaxed text-xs sm:text-[13px]">
              Recent B.A. (History) graduate from the University of Delhi with a strong foundation in Data Analytics. Proficient in Python, SQL, Microsoft Excel, Google Workspace, Pandas, NumPy, Matplotlib, Seaborn, and data visualization. Hands-on experience through academic coursework, self-driven projects, and professional certifications.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-1 mb-2 font-mono">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <div className="font-bold text-zinc-900 text-xs sm:text-[13px]">{EDUCATION.institution}</div>
              <div className="text-zinc-500 font-mono text-[11px]">{EDUCATION.timeline}</div>
            </div>
            <div className="text-zinc-700 text-xs">{EDUCATION.degree}</div>
            <div className="text-zinc-600 text-xs italic">{EDUCATION.minorOrElective}</div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-1 mb-2 font-mono">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-zinc-700">
              <p><strong>Languages:</strong> Python, SQL</p>
              <p><strong>Libraries:</strong> Pandas, NumPy, Seaborn, Matplotlib</p>
              <p><strong>Database:</strong> MySQL</p>
              <p><strong>Tools:</strong> Microsoft Excel, Google Sheets, VS Code, Jupyter Notebook, Google Colab</p>
              <p><strong>Operating Systems:</strong> Windows, Ubuntu</p>
              <p><strong>Data Analytics:</strong> Data Cleaning, Exploratory Data Analysis (EDA), Data Visualization, Statistics</p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-1 mb-2 font-mono">
              Projects
            </h2>
            
            <div className="mb-3">
              <div className="font-bold text-zinc-900 text-xs sm:text-[13px]">1. Netflix Data Analysis</div>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-zinc-700 text-xs">
                <li>Cleaned and analyzed Netflix data using <strong>Python, Pandas, and SQL</strong>.</li>
                <li>Queried datasets, performed exploratory data analysis, and created visualizations using <strong>Matplotlib & Seaborn</strong> to identify trends and insights.</li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-zinc-900 text-xs sm:text-[13px]">2. Academic Projects</div>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-zinc-700 text-xs">
                <li>Completed academic exercises using <strong>NumPy, Pandas, and SQL</strong> for data manipulation, querying, and statistical analysis.</li>
                <li>Performed DataFrame merging, indexing, descriptive statistics, and data cleaning.</li>
                <li>Implemented Python data structures and Cisco Packet Tracer networking simulations.</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-1 mb-2 font-mono">
              Certifications
            </h2>
            <ul className="list-disc list-inside space-y-0.5 text-zinc-700 text-xs">
              <li>Python Programming Course: Beginner to Advanced with Certification - <strong>GUVI HCL</strong></li>
              <li>Introduction to Data Analysis using Excel – <strong>upGrad</strong></li>
              <li>CS50's Introduction to Databases with SQL — <strong>edX (Harvard)</strong></li>
              <li>Introduction to AI - <strong>Coursera (Google)</strong></li>
            </ul>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-1 mb-2 font-mono">
              Core Competencies
            </h2>
            <p className="text-xs text-zinc-700 leading-relaxed font-medium">
              Analytical Thinking • Problem Solving • Critical Thinking • Communication • Teamwork • Attention to Detail • Continuous Learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
