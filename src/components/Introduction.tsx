import { Heart, Route, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Your lungs absorb more when active",
    description:
      "Walking and cycling increases your breathing rate by 2–5×. The air quality of your route matters more than you think.",
  },
  {
    icon: Route,
    title: "A cleaner path is often just one street over",
    description:
      "Pollution levels can vary dramatically between parallel streets. A small detour can mean significantly cleaner air.",
  },
  {
    icon: Leaf,
    title: "Daily choices add up",
    description:
      "Over a year, choosing cleaner routes can reduce your pollution exposure by up to 20%. Small changes, real impact.",
  },
];

export function Introduction() {
  return (
    <section id="why" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-3">
            Why it matters
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight mb-6">
            The air you breathe depends on the route you take
          </h2>
          <p className="text-text/60 text-lg leading-relaxed">
            Most navigation apps optimize for speed. But for the millions who
            walk, cycle, or wait at bus stops every day, the fastest route
            isn't always the healthiest one. BreatheMap gives you a choice.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-secondary hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mb-5">
                <reason.icon
                  className="h-5 w-5 text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-semibold text-text mb-3">
                {reason.title}
              </h3>
              <p className="text-text/60 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stat callout */}
        <div className="mt-16 bg-secondary/40 rounded-2xl p-8 sm:p-12 border border-secondary text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div>
              <div className="text-4xl font-bold text-primary mb-1">53%</div>
              <div className="text-sm text-text/50">
                of urban commuters are regularly exposed to unsafe air levels
              </div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-primary/20" />
            <div>
              <div className="text-4xl font-bold text-primary mb-1">2–5×</div>
              <div className="text-sm text-text/50">
                more air inhaled while cycling compared to sitting in a car
              </div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-primary/20" />
            <div>
              <div className="text-4xl font-bold text-primary mb-1">20%</div>
              <div className="text-sm text-text/50">
                less pollution exposure through smarter route choices
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
