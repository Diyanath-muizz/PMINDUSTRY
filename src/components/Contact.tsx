import { Phone, MessageCircle, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="metallic-text font-[family-name:var(--font-oswald)] font-bold text-4xl uppercase text-center tracking-wide mb-12">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Buttons */}
          <div className="glass-box p-8 flex flex-col justify-between gap-4">
            <h3 className="font-[family-name:var(--font-oswald)] text-xl uppercase text-white tracking-wider mb-2">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919962584211"
                className="flex items-center justify-center gap-3 py-3 px-5 rounded-lg bg-[#3498db] text-white font-[family-name:var(--font-oswald)] uppercase tracking-wider text-lg hover:bg-[#2980b9] hover:-translate-y-1 transition-all shadow-lg shadow-blue-900/30"
              >
                <Phone size={18} /> Mohamed Hussain — 9962584211
              </a>
              <a
                href="tel:+917305161297"
                className="flex items-center justify-center gap-3 py-3 px-5 rounded-lg bg-[#52667a] text-white font-[family-name:var(--font-oswald)] uppercase tracking-wider text-lg hover:bg-[#3d4f60] hover:-translate-y-1 transition-all"
              >
                <Phone size={18} /> Khaja Mohaideen — 7305161297
              </a>
              <a
                href="https://wa.me/919962584211"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-3 px-5 rounded-lg bg-[#25D366] text-white font-[family-name:var(--font-oswald)] uppercase tracking-wider text-lg hover:bg-[#1ebe5d] hover:-translate-y-1 transition-all shadow-lg shadow-green-900/30"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a
                href="mailto:info@pmsuppliers.com"
                className="flex items-center justify-center gap-3 py-3 px-5 rounded-lg bg-[#2c3e50] text-white font-[family-name:var(--font-oswald)] uppercase tracking-wider text-lg hover:bg-[#243342] hover:-translate-y-1 transition-all"
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="glass-box overflow-hidden p-0 min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15542.483161324024!2d80.27641321034375!3d13.123136220803936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f874ab0a4a5%3A0xc39ad9bd8eb697ba!2sOld%20Washermanpet%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709733022139!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PM Industrial Suppliers Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
