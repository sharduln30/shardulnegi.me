export default function Footer() {
  return (
    <footer className="border-t border-f1-border">
      <div className="checkered-divider w-full" />
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-orbitron)] text-sm font-bold text-f1-red">
            SN
          </span>
          <span className="text-f1-muted text-xs font-[family-name:var(--font-mono)]">
            &copy; {new Date().getFullYear()} Shardul Negi
          </span>
        </div>

        <p className="text-f1-muted/50 text-[10px] font-[family-name:var(--font-mono)] tracking-wider">
          BUILT WITH NEXT.JS &middot; DEPLOYED ON VERCEL
        </p>
      </div>
    </footer>
  );
}
