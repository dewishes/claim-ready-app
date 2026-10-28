'use client';

import React, { useState, useEffect } from 'react';
import {
  FileText,
  Download,
  Share2,
  CheckCircle2,
  Circle,
  Printer,
  ChevronRight,
  ShieldCheck,
  AlertTriangle,
  Menu,
  X,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';

interface ChecklistStep {
  number: number;
  title: string;
  detail: string;
  category: 'before' | 'fault' | 'technician' | 'refused';
  tag: string;
}

const CHECKLIST_STEPS: ChecklistStep[] = [
  // BEFORE ANYTHING GOES WRONG
  {
    number: 1,
    title: 'Keep the invoice.',
    detail: 'Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.',
    category: 'before',
    tag: 'Proof of Purchase',
  },
  {
    number: 2,
    title: 'Register the product.',
    detail: 'Many brands ask you to register on their website or app; some add extra warranty when you do.',
    category: 'before',
    tag: 'Manufacturer Record',
  },
  {
    number: 3,
    title: 'Read the warranty card once.',
    detail: 'Note how long it lasts, what it covers, and what it excludes.',
    category: 'before',
    tag: 'Coverage Terms',
  },
  {
    number: 4,
    title: 'Record the condition.',
    detail: 'Take a few dated photos of the product once it is installed or unboxed.',
    category: 'before',
    tag: 'Baseline Photos',
  },

  // WHEN THE FAULT APPEARS
  {
    number: 5,
    title: 'Record the fault.',
    detail: 'Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.',
    category: 'fault',
    tag: 'Initial Evidence',
  },
  {
    number: 6,
    title: 'Raise the complaint in writing.',
    detail: 'Use email, the brand\'s website or its app, not only a phone call, so there is a record.',
    category: 'fault',
    tag: 'Written Trail',
  },
  {
    number: 7,
    title: 'Note every reference number.',
    detail: 'Write down the complaint or ticket number, the date and the name of anyone you speak to.',
    category: 'fault',
    tag: 'Ticket Log',
  },

  // WHEN A TECHNICIAN VISITS
  {
    number: 8,
    title: 'Ask for the job sheet.',
    detail: 'Ask the technician for a copy of the visit report or job sheet before they leave.',
    category: 'technician',
    tag: 'Visit Report',
  },
  {
    number: 9,
    title: 'Ask what was tested.',
    detail: 'Ask which test or instrument was used to reach the diagnosis.',
    category: 'technician',
    tag: 'Technical Method',
  },
  {
    number: 10,
    title: 'Take your own photos.',
    detail: 'Photograph the product and anything the technician points to, during the visit.',
    category: 'technician',
    tag: 'Visit Photos',
  },

  // IF THE CLAIM IS REFUSED
  {
    number: 11,
    title: 'Ask for the reason in writing.',
    detail: 'Request a written explanation that names the exact cause and the evidence for it.',
    category: 'refused',
    tag: 'Formal Rejection',
  },
  {
    number: 12,
    title: 'Ask for the technical report.',
    detail: 'If the refusal rests on an inspection, ask for that inspection report.',
    category: 'refused',
    tag: 'Inspection Data',
  },
  {
    number: 13,
    title: 'Escalate inside the company.',
    detail: 'Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.',
    category: 'refused',
    tag: 'Grievance Path',
  },
  {
    number: 14,
    title: 'Keep it factual.',
    detail: 'Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.',
    category: 'refused',
    tag: 'Fact-Based Dossier',
  },
  {
    number: 15,
    title: 'Know your consumer helpline.',
    detail: 'Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.',
    category: 'refused',
    tag: 'Public Recourse',
  },
];

export default function LandingPage() {
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  // Load saved checklist state from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('claim_ready_completed');
      if (saved) {
        setCompletedSteps(JSON.parse(saved));
      }
    } catch {
      // LocalStorage not available or disabled
    }
  }, []);

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps((prev) => {
      const updated = { ...prev, [stepNumber]: !prev[stepNumber] };
      try {
        localStorage.setItem('claim_ready_completed', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const completedCount = Object.values(completedSteps).filter(Boolean).length;

  const handleDownload = () => {
    const textContent = `CLAIM READY
A free checklist for anyone about to file a warranty claim.

WHO THIS IS FOR
Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty,
and who wants the claim to be decided on facts, in writing.

THE IDEA IN ONE LINE
A warranty claim is decided on records. Keep yours, and ask for theirs in writing.

BEFORE ANYTHING GOES WRONG
1. Keep the invoice. Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
2. Register the product. Many brands ask you to register on their website or app; some add extra warranty when you do.
3. Read the warranty card once. Note how long it lasts, what it covers, and what it excludes.
4. Record the condition. Take a few dated photos of the product once it is installed or unboxed.

WHEN THE FAULT APPEARS
5. Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
6. Raise the complaint in writing. Use email, the brand's website or its app, not only a phone call, so there is a record.
7. Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.

WHEN A TECHNICIAN VISITS
8. Ask for the job sheet. Ask the technician for a copy of the visit report or job sheet before they leave.
9. Ask what was tested. Ask which test or instrument was used to reach the diagnosis.
10. Take your own photos. Photograph the product and anything the technician points to, during the visit.

IF THE CLAIM IS REFUSED
11. Ask for the reason in writing. Request a written explanation that names the exact cause and the evidence for it.
12. Ask for the technical report. If the refusal rests on an inspection, ask for that inspection report.
13. Escalate inside the company. Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
14. Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
15. Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.

KEY NUMBERS FOR THE PAGE
15 steps in the checklist.
4 records to keep before anything goes wrong.
1 rule: if it is not in writing, it did not happen.

CALL TO ACTION
Download the checklist and keep it with your invoices.
Share it with a friend who just bought something expensive.

FOOTER NOTE
Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'claim-ready-checklist.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'CLAIM READY — Warranty Claim Checklist',
          text: 'A free checklist for anyone about to file a warranty claim. Decided on facts, in writing.',
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to copy link
      }
    }
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 3000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#363C47] flex flex-col font-sans selection:bg-[#DCF3EA] selection:text-[#065F43]">
      {/* 1. TICKER STRIP */}
      <div className="ticker-wrap w-full bg-[#EEFAF5] border-b border-[#B9E6D6] overflow-hidden py-2.5 select-none relative z-40">
        <div className="ticker-track flex items-center">
          {/* Repeated items for continuous 46s scroll */}
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center space-x-10 shrink-0 pr-10">
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase font-medium text-[#065F43] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                CLAIM READY • FREE WARRANTY CHECKLIST
              </span>
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase font-medium text-[#065F43] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                RULE 1: IF IT IS NOT IN WRITING, IT DID NOT HAPPEN
              </span>
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase font-medium text-[#065F43] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                15 ACTIONABLE STEPS
              </span>
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase font-medium text-[#065F43] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                4 ESSENTIAL RECORDS TO KEEP BEFORE FAILURE
              </span>
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase font-medium text-[#065F43] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                DECIDED ON FACTS, IN WRITING
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. STICKY HEADER */}
      <header className="sticky top-0 z-30 w-full h-[72px] bg-white/92 backdrop-blur-md border-b border-[#E7EAEF] px-5 sm:px-8 md:px-10 transition-colors">
        <div className="max-w-[1180px] h-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A58] rounded-md py-1">
            <span className="w-8 h-8 rounded-full bg-[#087A58] text-white flex items-center justify-center font-bold text-sm tracking-tighter shadow-sm group-hover:bg-[#066748] transition-colors">
              CR
            </span>
            <div className="flex flex-col">
              <span className="font-extrabold text-[18px] tracking-[-0.035em] text-[#0D1117] leading-none">
                CLAIM READY
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#5B6472] mt-0.5">
                WARRANTY GUIDE
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#before" className="text-[14px] font-medium text-[#5B6472] hover:text-[#0D1117] transition-colors">
              Before Fault
            </a>
            <a href="#fault" className="text-[14px] font-medium text-[#5B6472] hover:text-[#0D1117] transition-colors">
              When Fault Appears
            </a>
            <a href="#technician" className="text-[14px] font-medium text-[#5B6472] hover:text-[#0D1117] transition-colors">
              Technician Visit
            </a>
            <a href="#refused" className="text-[14px] font-medium text-[#5B6472] hover:text-[#0D1117] transition-colors">
              If Refused
            </a>
            <a href="#numbers" className="text-[14px] font-medium text-[#5B6472] hover:text-[#0D1117] transition-colors">
              Key Numbers
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="btn-dark"
              title="Download checklist file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Checklist</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#0D1117] hover:bg-[#F7F8FA] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[72px] left-0 w-full bg-white border-b border-[#E7EAEF] px-6 py-6 shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
            <a
              href="#before"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-[#363C47] py-2 border-b border-[#E7EAEF]"
            >
              Before Fault
            </a>
            <a
              href="#fault"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-[#363C47] py-2 border-b border-[#E7EAEF]"
            >
              When Fault Appears
            </a>
            <a
              href="#technician"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-[#363C47] py-2 border-b border-[#E7EAEF]"
            >
              Technician Visit
            </a>
            <a
              href="#refused"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-[#363C47] py-2 border-b border-[#E7EAEF]"
            >
              If Refused
            </a>
            <a
              href="#numbers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-[#363C47] py-2 border-b border-[#E7EAEF]"
            >
              Key Numbers
            </a>
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDownload();
                }}
                className="btn-primary w-full justify-center"
              >
                <Download className="w-4 h-4" />
                <span>Download Checklist</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (White Background) */}
      <section className="w-full bg-white pt-12 md:pt-20 pb-16 md:pb-24 px-5 sm:px-8 md:px-10 border-b border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Copy Left (approx 58%) */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Mono Pill Label (Eyebrow) */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#087A58] animate-pulse" />
                  FREE WARRANTY GUIDE &amp; CHECKLIST
                </span>
              </div>

              {/* Title from content.txt */}
              <h1 className="headline-display text-[#0D1117] tracking-tightest mb-4">
                CLAIM READY
              </h1>

              {/* Subtitle from content.txt */}
              <p className="font-extrabold text-[#0D1117] text-xl sm:text-2xl md:text-[26px] leading-snug tracking-tightest mb-6">
                A free checklist for anyone about to file a warranty claim.
              </p>

              {/* WHO THIS IS FOR from content.txt */}
              <div className="editorial-card p-6 md:p-7 mb-8 bg-[#FBFCFD] border-[#E7EAEF]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase font-bold text-[#087A58]">
                    WHO THIS IS FOR
                  </span>
                </div>
                <p className="lead-p text-[#363C47]">
                  Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a href="#checklist" className="btn-primary">
                  <span>Explore the Checklist</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <button onClick={handleDownload} className="btn-ghost">
                  <Download className="w-4 h-4 text-[#087A58]" />
                  <span>Download Checklist</span>
                </button>
              </div>

              {/* Progress counter pill */}
              <div className="mt-6 flex items-center gap-3 text-xs text-[#5B6472]">
                <div className="w-32 bg-[#E7EAEF] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#087A58] h-full transition-all duration-300"
                    style={{ width: `${(completedCount / 15) * 100}%` }}
                  />
                </div>
                <span className="font-mono text-[11px] tracking-wide text-[#0D1117] font-semibold">
                  {completedCount} of 15 steps verified
                </span>
              </div>
            </div>

            {/* Visual Right (Document Card / Dossier Preview) */}
            <div className="lg:col-span-5">
              <div className="editorial-card p-6 sm:p-8 bg-[#FBFCFD] border border-[#E7EAEF] relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-[#E7EAEF] mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center text-[#087A58]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0D1117] leading-tight">
                        Warranty Claim Dossier
                      </h4>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5B6472]">
                        FACT-BASED RECORDS
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-semibold">
                    15 STEPS
                  </span>
                </div>

                {/* Evidence items preview */}
                <div className="space-y-3.5 mb-6 text-sm">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E7EAEF]">
                    <ShieldCheck className="w-4 h-4 text-[#087A58] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-xs text-[#0D1117]">1. Purchase Evidence</div>
                      <div className="text-[12px] text-[#5B6472]">Original invoice, warranty card &amp; baseline photos</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E7EAEF]">
                    <AlertTriangle className="w-4 h-4 text-[#087A58] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-xs text-[#0D1117]">2. Fault Record</div>
                      <div className="text-[12px] text-[#5B6472]">Dated video proof, written ticket &amp; ref numbers</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E7EAEF]">
                    <FileText className="w-4 h-4 text-[#087A58] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-xs text-[#0D1117]">3. Inspection &amp; Escalation</div>
                      <div className="text-[12px] text-[#5B6472]">Signed job sheet, written reason &amp; grievance trail</div>
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Tooltip */}
                <div className="p-3.5 rounded-xl bg-[#EEFAF5] border border-[#B9E6D6] text-xs text-[#065F43]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] font-bold mb-1">
                    KEY PRINCIPLE
                  </p>
                  <p className="text-[13px] leading-relaxed">
                    A calm, written record is what a consumer forum or brand escalation manager will examine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE IDEA IN ONE LINE (Headline Card - Dark Ink Panel with Scanlines) */}
      <section className="w-full bg-[#FFFFFF] py-14 sm:py-20 px-5 sm:px-8 md:px-10">
        <div className="max-w-[1180px] mx-auto">
          <div className="relative rounded-[26px] bg-[#0D1117] text-white p-8 sm:p-12 md:p-14 overflow-hidden shadow-float">
            {/* Scanline background overlay */}
            <div className="absolute inset-0 scanlines-texture pointer-events-none opacity-40" />

            <div className="relative z-10 max-w-[880px]">
              {/* Mono Eyebrow */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#34D399]/40 text-[#34D399] font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                  THE IDEA IN ONE LINE
                </span>
              </div>

              {/* Exact Text from content.txt in Large Mono Type */}
              <blockquote className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold leading-snug md:leading-tight text-white mb-6 tracking-tight">
                “A warranty claim is decided on records. Keep yours, and ask for theirs in writing.”
              </blockquote>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#34D399]">
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 uppercase tracking-[0.16em]">
                  DOCUMENT EVERYTHING
                </span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 uppercase tracking-[0.16em]">
                  REQUEST WRITTEN PROOF
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KEY NUMBERS FOR THE PAGE (Stat Grid) */}
      <section id="numbers" className="w-full bg-[#F7F8FA] py-16 sm:py-24 px-5 sm:px-8 md:px-10 border-y border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto">
          {/* Section Header Stack */}
          <div className="mb-12">
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] uppercase tracking-[0.16em] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                KEY NUMBERS FOR THE PAGE
              </span>
            </div>
            <h2 className="headline-lg text-[#0D1117] tracking-tightest">
              Records decide warranty claims.
            </h2>
            <p className="lead-p max-w-[62ch] mt-3">
              Three critical facts summarize why written documentation protects consumers from unjustified denials.
            </p>
          </div>

          {/* Stat Grid with 1px hairline divider effect */}
          <div className="rounded-[18px] overflow-hidden border border-[#E7EAEF] bg-[#E7EAEF] shadow-card grid grid-cols-1 md:grid-cols-3 gap-[1px]">
            {/* Stat 1 */}
            <div className="bg-white p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[#5B6472]">
                  CHECKLIST SCOPE
                </span>
                <div className="stat-number text-[#0D1117] mt-3 mb-2">
                  15
                </div>
              </div>
              <p className="text-[14px] sm:text-[15px] font-medium text-[#363C47] leading-relaxed">
                steps in the checklist.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[#5B6472]">
                  INITIAL PREPARATION
                </span>
                <div className="stat-number text-[#0D1117] mt-3 mb-2">
                  4
                </div>
              </div>
              <p className="text-[14px] sm:text-[15px] font-medium text-[#363C47] leading-relaxed">
                records to keep before anything goes wrong.
              </p>
            </div>

            {/* Stat 3 - HOT CELL IN EMERALD */}
            <div className="bg-white p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#EEFAF5] rounded-bl-full -z-0 pointer-events-none" />
              <div className="relative z-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[#087A58]">
                  THE CARDINAL RULE
                </span>
                <div className="stat-number text-[#087A58] mt-3 mb-2">
                  1
                </div>
              </div>
              <p className="relative z-10 text-[14px] sm:text-[15px] font-medium text-[#363C47] leading-relaxed">
                rule: if it is not in writing, it did not happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CHECKLIST SECTION CONTAINER */}
      <div id="checklist">
        {/* SECTION 1: BEFORE ANYTHING GOES WRONG (White Background) */}
        <section id="before" className="w-full bg-white py-16 sm:py-24 px-5 sm:px-8 md:px-10 border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto">
            {/* Header Stack */}
            <div className="mb-12">
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] uppercase tracking-[0.16em] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                  PHASE 01 • PROACTIVE PREPARATION
                </span>
              </div>
              <h2 className="headline-lg text-[#0D1117] tracking-tightest">
                BEFORE ANYTHING GOES WRONG
              </h2>
              <p className="lead-p max-w-[62ch] mt-3">
                Do these four things right after purchase to anchor your rights from day one.
              </p>
            </div>

            {/* Steps 1-4 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CHECKLIST_STEPS.filter((s) => s.category === 'before').map((step) => {
                const isChecked = !!completedSteps[step.number];
                return (
                  <div
                    key={step.number}
                    onClick={() => toggleStep(step.number)}
                    className={`editorial-card editorial-card-interactive p-6 sm:p-8 cursor-pointer select-none transition-all ${
                      isChecked ? 'bg-[#EEFAF5]/50 border-[#B9E6D6]' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold w-8 h-8 rounded-full bg-[#F7F8FA] border border-[#E7EAEF] text-[#0D1117] flex items-center justify-center shrink-0">
                          {step.number}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5B6472]">
                          {step.tag}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="text-[#087A58] p-1 rounded-full hover:bg-[#EEFAF5] transition-colors"
                        aria-label={isChecked ? 'Mark step as incomplete' : 'Mark step as completed'}
                      >
                        {isChecked ? (
                          <CheckCircle2 className="w-6 h-6 fill-[#087A58] text-white" />
                        ) : (
                          <Circle className="w-6 h-6 text-[#D6DBE3]" />
                        )}
                      </button>
                    </div>

                    <h3 className="font-extrabold text-lg sm:text-xl text-[#0D1117] mb-2.5 leading-snug">
                      {step.number}. {step.title}
                    </h3>
                    <p className="body-text text-[#5B6472] text-[15px] sm:text-[16px] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 2: WHEN THE FAULT APPEARS (Mist / Muted Grey Background) */}
        <section id="fault" className="w-full bg-[#F7F8FA] py-16 sm:py-24 px-5 sm:px-8 md:px-10 border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto">
            {/* Header Stack */}
            <div className="mb-12">
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] uppercase tracking-[0.16em] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                  PHASE 02 • INCIDENT REPORTING
                </span>
              </div>
              <h2 className="headline-lg text-[#0D1117] tracking-tightest">
                WHEN THE FAULT APPEARS
              </h2>
              <p className="lead-p max-w-[62ch] mt-3">
                How you document and log the defect in the first 24 hours determines the outcome.
              </p>
            </div>

            {/* Steps 5-7 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CHECKLIST_STEPS.filter((s) => s.category === 'fault').map((step) => {
                const isChecked = !!completedSteps[step.number];
                return (
                  <div
                    key={step.number}
                    onClick={() => toggleStep(step.number)}
                    className={`editorial-card editorial-card-interactive p-6 sm:p-7 cursor-pointer select-none transition-all flex flex-col justify-between ${
                      isChecked ? 'bg-[#EEFAF5]/50 border-[#B9E6D6]' : 'bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs font-bold w-8 h-8 rounded-full bg-[#F7F8FA] border border-[#E7EAEF] text-[#0D1117] flex items-center justify-center shrink-0">
                            {step.number}
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5B6472]">
                            {step.tag}
                          </span>
                        </div>
                        <button
                          type="button"
                          className="text-[#087A58] p-1 rounded-full hover:bg-[#EEFAF5] transition-colors"
                          aria-label={isChecked ? 'Mark step as incomplete' : 'Mark step as completed'}
                        >
                          {isChecked ? (
                            <CheckCircle2 className="w-6 h-6 fill-[#087A58] text-white" />
                          ) : (
                            <Circle className="w-6 h-6 text-[#D6DBE3]" />
                          )}
                        </button>
                      </div>

                      <h3 className="font-extrabold text-lg text-[#0D1117] mb-2 leading-snug">
                        {step.number}. {step.title}
                      </h3>
                      <p className="body-text text-[#5B6472] text-[15px] leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: WHEN A TECHNICIAN VISITS (White Background) */}
        <section id="technician" className="w-full bg-white py-16 sm:py-24 px-5 sm:px-8 md:px-10 border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto">
            {/* Header Stack */}
            <div className="mb-12">
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] uppercase tracking-[0.16em] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                  PHASE 03 • ON-SITE INSPECTION
                </span>
              </div>
              <h2 className="headline-lg text-[#0D1117] tracking-tightest">
                WHEN A TECHNICIAN VISITS
              </h2>
              <p className="lead-p max-w-[62ch] mt-3">
                Never let an inspection end without your own verifiable copy of their observations.
              </p>
            </div>

            {/* Steps 8-10 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CHECKLIST_STEPS.filter((s) => s.category === 'technician').map((step) => {
                const isChecked = !!completedSteps[step.number];
                return (
                  <div
                    key={step.number}
                    onClick={() => toggleStep(step.number)}
                    className={`editorial-card editorial-card-interactive p-6 sm:p-7 cursor-pointer select-none transition-all flex flex-col justify-between ${
                      isChecked ? 'bg-[#EEFAF5]/50 border-[#B9E6D6]' : 'bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs font-bold w-8 h-8 rounded-full bg-[#F7F8FA] border border-[#E7EAEF] text-[#0D1117] flex items-center justify-center shrink-0">
                            {step.number}
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5B6472]">
                            {step.tag}
                          </span>
                        </div>
                        <button
                          type="button"
                          className="text-[#087A58] p-1 rounded-full hover:bg-[#EEFAF5] transition-colors"
                          aria-label={isChecked ? 'Mark step as incomplete' : 'Mark step as completed'}
                        >
                          {isChecked ? (
                            <CheckCircle2 className="w-6 h-6 fill-[#087A58] text-white" />
                          ) : (
                            <Circle className="w-6 h-6 text-[#D6DBE3]" />
                          )}
                        </button>
                      </div>

                      <h3 className="font-extrabold text-lg text-[#0D1117] mb-2 leading-snug">
                        {step.number}. {step.title}
                      </h3>
                      <p className="body-text text-[#5B6472] text-[15px] leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: IF THE CLAIM IS REFUSED (Dark Ink Section #0D1117) */}
        <section id="refused" className="w-full bg-[#0D1117] text-white py-16 sm:py-24 px-5 sm:px-8 md:px-10 relative">
          <div className="max-w-[1180px] mx-auto">
            {/* Header Stack */}
            <div className="mb-12">
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-[#34D399]/40 text-[#34D399] font-mono text-[10px] uppercase tracking-[0.16em] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                  PHASE 04 • DISPUTE &amp; ESCALATION
                </span>
              </div>
              <h2 className="headline-lg text-white tracking-tightest">
                IF THE CLAIM IS REFUSED
              </h2>
              <p className="text-white/70 max-w-[62ch] text-[17.5px] sm:text-[19px] leading-relaxed mt-3">
                A verbal refusal is meaningless. Force the dispute onto formal, verifiable technical grounds.
              </p>
            </div>

            {/* Steps 11-15 Dark Panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CHECKLIST_STEPS.filter((s) => s.category === 'refused').map((step) => {
                const isChecked = !!completedSteps[step.number];
                return (
                  <div
                    key={step.number}
                    onClick={() => toggleStep(step.number)}
                    className={`rounded-[18px] p-6 sm:p-7 border cursor-pointer select-none transition-all duration-200 ${
                      isChecked
                        ? 'bg-[#34D399]/15 border-[#34D399]'
                        : 'bg-white/10 border-white/15 hover:border-white/30 hover:bg-white/15'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold w-8 h-8 rounded-full bg-white/15 border border-white/20 text-[#34D399] flex items-center justify-center shrink-0">
                          {step.number}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                          {step.tag}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="text-[#34D399] p-1 rounded-full hover:bg-white/10 transition-colors"
                        aria-label={isChecked ? 'Mark step as incomplete' : 'Mark step as completed'}
                      >
                        {isChecked ? (
                          <CheckCircle2 className="w-6 h-6 fill-[#34D399] text-[#0D1117]" />
                        ) : (
                          <Circle className="w-6 h-6 text-white/40" />
                        )}
                      </button>
                    </div>

                    <h3 className="font-extrabold text-lg text-white mb-2 leading-snug">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-white/75 text-[15px] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* 7. CALL TO ACTION SECTION (Mint Callout Card) */}
      <section className="w-full bg-[#FFFFFF] py-16 sm:py-24 px-5 sm:px-8 md:px-10 border-b border-[#E7EAEF]">
        <div className="max-w-[880px] mx-auto">
          <div className="rounded-[18px] bg-[#EEFAF5] border border-[#B9E6D6] p-8 sm:p-12 text-[#065F43] shadow-card">
            {/* Pill Label */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B9E6D6] text-[#087A58] font-mono text-[10px] uppercase tracking-[0.16em] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                CALL TO ACTION
              </span>
            </div>

            <h2 className="headline-lg text-[#065F43] tracking-tightest mb-6">
              Take the checklist with you.
            </h2>

            {/* Content.txt Call to Action text */}
            <div className="space-y-4 mb-8 text-[17px] sm:text-[19px] leading-relaxed text-[#065F43]">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#087A58] shrink-0 mt-1" />
                <p className="font-semibold">
                  Download the checklist and keep it with your invoices.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Share2 className="w-5 h-5 text-[#087A58] shrink-0 mt-1" />
                <p className="font-semibold">
                  Share it with a friend who just bought something expensive.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleDownload}
                className="btn-primary"
              >
                <Download className="w-4 h-4" />
                <span>Download Checklist (.txt)</span>
              </button>

              <button
                onClick={handleShare}
                className="btn-ghost"
              >
                {shareCopied ? (
                  <>
                    <Check className="w-4 h-4 text-[#087A58]" />
                    <span className="text-[#087A58]">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#5B6472]" />
                    <span>Share With a Friend</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="btn-ghost"
                title="Print this page or save as PDF"
              >
                <Printer className="w-4 h-4 text-[#5B6472]" />
                <span>Print Guide</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="w-full bg-[#F7F8FA] border-t border-[#E7EAEF] pt-16 pb-12 px-5 sm:px-8 md:px-10 text-[#5B6472] text-[13.5px]">
        <div className="max-w-[1180px] mx-auto">
          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#E7EAEF]">
            {/* Column 1: About */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#087A58] text-white flex items-center justify-center font-bold text-xs">
                  CR
                </span>
                <span className="font-bold text-base text-[#0D1117] tracking-tight">
                  CLAIM READY
                </span>
              </div>
              <p className="text-[14px] leading-relaxed text-[#5B6472] mb-4">
                A calm, factual, and free guide designed to help consumers keep orderly records and protect warranty claims with written evidence.
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#087A58] font-semibold">
                SORRY BRAVIA • EMERALD EDITORIAL
              </span>
            </div>

            {/* Column 2: Checklist Sections */}
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-bold text-[#0D1117] mb-3">
                CHECKLIST SECTIONS
              </span>
              <ul className="space-y-2 text-[14px]">
                <li>
                  <a href="#before" className="hover:text-[#0D1117] transition-colors">
                    1. Before Anything Goes Wrong (Steps 1–4)
                  </a>
                </li>
                <li>
                  <a href="#fault" className="hover:text-[#0D1117] transition-colors">
                    2. When The Fault Appears (Steps 5–7)
                  </a>
                </li>
                <li>
                  <a href="#technician" className="hover:text-[#0D1117] transition-colors">
                    3. When A Technician Visits (Steps 8–10)
                  </a>
                </li>
                <li>
                  <a href="#refused" className="hover:text-[#0D1117] transition-colors">
                    4. If The Claim Is Refused (Steps 11–15)
                  </a>
                </li>
                <li>
                  <a href="#numbers" className="hover:text-[#0D1117] transition-colors">
                    5. Key Numbers for the Page
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: The 1 Rule */}
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-bold text-[#0D1117] mb-3">
                CORE PRINCIPLE
              </span>
              <div className="p-4 rounded-xl bg-white border border-[#E7EAEF] mb-3">
                <p className="font-mono text-[11px] text-[#0D1117] leading-relaxed">
                  “A warranty claim is decided on records. Keep yours, and ask for theirs in writing.”
                </p>
              </div>
              <p className="text-[12px] text-[#697382]">
                1 rule: if it is not in writing, it did not happen.
              </p>
            </div>
          </div>

          {/* FOOTER NOTE FROM CONTENT.TXT */}
          <div className="pt-8 pb-4">
            <div className="p-4 rounded-xl bg-white border border-[#E7EAEF] text-[#5B6472]">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#087A58] font-bold block mb-1">
                FOOTER NOTE
              </span>
              <p className="text-[13.5px] leading-relaxed">
                Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
              </p>
            </div>
          </div>

          {/* Bottom Legal / Copyright Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[13px] text-[#697382] gap-2">
            <div>
              &copy; {new Date().getFullYear()} Claim Ready. Decided on facts, in writing.
            </div>
            <div className="flex items-center gap-4">
              <span>Light Theme Only</span>
              <span>•</span>
              <span>WCAG AA 4.5:1 Compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
