import { MapPin, Trash2, BarChart3, Users } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Report polluted areas",
    description:
      "Spot a construction site, heavy traffic zone, or burning waste? Pin it on the map. Your report instantly helps other commuters avoid it.",
    color: "bg-orange-50 text-orange-500",
  },
  {
    icon: Trash2,
    title: "Log cleanup actions",
    description:
      "Picked up litter in a park? Organized a neighborhood cleanup? Log it on BreatheMap and watch the area's score improve over time.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BarChart3,
    title: "Data gets smarter",
    description:
      "Community reports are combined with sensor data and satellite imagery to create a living, breathing pollution map that gets more accurate every day.",
    color: "bg-secondary text-primary",
  },
  {
    icon: Users,
    title: "Neighborhoods improve",
    description:
      "When enough people report and act, local governments notice. BreatheMap data has already been used in urban planning conversations.",
    color: "bg-violet-50 text-violet-500",
  },
];

export function Community() {
  return (
    <section id="community" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-3">
              Community powered
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight mb-6">
              The map gets better because people care
            </h2>
            <p className="text-text/60 text-lg leading-relaxed mb-10">
              BreatheMap isn't just an app — it's a collective effort.
              Every report, every cleanup, every shared route makes the map
              more useful for everyone.
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${step.color}`}
                  >
                    <step.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text/55 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community map visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl shadow-secondary/40 border border-secondary p-6 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary/60" />
                <span className="text-xs text-text/50 font-medium">
                  Community activity — Last 7 days
                </span>
              </div>

              <CommunityMapSVG />

              <div className="mt-4 flex items-center justify-between text-xs text-text/40">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                    Pollution reports
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Cleanup actions
                  </span>
                </div>
              </div>
            </div>

            {/* Floating notification cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg shadow-secondary/30 border border-secondary p-3 max-w-[200px] animate-pulse">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <Trash2 className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-text">Maria L.</span>
                  <span className="text-text/40"> cleaned up Elm Park</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg shadow-secondary/30 border border-secondary p-3 max-w-[220px]">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-6 h-6 bg-orange-50 rounded-full flex items-center justify-center">
                  <MapPin className="h-3 w-3 text-orange-500" />
                </div>
                <div>
                  <span className="font-medium text-text">Jun K.</span>
                  <span className="text-text/40"> reported smoke near 5th Ave</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityMapSVG() {
  return (
    <svg viewBox="0 0 350 250" className="w-full" fill="none">
      {/* Grid / street pattern */}
      {[...Array(7)].map((_, i) => (
        <line
          key={`v${i}`}
          x1={50 * (i + 1)}
          y1="0"
          x2={50 * (i + 1)}
          y2="250"
          stroke="var(--secondary)"
          strokeWidth="0.5"
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <line
          key={`h${i}`}
          x1="0"
          y1={50 * (i + 1)}
          x2="350"
          y2={50 * (i + 1)}
          stroke="var(--secondary)"
          strokeWidth="0.5"
        />
      ))}

      {/* Blocks */}
      <rect x="60" y="30" width="80" height="60" rx="6" fill="var(--secondary)" opacity="0.4" />
      <rect x="180" y="40" width="100" height="50" rx="6" fill="var(--secondary)" opacity="0.4" />
      <rect x="40" y="130" width="90" height="70" rx="6" fill="var(--secondary)" opacity="0.4" />
      <rect x="170" y="120" width="70" height="80" rx="6" fill="var(--secondary)" opacity="0.4" />
      <rect x="270" y="140" width="60" height="60" rx="6" fill="var(--secondary)" opacity="0.4" />

      {/* Green zones */}
      <rect x="60" y="30" width="80" height="60" rx="6" fill="var(--primary)" opacity="0.06" />
      <text x="100" y="65" textAnchor="middle" fontSize="18" opacity="0.3">🌳</text>

      {/* Pollution report pins (orange) */}
      <g>
        <circle cx="160" cy="100" r="8" fill="#d4836a" opacity="0.15" />
        <circle cx="160" cy="100" r="3" fill="#d4836a" />
      </g>
      <g>
        <circle cx="250" cy="60" r="8" fill="#d4836a" opacity="0.15" />
        <circle cx="250" cy="60" r="3" fill="#d4836a" />
      </g>
      <g>
        <circle cx="300" cy="180" r="8" fill="#d4836a" opacity="0.15" />
        <circle cx="300" cy="180" r="3" fill="#d4836a" />
      </g>

      {/* Cleanup action pins (green/primary) */}
      <g>
        <circle cx="90" cy="170" r="8" fill="var(--primary)" opacity="0.15" />
        <circle cx="90" cy="170" r="3" fill="var(--primary)" />
        <circle cx="90" cy="170" r="12" fill="none" stroke="var(--primary)" strokeWidth="1" opacity="0.2" />
      </g>
      <g>
        <circle cx="200" cy="200" r="8" fill="var(--primary)" opacity="0.15" />
        <circle cx="200" cy="200" r="3" fill="var(--primary)" />
        <circle cx="200" cy="200" r="12" fill="none" stroke="var(--primary)" strokeWidth="1" opacity="0.2" />
      </g>
      <g>
        <circle cx="120" cy="50" r="8" fill="var(--primary)" opacity="0.15" />
        <circle cx="120" cy="50" r="3" fill="var(--primary)" />
        <circle cx="120" cy="50" r="12" fill="none" stroke="var(--primary)" strokeWidth="1" opacity="0.2" />
      </g>

      {/* Improvement zone — cleaned area */}
      <rect x="40" y="130" width="90" height="70" rx="6" fill="var(--primary)" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 3" opacity="0.15" />
      <text x="85" y="175" textAnchor="middle" fontSize="9" fill="var(--primary)" opacity="0.6" fontFamily="system-ui">cleaned</text>
    </svg>
  );
}
