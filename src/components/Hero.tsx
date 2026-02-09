import { Wind, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — soft organic shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-secondary rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-32 -right-24 w-80 h-80 bg-accent/15 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/30 rounded-full opacity-30 blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/50 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${4 + i * 0.7}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); opacity: 0.3; }
          100% { transform: translateY(-30px) scale(1.2); opacity: 0.6; }
        }
      `}</style>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Wind className="h-4 w-4" strokeWidth={1.5} />
          <span>A public-good project for cleaner commutes</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text mb-6 leading-[1.1]">
          Breathe<span className="text-primary">Map</span>
        </h1>

        <p className="text-xl sm:text-2xl text-text/70 font-light leading-relaxed mb-4">
          Maps that care about your lungs.
        </p>

        <p className="text-base text-text/50 max-w-lg mx-auto mb-12 leading-relaxed">
          Navigate your city through cleaner air. Choose routes that protect
          your health — without changing your routine.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#join"
            className="bg-primary text-white px-8 py-3.5 rounded-full text-base font-medium hover:brightness-110 transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
          >
            Join the waitlist
          </a>
          <a
            href="#why"
            className="text-text/60 px-6 py-3.5 rounded-full text-base font-medium hover:text-text transition-colors flex items-center gap-2"
          >
            Learn more
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        {/* Mini map illustration */}
        <div className="mt-16 mx-auto max-w-md">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl shadow-secondary/50 border border-secondary p-6 relative">
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
      {/* Background grid */}
      {[...Array(9)].map((_, i) => (
        <line
          key={`v${i}`}
          x1={50 * (i + 1)}
          y1="0"
          x2={50 * (i + 1)}
          y2="200"
          stroke="var(--secondary)"
          strokeWidth="0.5"
        />
      ))}
      {[...Array(3)].map((_, i) => (
        <line
          key={`h${i}`}
          x1="0"
          y1={50 * (i + 1)}
          x2="400"
          y2={50 * (i + 1)}
          stroke="var(--secondary)"
          strokeWidth="0.5"
        />
      ))}

      {/* Streets / blocks */}
      <rect x="80" y="30" width="60" height="40" rx="4" fill="var(--secondary)" opacity="0.5" />
      <rect x="170" y="20" width="80" height="50" rx="4" fill="var(--secondary)" opacity="0.5" />
      <rect x="280" y="40" width="70" height="35" rx="4" fill="var(--secondary)" opacity="0.5" />
      <rect x="60" y="110" width="90" height="50" rx="4" fill="var(--secondary)" opacity="0.5" />
      <rect x="200" y="120" width="60" height="45" rx="4" fill="var(--secondary)" opacity="0.5" />
      <rect x="300" y="110" width="70" height="55" rx="4" fill="var(--secondary)" opacity="0.5" />

      {/* Polluted route (warm/red) */}
      <path
        d="M 40 170 Q 100 170 150 120 Q 200 70 250 80 Q 300 90 360 40"
        stroke="#d4836a"
        strokeWidth="3"
        strokeDasharray="6 4"
        opacity="0.6"
        strokeLinecap="round"
      />

      {/* Clean route (primary green) */}
      <path
        d="M 40 170 Q 80 150 120 150 Q 180 150 220 130 Q 280 100 320 70 Q 340 55 360 40"
        stroke="var(--primary)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Start point */}
      <circle cx="40" cy="170" r="8" fill="var(--primary)" opacity="0.2" />
      <circle cx="40" cy="170" r="4" fill="var(--primary)" />

      {/* End point */}
      <circle cx="360" cy="40" r="8" fill="var(--primary)" opacity="0.2" />
      <circle cx="360" cy="40" r="4" fill="var(--primary)" />

      {/* Pollution cloud markers */}
      <g opacity="0.5">
        <circle cx="150" cy="110" r="12" fill="#d4836a" opacity="0.15" />
        <text x="150" y="114" textAnchor="middle" fontSize="12" fill="#d4836a">☁</text>
      </g>
      <g opacity="0.5">
        <circle cx="250" cy="75" r="12" fill="#d4836a" opacity="0.15" />
        <text x="250" y="79" textAnchor="middle" fontSize="12" fill="#d4836a">☁</text>
      </g>

      {/* Tree markers on clean route */}
      <text x="120" y="142" fontSize="11" opacity="0.6">🌿</text>
      <text x="220" y="122" fontSize="11" opacity="0.6">🌿</text>
      <text x="310" y="65" fontSize="11" opacity="0.6">🌿</text>

      {/* Labels */}
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="var(--text)" opacity="0.4" fontFamily="system-ui">
        Cleaner route shown in green
      </text>
    </svg>
  );
}
