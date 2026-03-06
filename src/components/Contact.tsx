import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="metallic-text font-[family-name:var(--font-oswald)] font-bold text-4xl uppercase text-center tracking-wide mb-12">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact panel */}
          <div className="glass-box p-7 flex flex-col gap-4">
            <h3 className="font-[family-name:var(--font-oswald)] text-base uppercase tracking-[3px] text-white/50 mb-1">
              Get in Touch
            </h3>

            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+919962584211"
                className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-[#3498db]/15 border border-[#3498db]/30 text-white text-sm font-medium hover:bg-[#3498db]/25 hover:-translate-y-0.5 transition-all"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#3498db] shrink-0">
                  <Phone size={14} />
                </span>
                <span>
                  <span className="block text-[10px] text-white/40 uppercase tracking-wider font-[family-name:var(--font-oswald)]">Mohamed Hussain</span>
                  <span className="tracking-wide text-white">+91 9962584211</span>
                </span>
              </a>

              <a
                href="tel:+917305161297"
                className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-[#52667a]/20 border border-white/10 text-white text-sm font-medium hover:bg-[#52667a]/30 hover:-translate-y-0.5 transition-all"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#52667a] shrink-0">
                  <Phone size={14} />
                </span>
                <span>
                  <span className="block text-[10px] text-white/40 uppercase tracking-wider font-[family-name:var(--font-oswald)]">Khaja Mohaideen</span>
                  <span className="tracking-wide text-white">+91 7305161297</span>
                </span>
              </a>

              <a
                href="https://wa.me/919962584211"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-white text-sm font-medium hover:bg-[#25D366]/25 hover:-translate-y-0.5 transition-all"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#25D366] shrink-0">
                  <MessageCircle size={14} />
                </span>
                <span className="tracking-wide">WhatsApp</span>
              </a>

              <a
                href="mailto:info@pmsuppliers.com"
                className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:-translate-y-0.5 transition-all"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2c3e50] shrink-0">
                  <Mail size={14} />
                </span>
                <span className="tracking-wide">info@pmsuppliers.com</span>
              </a>
            </div>

            {/* Address */}
            <a
              href="https://www.google.com/maps/place/P.M+Industrial+Suppliers/@13.123012,80.2723569,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-white/40 hover:text-[#3498db] text-xs transition-colors mt-1 leading-relaxed"
            >
              <MapPin size={13} className="shrink-0 mt-0.5 text-[#3498db]" />
              <span>
                47FG+6V5, Ennore High Rd, Meenambal Nagar,<br />
                Pudumanaikuppam, Old Washermanpet,<br />
                Chennai, Tamil Nadu 600021
              </span>
            </a>
          </div>

          {/* Google Map — pinned to PM Industrial Suppliers */}
          <div className="glass-box overflow-hidden p-0 min-h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7563897870196!2d80.27235687454655!3d13.12301288711888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f7e1b2c5fed%3A0xfe2856953531c606!2sP.M%20Industrial%20Suppliers!5e0!3m2!1sen!2sin!4v1741233000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PM Industrial Suppliers — Ennore High Rd, Chennai"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
