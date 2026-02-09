import { Clock, Wind, TreePine, AlertTriangle, Check } from "lucide-react";

export function RouteComparison() {
  return (
    <section id="routes" className="py-24 sm:py-32 px-6 bg-white/40">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-3">
            See the difference
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight mb-6">
            Two routes. Same destination.<br />Different air.
          </h2>
          <p className="text-text/60 text-lg leading-relaxed">
            BreatheMap shows you the pollution score for every route, so you can
            make an informed choice — not just a fast one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Polluted route */}
          <div className="bg-white rounded-2xl border-2 border-orange-200/60 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-50 text-orange-600 text-xs font-medium px-3 py-1.5 rounded-bl-xl">
              Fastest route
            </div>

            <div className="mt-4 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-sm font-medium text-text/70">Via Main Street & Highway Overpass</span>
              </div>

              {/* Mini route visualization */}
              <div className="my-5 bg-orange-50/50 rounded-xl p-4">
                <svg viewBox="0 0 300 80" className="w-full" fill="none">
                  <path
                    d="M 20 60 Q 80 60 120 30 Q 160 0 200 20 Q 240 40 280 20"
                    stroke="#d4836a"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="6 4"
                  />
                  <circle cx="20" cy="60" r="4" fill="#d4836a" />
                  <circle cx="280" cy="20" r="4" fill="#d4836a" />
                  {/* Pollution clouds */}
                  <circle cx="100" cy="40" r="18" fill="#d4836a" opacity="0.08" />
                  <circle cx="160" cy="20" r="22" fill="#d4836a" opacity="0.1" />
                  <circle cx="230" cy="30" r="16" fill="#d4836a" opacity="0.08" />
                  <text x="100" y="44" textAnchor="middle" fontSize="14" opacity="0.4">☁</text>
                  <text x="160" y="24" textAnchor="middle" fontSize="14" opacity="0.4">☁</text>
                  <text x="230" y="34" textAnchor="middle" fontSize="14" opacity="0.4">☁</text>
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-text/60">
                  <Clock className="h-4 w-4" strokeWidth={1.5} />
                  Travel time
                </span>
                <span className="font-medium text-text">12 min</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-text/60">
                  <Wind className="h-4 w-4" strokeWidth={1.5} />
                  Air quality score
                </span>
                <span className="font-semibold text-orange-500 flex items-center gap-1">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  Poor (142 AQI)
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-text/60">
                  <TreePine className="h-4 w-4" strokeWidth={1.5} />
                  Green coverage
                </span>
                <span className="font-medium text-text/50">8%</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-orange-100">
              <p className="text-xs text-orange-600/80 leading-relaxed">
                Passes through heavy traffic zone. Exposure to PM2.5 and NO₂
                elevated during peak hours.
              </p>
            </div>
          </div>

          {/* Clean route */}
          <div className="bg-white rounded-2xl border-2 border-primary/30 p-6 relative overflow-hidden shadow-lg shadow-secondary/30">
            <div className="absolute top-0 right-0 bg-secondary text-primary text-xs font-medium px-3 py-1.5 rounded-bl-xl flex items-center gap-1">
              <Check className="h-3 w-3" />
              BreatheMap pick
            </div>

            <div className="mt-4 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-text/70">Via Riverside Path & Park Lane</span>
              </div>

              {/* Mini route visualization */}
              <div className="my-5 bg-secondary/30 rounded-xl p-4">
                <svg viewBox="0 0 300 80" className="w-full" fill="none">
                  <path
                    d="M 20 60 Q 60 50 100 50 Q 160 50 200 35 Q 240 20 280 20"
                    stroke="var(--primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="20" cy="60" r="4" fill="var(--primary)" />
                  <circle cx="280" cy="20" r="4" fill="var(--primary)" />
                  {/* Trees */}
                  <text x="70" y="42" fontSize="12" opacity="0.5">🌳</text>
                  <text x="130" y="42" fontSize="12" opacity="0.5">🌿</text>
                  <text x="190" y="28" fontSize="12" opacity="0.5">🌳</text>
                  <text x="250" y="15" fontSize="12" opacity="0.5">🌿</text>
                  {/* Green glow */}
                  <circle cx="100" cy="50" r="20" fill="var(--primary)" opacity="0.04" />
                  <circle cx="200" cy="35" r="24" fill="var(--primary)" opacity="0.04" />
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-text/60">
                  <Clock className="h-4 w-4" strokeWidth={1.5} />
                  Travel time
                </span>
                <span className="font-medium text-text">15 min</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-text/60">
                  <Wind className="h-4 w-4" strokeWidth={1.5} />
                  Air quality score
                </span>
                <span className="font-semibold text-primary flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" />
                  Good (38 AQI)
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-text/60">
                  <TreePine className="h-4 w-4" strokeWidth={1.5} />
                  Green coverage
                </span>
                <span className="font-medium text-primary">72%</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-secondary">
              <p className="text-xs text-primary/80 leading-relaxed">
                Follows tree-lined paths with low traffic. Only 3 minutes
                longer — but 73% less pollution exposure.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-text/40 mt-8 max-w-md mx-auto">
          3 extra minutes. 73% less pollution. That's the kind of trade-off
          BreatheMap helps you see.
        </p>
      </div>
    </section>
  );
}
