import React, { useState } from 'react';
import { Mail, Download, Check, Send, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const [formData, setFormData] = useState({ name: '', organization: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadVCard = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Tengku Anas Zainal Abidin
TITLE:Data Scientist · Quantitative Research · Energy & Commodities
ORG:PETRONAS / University of Malaya
EMAIL;TYPE=INTERNET,WORK:${PERSONAL_INFO.email}
URL;TYPE=LinkedIn:${PERSONAL_INFO.linkedin}
URL;TYPE=GitHub:${PERSONAL_INFO.github}
NOTE:Quantitative Data Scientist specializing in Energy & Commodity Markets, Crude Oil Yields, and Time-Series Analytics.
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Tengku_Anas_Zainal_Abidin.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSentMessage(true);
    setTimeout(() => {
      setSentMessage(false);
      setFormData({ name: '', organization: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 border-t border-[#e3ded5] bg-[#faf8f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0f1115]">
          <div>
            <div className="flex items-center space-x-2 mb-2 font-mono text-xs tracking-widest uppercase text-[#626773]">
              <span>[ SECTION V ]</span>
              <span>·</span>
              <span>COMMERCIAL INQUIRIES & CONTACT</span>
            </div>
            <h2 className="font-serif-custom text-3xl sm:text-5xl font-medium text-[#0f1115] tracking-tight">
              Get in Touch
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#626773] text-right">
            <p>PRIVATE DESK INQUIRIES</p>
            <p className="text-[10px]">DIRECT CHANNEL & VCARD EXPORT</p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Business Card Details & Action Tools */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#fcfbfa] border border-[#0f1115] p-8 card-engraved-edge relative">
              <div className="absolute top-2 right-2 font-mono text-[9px] text-[#b5b0a3]">+</div>

              <div className="border-b border-[#e3ded5] pb-6 mb-6">
                <p className="font-mono text-[10px] tracking-widest uppercase text-[#626773] mb-1">
                  DIRECT LINE
                </p>
                <h3 className="font-serif-custom text-2xl font-bold text-[#0f1115]">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="font-sans text-xs tracking-widest uppercase text-[#626773] mt-1">
                  PETRONAS Quant / Data Science Desk
                </p>
              </div>

              {/* Direct Mail Copy Box */}
              <div className="space-y-4">
                <div className="p-4 bg-[#f7f5f0] border border-[#e3ded5] font-mono text-xs flex justify-between items-center">
                  <div className="truncate mr-2">
                    <span className="text-[#626773] mr-2">EMAIL:</span>
                    <span className="font-semibold text-[#0f1115]">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 border border-[#0f1115] bg-[#0f1115] text-[#f7f5f0] hover:bg-[#333740] transition-colors shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Mail className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* vCard Exporter Button */}
                <button
                  onClick={handleDownloadVCard}
                  className="w-full p-3.5 bg-[#0f1115] text-[#f7f5f0] border border-[#0f1115] font-mono text-xs uppercase flex items-center justify-center space-x-2 hover:bg-[#333740] transition-colors shadow-xs"
                >
                  <Download className="w-4 h-4 text-[#d4cebe]" />
                  <span>DOWNLOAD DIGITAL VCARD (.VCF)</span>
                </button>
              </div>

              {/* External Profile Links */}
              <div className="pt-6 mt-6 border-t border-[#e3ded5] grid grid-cols-2 gap-3 font-mono text-xs">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#e3ded5] hover:border-[#0f1115] flex items-center justify-center space-x-2 text-[#0f1115] transition-colors bg-white"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#e3ded5] hover:border-[#0f1115] flex items-center justify-center space-x-2 text-[#0f1115] transition-colors bg-white"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Memorandum Contact Form */}
          <div className="lg:col-span-7 bg-[#fcfbfa] border border-[#e3ded5] p-8 card-engraved-edge relative">
            <div className="absolute top-2 right-2 font-mono text-[9px] text-[#b5b0a3]">+</div>

            <h3 className="font-serif-custom text-2xl font-semibold text-[#0f1115] mb-2">
              Dispatch Memorandum
            </h3>
            <p className="font-sans text-xs text-[#626773] mb-6">
              Send a confidential inquiry regarding quantitative research collaboration or trading analytics.
            </p>

            {sentMessage ? (
              <div className="bg-[#0f1115] text-[#f7f5f0] p-8 border border-[#333740] text-center font-mono space-y-3">
                <ShieldCheck className="w-8 h-8 text-[#33ff66] mx-auto" />
                <p className="font-bold text-sm">MEMORANDUM DISPATCHED SUCCESSFULLY</p>
                <p className="text-xs text-[#a0a7b5]">Thank you for reaching out. I will respond to your address shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs tracking-wider uppercase text-[#626773] mb-1.5">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Patrick Bateman"
                      className="w-full p-3 bg-[#f7f5f0] border border-[#d4cebe] focus:border-[#0f1115] font-sans text-sm text-[#0f1115] outline-hidden transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs tracking-wider uppercase text-[#626773] mb-1.5">
                      ORGANIZATION / FIRM
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Pierce & Pierce / PETRONAS"
                      className="w-full p-3 bg-[#f7f5f0] border border-[#d4cebe] focus:border-[#0f1115] font-sans text-sm text-[#0f1115] outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-wider uppercase text-[#626773] mb-1.5">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@firm.com"
                    className="w-full p-3 bg-[#f7f5f0] border border-[#d4cebe] focus:border-[#0f1115] font-sans text-sm text-[#0f1115] outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-wider uppercase text-[#626773] mb-1.5">
                    COMMERCIAL / RESEARCH MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding quantitative models, energy market research, or collaboration opportunity..."
                    className="w-full p-3 bg-[#f7f5f0] border border-[#d4cebe] focus:border-[#0f1115] font-sans text-sm text-[#0f1115] outline-hidden transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0f1115] text-[#f7f5f0] font-mono text-xs uppercase font-semibold flex items-center justify-center space-x-2 hover:bg-[#333740] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MEMORANDUM</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
