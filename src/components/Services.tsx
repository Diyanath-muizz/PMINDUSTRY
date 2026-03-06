"use client";

import dynamic from "next/dynamic";

// Dynamically import with no SSR to avoid hydration issues
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false, loading: () => <div className="w-[100px] h-[100px] mb-5" /> }
);

const services = [
  {
    name: "Iron Scrap Trading",
    src: "https://lottie.host/81a967f6-cd29-450f-a78c-02cfc627f12c/dGMBq6Ocd8.json",
  },
  {
    name: "Ferrous Metal Supply",
    src: "https://lottie.host/5753bde8-d8db-4aa6-bcdd-263a242bd5af/45lY1d7N2Q.json",
  },
  {
    name: "Non-Ferrous Scrap Trading",
    src: "https://lottie.host/8cd85d47-6df7-43ca-adbd-fbd90f9bb168/v2mR8RHTA8.json",
  },
  {
    name: "Industrial Scrap Procurement",
    src: "https://lottie.host/8cb090b8-490b-4835-abfa-3d17d12f518e/XvBwI9j1Bw.json",
  },
  {
    name: "Bulk Scrap Supply",
    src: "https://lottie.host/0a8a68b4-bdf7-4001-8bca-6e108cf14578/OQf5qE1F9n.json",
  },
];

function ServiceCard({ name, src }: { name: string; src: string }) {
  return (
    <div className="glass-box p-8 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform duration-300">
      <Player
        autoplay
        loop
        src={src}
        style={{ height: "100px", width: "100px", marginBottom: "1.25rem" }}
        className="group-hover:scale-110 transition-transform duration-300"
      />
      <h3 className="font-[family-name:var(--font-oswald)] text-lg uppercase tracking-wide text-white">
        {name}
      </h3>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="metallic-text font-[family-name:var(--font-oswald)] font-bold text-4xl uppercase text-center tracking-wide mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.name} name={s.name} src={s.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
