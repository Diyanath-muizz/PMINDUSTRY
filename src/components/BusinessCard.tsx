"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, UserPlus, RotateCcw, Copy, Check } from "lucide-react";

type CopiedKey = "acc" | "ifsc" | null;

function CopyButton({ textId, label }: { textId: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(label);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 text-[#aeb6bf] hover:text-[#3498db] transition-colors"
      title="Copy"
    >
      {copied ? (
        <Check size={14} className="text-green-400" />
      ) : (
        <Copy size={14} />
      )}
    </button>
  );
}

function saveContact() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:Suppliers;PM Industrial;;;
FN:PM Industrial Suppliers
ORG:PM Industrial Suppliers
TITLE:Industrial Scrap Dealers
TEL;TYPE=WORK,VOICE:+919962584211
TEL;TYPE=CELL,VOICE:+917305161297
ADR;TYPE=WORK:;;47FG+6V5, Ennore High Road, Meenambal Nagar, Pudumanaikuppam, Old Washermanpet;Chennai;Tamil Nadu;600021;India
END:VCARD`;
  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "PM_Industrial_Suppliers.vcf";
  a.click();
  URL.revokeObjectURL(url);
}

export default function BusinessCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile] = useState(() => typeof window !== "undefined" && window.innerWidth <= 768);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile) return;
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      setRotateX(((y - cy) / cy) * -15);
      setRotateY(((x - cx) / cx) * 15);
    },
    [isMobile]
  );

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) return;
    setIsFlipped((f) => !f);
  };

  const cardTransform = isFlipped
    ? `rotateX(${rotateX}deg) rotateY(${180 + rotateY}deg)`
    : `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen perspective-1500 px-4 py-8"
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-[680px] h-[380px] md:h-[420px] cursor-pointer transform-3d"
        style={{ perspective: "1500px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* The 3D inner wrapper */}
        <motion.div
          className="relative w-full h-full transform-3d"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            transform: cardTransform,
          }}
        >
          {/* ── FRONT FACE ── */}
          <div
            className="absolute inset-0 metallic-bg backface-hidden rounded-2xl border border-white/10 overflow-hidden texture-lines"
            style={{
              boxShadow: "0 25px 60px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            <div className="relative z-10 flex flex-col justify-between h-full p-7 md:p-9">
              {/* Top */}
              <div>
                <h1
                  className="metallic-text font-[family-name:var(--font-oswald)] font-bold text-3xl md:text-4xl uppercase tracking-wide leading-tight"
                >
                  PM INDUSTRIAL SUPPLIERS
                </h1>
                <p className="text-[#aeb6bf] font-medium tracking-[2px] text-sm mt-1 uppercase">
                  Industrial Scrap Dealers
                </p>
                <p className="text-[#3498db] font-[family-name:var(--font-oswald)] text-sm tracking-wide mt-1">
                  Iron &bull; Ferrous &bull; Non-Ferrous Metals
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-2" />

              {/* Management */}
              <div className="flex justify-between text-sm">
                <div className="flex flex-col">
                  <span className="text-[#8b9eb0] text-xs uppercase tracking-wider mb-1">Founded by</span>
                  <span className="text-white font-medium">Peer Mohamed</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[#8b9eb0] text-xs uppercase tracking-wider mb-1">Present Management</span>
                  <span className="text-white font-medium">Mohamed Hussain</span>
                  <span className="text-white font-medium">Khaja Mohaideen</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-3 flex-wrap">
                <a
                  href="tel:+919962584211"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3498db] text-white text-sm font-[family-name:var(--font-oswald)] uppercase tracking-wider hover:bg-[#2980b9] transition-all hover:-translate-y-0.5"
                >
                  <Phone size={14} /> Call
                </a>
                <a
                  href="https://wa.me/919962584211"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white text-sm font-[family-name:var(--font-oswald)] uppercase tracking-wider hover:bg-[#1ebe5d] transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
                <button
                  onClick={(e) => { e.stopPropagation(); saveContact(); }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30 text-[#e0e5ec] text-sm font-[family-name:var(--font-oswald)] uppercase tracking-wider hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  <UserPlus size={14} /> Save
                </button>
              </div>

              {/* Flip hint mobile */}
              <div className="md:hidden absolute bottom-3 right-4 flex items-center gap-1 text-xs text-[#aeb6bf] opacity-60">
                <span>Tap to flip</span>
                <RotateCcw size={12} />
              </div>
            </div>
          </div>

          {/* ── BACK FACE ── */}
          <div
            className="absolute inset-0 metallic-bg backface-hidden rounded-2xl border border-white/10 overflow-hidden texture-lines rotate-y-180"
            style={{
              boxShadow: "0 25px 60px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            <div className="relative z-10 flex flex-col justify-center h-full p-6 md:p-8 gap-4">
              {/* Company name header */}
              <h2 className="metallic-text font-[family-name:var(--font-oswald)] font-bold text-xl md:text-2xl uppercase tracking-wide text-center pb-3 border-b border-white/10">
                P M INDUSTRIAL SUPPLIERS
              </h2>

              {/* Bank detail rows */}
              <div className="flex flex-col gap-3">
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
                  <p className="text-[#8b9eb0] text-[10px] uppercase tracking-widest mb-1">Bank</p>
                  <p className="text-white font-medium text-sm">ICICI BANK &mdash; KILPAUK BRANCH</p>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
                  <p className="text-[#8b9eb0] text-[10px] uppercase tracking-widest mb-1">Account No</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium tracking-wide text-sm" id="acc-val">0278 0500 4754</span>
                    <CopyButton textId="acc-val" label="027805004754" />
                  </div>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
                  <p className="text-[#8b9eb0] text-[10px] uppercase tracking-widest mb-1">IFSC</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium tracking-wide text-sm" id="ifsc-val">ICIC0000278</span>
                    <CopyButton textId="ifsc-val" label="ICIC0000278" />
                  </div>
                </div>
              </div>

              {/* Flip hint */}
              <div className="md:hidden absolute bottom-3 right-4 flex items-center gap-1 text-xs text-[#aeb6bf] opacity-60">
                <span>Tap to flip</span>
                <RotateCcw size={12} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll down arrow */}
      <a
        href="#services"
        className="animate-bounce-arrow absolute bottom-8 left-1/2 text-[#aeb6bf] opacity-70 hover:opacity-100 hover:text-[#3498db] transition-all"
        aria-label="Scroll to services"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
