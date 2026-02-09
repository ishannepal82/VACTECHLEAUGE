import { Wind, ArrowDown, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-text">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-morph" />
        <div className="absolute bottom-[0%] right-[-5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-morph [animation-delay:2s]" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${10 + i * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-secondary border border-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm animate-slide-down">
          <Wind className="h-4 w-4 animate-pulse" />
          <span>A public-good project for cleaner commutes</span>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-6 leading-none animate-fade-in-up">
          Breathe<span className="text-primary drop-shadow-sm">Map</span>
        </h1>

        <p className="text-xl sm:text-2xl opacity-80 font-light leading-relaxed mb-6 animate-fade-in-up [animation-delay:200ms]">
          Maps that care about your lungs.
        </p>

        <p className="text-base opacity-60 max-w-lg mx-auto mb-12 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          Navigate your city through cleaner air. Choose routes that protect
          your health — without changing your routine.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up [animation-delay:600ms]">
          <a
            href="#join"
            className="group relative bg-primary text-background px-10 py-4 rounded-full text-base font-bold transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(var(--primary),0.4)]"
          >
            Join the waitlist
          </a>
          <a
            href="#why"
            className="group opacity-60 px-6 py-4 rounded-full text-base font-bold hover:opacity-100 transition-opacity flex items-center gap-2"
          >
            Learn more
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
        </div>

        <div className="mt-20 mx-auto max-w-lg animate-zoom-in [animation-delay:800ms]">
          <div className="bg-secondary/50 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-primary/5 p-8 relative hover:rotate-1 transition-transform duration-500">
            <div className="absolute -top-4 -left-4 bg-accent text-background p-3 rounded-2xl shadow-lg animate-bounce [animation-duration:3s]">
               <ShieldCheck size={20} />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-background p-3 rounded-2xl shadow-lg animate-pulse">
               <Zap size={20} />
            </div>
            <MapIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function MapIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full" fill="none">
      {[...Array(9)].map((_, i) => (
        <line key={i} x1={50 * (i + 1)} y1="0" x2={50 * (i + 1)} y2="200" stroke="currentColor" className="opacity-5" strokeWidth="1" />
      ))}
      <path
        d="M 40 170 Q 80 150 120 150 Q 180 150 220 130 Q 280 100 320 70 Q 340 55 360 40"
        stroke="var(--accent)"
        strokeWidth="4"
        strokeLinecap="round"
        className="animate-draw-path"
        style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
      />
      <circle cx="40" cy="170" r="6" fill="var(--accent)" className="animate-pulse" />
      <circle cx="360" cy="40" r="6" fill="var(--accent)" />
      <text x="200" y="190" textAnchor="middle" fontSize="10" fill="currentColor" className="font-bold tracking-widest uppercase opacity-40">
        Safe Passage Confirmed
      </text>
    </svg>
  );
}