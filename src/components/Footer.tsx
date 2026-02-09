import { Wind, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-secondary py-12 px-6 bg-white/30">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-primary/60" strokeWidth={1.5} />
            <span className="text-sm font-medium text-text/60">
              BreatheMap
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-text/40">
            <a href="#why" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#community" className="hover:text-primary transition-colors">
              Community
            </a>
            <span>Open Source</span>
          </div>

          <p className="text-xs text-text/30 flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-primary/60 fill-primary/60" /> for cleaner cities
          </p>
        </div>
      </div>
    </footer>
  );
}
