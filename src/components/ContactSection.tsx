import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderCompany, setSenderCompany] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const [sentNotice, setSentNotice] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customMessage.trim()) {
      setErrorMessage('Please enter a message before sending.');
      return;
    }

    setSending(true);
    setSentNotice(false);
    setErrorMessage('');

    try {
      await emailjs.send(
        'service_yh9lgwn',
        'template_llor2ud',
        {
          sender_name: senderName,
          sender_email: senderEmail,
          sender_company: senderCompany,
          custom_message: customMessage.trim(),
        },
        {
          publicKey: 'xH8srvm6pfsGvWjfK',
        }
      );

      setSentNotice(true);

      setSenderName('');
      setSenderEmail('');
      setSenderCompany('');
      setCustomMessage('');

      setTimeout(() => setSentNotice(false), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);

      setErrorMessage(
        'Unable to send the inquiry right now. Please try again or contact me directly by email.'
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-zinc-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Contact Information */}
          <div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              Get in Touch
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
              Let's talk data.
            </h2>

            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              I am actively looking for entry-level <strong>Data Analyst</strong>,{' '}
              <strong>Business Intelligence</strong>, or <strong>Data Operations</strong>{' '}
              positions in Delhi NCR or remote.
            </p>

            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              Whether you have an open role, want to review my projects and SQL queries,
              or discuss data cleaning workflows, I’d love to connect.
            </p>

            <div className="mt-6 space-y-3">

              {/* Email */}
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-800/80 border border-zinc-700/80">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" />

                <div>
                  <div className="text-[11px] text-zinc-400 font-mono">
                    Email Address
                  </div>

                  <a
                    href="mailto:amitdehlvi@gmail.com"
                    className="text-xs sm:text-sm font-medium text-zinc-100 hover:text-white hover:underline"
                  >
                    amitdehlvi@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-800/80 border border-zinc-700/80">
                <Phone className="w-4 h-4 text-zinc-400 shrink-0" />

                <div>
                  <div className="text-[11px] text-zinc-400 font-mono">
                    Phone (Mobile)
                  </div>

                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-xs sm:text-sm font-medium text-zinc-100 hover:text-white hover:underline"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-800/80 border border-zinc-700/80 text-xs text-zinc-300">
                <MapPin className="w-4 h-4 text-zinc-400" />

                <span>
                  Based in <strong>{PERSONAL_INFO.location}</strong> (Open to Relocation & Hybrid)
                </span>
              </div>

            </div>
          </div>

          {/* Inquiry Form */}
          <div className="p-6 rounded-xl bg-zinc-800/60 border border-zinc-700/80">
            <h3 className="text-sm font-semibold text-white mb-4">
              Send an inquiry to Amit's inbox
            </h3>

            {/* Success Message */}
            {sentNotice && (
              <div className="mb-4 p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-600/50 text-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Your inquiry has been sent successfully!</span>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-2.5 rounded-lg bg-red-950/80 border border-red-600/50 text-red-200 text-xs">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSendEmail} className="space-y-3 text-xs">

              {/* Name */}
              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Your Name <span>*</span>
                </label>

                <input
                  type="text"
                  required
                  placeholder="e.g. Sheetal Sharma"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900/90 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Your Email Address <span>*</span>
                </label>

                <input
                  type="email"
                  required
                  placeholder="e.g. sheetal.sharma@company.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900/90 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
                />
              </div>

              {/* Company - Optional */}
              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Company / Organization
                </label>

                <input
                  type="text"
                  placeholder="e.g. Analytics Labs / Tech Corp"
                  value={senderCompany}
                  onChange={(e) => setSenderCompany(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900/90 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Message <span>*</span>
                </label>

                <textarea
                  rows={3}
                  required
                  minLength={2}
                  placeholder="Would love to schedule an introductory call regarding a fresher Data Analyst role..."
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900/90 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full mt-2 py-2.5 px-4 rounded-lg bg-white hover:bg-zinc-200 disabled:bg-zinc-400 text-zinc-900 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer disabled:cursor-not-allowed"
              >
                <Send className="w-3.5 h-3.5" />

                <span>
                  {sending ? 'Sending...' : 'Send Inquiry'}
                </span>
              </button>

            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-zinc-800 text-center text-xs text-zinc-500 font-mono">
  © {new Date().getFullYear()} Amit Kumar • Data Analyst Portfolio
</div>

      </div>
    </section>
  );
};