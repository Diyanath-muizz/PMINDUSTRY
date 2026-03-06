"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Phone, MessageCircle, UserPlus, RotateCcw, Copy, Check } from "lucide-react";

function CopyButton({ label }: { label: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(label);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };
  return (
    <button
      onClick={handleCopy}
      className="ml-2 shrink-0 text-white/40 hover:text-[#3498db] transition-colors"
      title="Copy"
    >
      {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
    </button>
  );
}

function saveContact() {
  const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:PM Industrial Suppliers\nORG:PM Industrial Suppliers\nTITLE:Industrial Scrap Dealers\nTEL;TYPE=WORK,VOICE:+919962584211\nTEL;TYPE=CELL,VOICE:+917305161297\nADR;TYPE=WORK:;;47FG+6V5, Ennore High Road, Old Washermanpet;Chennai;Tamil Nadu;600021;India\nEND:VCARD`;
  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "PM_Industrial_Suppliers.vcf";
  a.click();
  URL.revokeObjectURL(url);
}

/* ─── Premium Corner Ornament ─────────────────────────────── */
function CornerAccent({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const base = "absolute w-5 h-5 pointer-events-none";
  const corners: Record<string, string> = {
    tl: "top-0 left-0 border-t-2 border-l-2 rounded-tl-xl",
    tr: "top-0 right-0 border-t-2 border-r-2 rounded-tr-xl",
    bl: "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl",
    br: "bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl",
  };
  return <span className={`${base} ${corners[pos]} border-white/60`} />;
}

/* ─── Glass card face wrapper ─────────────────────────────── */
function CardFace({
  children,
  flipped = false,
}: {
  children: React.ReactNode;
  flipped?: boolean;
}) {
  return (
    <div
      className="absolute inset-0 rounded-2xl overflow-hidden"
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        /* Glassmorphism */
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.07) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Inner glow top */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)" }}
      />
      {/* Corner accents */}
      <CornerAccent pos="tl" />
      <CornerAccent pos="tr" />
      <CornerAccent pos="bl" />
      <CornerAccent pos="br" />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────── */
export default function BusinessCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Clamp tilt to ±10deg
      setRotateX(Math.max(-10, Math.min(10, ((y - rect.height / 2) / (rect.height / 2)) * -10)));
      setRotateY(Math.max(-10, Math.min(10, ((x - rect.width / 2) / (rect.width / 2)) * 10)));
    },
    [isMobile]
  );

  const handleMouseLeave = () => { setRotateX(0); setRotateY(0); };

  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button") || (e.target as HTMLElement).closest("a")) return;
    setIsFlipped((f) => !f);
    setRotateX(0);
    setRotateY(0);
  };

  /* Build the 3D transform for the inner spinner */
  const spinnerTransform = isFlipped
    ? `rotateX(${rotateX}deg) rotateY(${180 + rotateY}deg)`
    : `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-16 md:py-8"
      style={{ perspective: "1200px" }}
    >
      {/* Card container */}
      <div
        ref={containerRef}
        className="relative w-full cursor-pointer select-none"
        style={{
          maxWidth: "680px",
          height: isMobile ? "auto" : "420px",
          minHeight: "340px",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* 3D spinner — preserve-3d here only */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            transform: spinnerTransform,
            /* On mobile, height = auto so we need a min-height */
            minHeight: isMobile ? "340px" : undefined,
          }}
        >
          {/* ── FRONT ─────────────────────────────── */}
          <CardFace>
            <div className="flex flex-col justify-between h-full p-6 sm:p-8">
              {/* Brand */}
              <div>
                <h1 className="metallic-text font-[family-name:var(--font-oswald)] font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide leading-tight">
                  PM INDUSTRIAL SUPPLIERS
                </h1>
                <p className="text-white/60 font-medium tracking-[2px] text-xs sm:text-sm mt-1 uppercase">
                  Industrial Scrap Dealers
                </p>
                <p className="text-[#3498db] font-[family-name:var(--font-oswald)] text-xs sm:text-sm tracking-wide mt-1">
                  Iron &bull; Ferrous &bull; Non-Ferrous Metals
                </p>
              </div>

              {/* Divider */}
              <div className="h-px w-full my-2 sm:my-3" style={{ background: "linear-gradient(to right,transparent,rgba(255,255,255,0.25),transparent)" }} />

              {/* Management */}
              <div className="flex justify-between text-xs sm:text-sm gap-4">
                <div className="flex flex-col">
                  <span className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Founded by</span>
                  <span className="text-white font-medium">Peer Mohamed</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Present Management</span>
                  <span className="text-white font-medium">Mohamed Hussain</span>
                  <span className="text-white font-medium">Khaja Mohaideen</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 mt-3">
                <a
                  href="tel:+919962584211"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#3498db]/80 backdrop-blur-sm text-white text-xs font-[family-name:var(--font-oswald)] uppercase tracking-wider hover:bg-[#2980b9] transition-all hover:-translate-y-0.5 border border-white/10"
                >
                  <Phone size={12} /> Call
                </a>
                <a
                  href="https://wa.me/919962584211"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366]/80 backdrop-blur-sm text-white text-xs font-[family-name:var(--font-oswald)] uppercase tracking-wider hover:bg-[#1ebe5d] transition-all hover:-translate-y-0.5 border border-white/10"
                >
                  <MessageCircle size={12} /> WhatsApp
                </a>
                <button
                  onClick={(e) => { e.stopPropagation(); saveContact(); }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-xs font-[family-name:var(--font-oswald)] uppercase tracking-wider hover:bg-white/20 transition-all hover:-translate-y-0.5 border border-white/20"
                >
                  <UserPlus size={12} /> Save
                </button>
              </div>

              {/* Mobile flip hint */}
              <div className="md:hidden flex items-center gap-1 text-[10px] text-white/30 mt-2">
                <RotateCcw size={10} /><span>Tap to flip</span>
              </div>
            </div>
          </CardFace>

          {/* ── BACK ──────────────────────────────── */}
          <CardFace flipped>
            <div className="flex flex-col justify-center h-full p-6 sm:p-8 gap-3">
              <h2 className="metallic-text font-[family-name:var(--font-oswald)] font-bold text-base sm:text-xl uppercase tracking-wide text-center pb-3 border-b border-white/10">
                P M INDUSTRIAL SUPPLIERS
              </h2>

              <div className="flex flex-col gap-2.5">
                {/* Bank */}
                <div className="rounded-xl px-4 py-2.5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest mb-0.5">Bank</p>
                  <p className="text-white font-medium text-xs sm:text-sm">ICICI BANK — KILPAUK BRANCH</p>
                </div>
                {/* Account */}
                <div className="rounded-xl px-4 py-2.5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest mb-0.5">Account No</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium tracking-widest text-xs sm:text-sm">0278 0500 4754</span>
                    <CopyButton label="027805004754" />
                  </div>
                </div>
                {/* IFSC */}
                <div className="rounded-xl px-4 py-2.5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest mb-0.5">IFSC</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium tracking-widest text-xs sm:text-sm">ICIC0000278</span>
                    <CopyButton label="ICIC0000278" />
                  </div>
                </div>
              </div>

              {/* Mobile flip hint */}
              <div className="md:hidden flex items-center gap-1 text-[10px] text-white/30 mt-1">
                <RotateCcw size={10} /><span>Tap to flip</span>
              </div>
            </div>
          </CardFace>
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#services"
        className="animate-bounce-arrow absolute bottom-8 left-1/2 text-white/40 hover:text-[#3498db] transition-all"
        aria-label="Scroll to services"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
