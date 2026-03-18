export default function Footer() {
  return (
    <footer className="section-dark py-8 px-6 md:px-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="font-[family-name:var(--font-display)] text-sm font-bold text-text-muted-light/50 tracking-tighter">
          <span className="text-white/60">S</span><span className="text-lime/60">N</span>
        </span>
        <span className="text-[11px] text-text-muted-light/30">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
