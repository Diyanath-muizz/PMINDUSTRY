"use client";

import { Layers, Boxes, Truck, Weight, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: { name: string; Icon: LucideIcon; description: string; color: string }[] = [
  {
    name: "Iron Scrap Trading",
    Icon: Zap,
    description: "High-volume iron scrap buying & selling.",
    color: "#e07b39",
  },
  {
    name: "Ferrous Metal Supply",
    Icon: Layers,
    description: "Reliable supply of ferrous grade metals.",
    color: "#3498db",
  },
  {
    name: "Non-Ferrous Scrap",
    Icon: Boxes,
    description: "Copper, aluminium, brass & more.",
    color: "#a855f7",
  },
  {
    name: "Industrial Procurement",
    Icon: Truck,
    description: "End-to-end industrial scrap procurement.",
    color: "#22c55e",
  },
  {
    name: "Bulk Scrap Supply",
    Icon: Weight,
    description: "High-capacity bulk orders handled with ease.",
    color: "#f59e0b",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <style>{`
        @keyframes iconPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.85; }
        }
        @keyframes ringExpand {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .service-card-item:hover .icon-ring {
          animation: ringExpand 0.7s ease-out forwards;
        }
        .service-card-item:hover .icon-svg {
          animation: iconPulse 0.6s ease-in-out;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="metallic-text font-[family-name:var(--font-oswald)] font-bold text-4xl uppercase text-center tracking-wide mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ name, Icon, description, color }) => (
            <div key={name} className="service-card-item glass-box p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300 cursor-default">
              {/* Animated icon ring + icon */}
              <div className="relative flex items-center justify-center mb-6" style={{ width: 80, height: 80 }}>
                {/* Background ring that expands on hover */}
                <span
                  className="icon-ring absolute inset-0 rounded-full"
                  style={{ border: `2px solid ${color}`, opacity: 0 }}
                />
                {/* Icon background circle */}
                <span
                  className="absolute inset-0 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: color }}
                />
                <Icon
                  className="icon-svg relative z-10 transition-colors duration-300"
                  size={36}
                  style={{ color, filter: `drop-shadow(0 0 8px ${color}80)` }}
                />
              </div>

              {/* Text */}
              <h3 className="font-[family-name:var(--font-oswald)] text-lg uppercase tracking-wide text-white mb-2">
                {name}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
