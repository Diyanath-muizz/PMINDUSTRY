export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.08] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-6">
        <div>
          <h3 className="metallic-text font-[family-name:var(--font-oswald)] font-bold text-2xl uppercase tracking-wide">
            PM INDUSTRIAL SUPPLIERS
          </h3>
          <p className="text-[#3498db] font-[family-name:var(--font-oswald)] tracking-widest text-sm mt-1 uppercase">
            Industrial Scrap Dealers
          </p>
        </div>

        <div className="text-[#aeb6bf] text-sm leading-relaxed">
          <p>Founded by <span className="text-white">Peer Mohamed</span></p>
          <p>
            Managed by{" "}
            <span className="text-white">Mohamed Hussain</span> &{" "}
            <span className="text-white">Khaja Mohaideen</span>
          </p>
        </div>

        <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <p className="text-[#52667a] text-xs">&copy; 2025 PM Industrial Suppliers. All rights reserved.</p>
      </div>
    </footer>
  );
}
