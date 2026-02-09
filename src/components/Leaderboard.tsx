import { Award, MapPin, Trash2, TrendingUp } from "lucide-react";

const leaders = [
  {
    rank: 1,
    name: "Maria L.",
    location: "São Paulo",
    avatar: "🌿",
    points: 2840,
    reports: 47,
    cleanups: 12,
    badge: "Air Guardian",
    highlight: true,
  },
  {
    rank: 2,
    name: "Jun K.",
    location: "Seoul",
    avatar: "🌱",
    points: 2310,
    reports: 63,
    cleanups: 8,
    badge: "Pollution Spotter",
    highlight: false,
  },
  {
    rank: 3,
    name: "Amara O.",
    location: "Lagos",
    avatar: "🍃",
    points: 1980,
    reports: 31,
    cleanups: 15,
    badge: "Clean Streets Hero",
    highlight: false,
  },
  {
    rank: 4,
    name: "Liam W.",
    location: "London",
    avatar: "🌳",
    points: 1720,
    reports: 29,
    cleanups: 9,
    badge: "Community Builder",
    highlight: false,
  },
  {
    rank: 5,
    name: "Priya S.",
    location: "Delhi",
    avatar: "🌻",
    points: 1540,
    reports: 52,
    cleanups: 4,
    badge: "Watchful Eye",
    highlight: false,
  },
];

export function Leaderboard() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-white/40">
      <div className="mx-auto max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-3">
            People making a difference
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight mb-6">
            Every action counts
          </h2>
          <p className="text-text/60 text-lg leading-relaxed">
            BreatheMap celebrates people who report pollution and take action
            to clean their neighborhoods. Here are some of the people making
            their cities more breathable.
          </p>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-2xl shadow-lg shadow-secondary/30 border border-secondary overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-secondary/60 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-text/70">
              <Award className="h-4 w-4 text-primary" strokeWidth={1.5} />
              Community Leaderboard
            </div>
            <span className="text-xs text-text/40">This month</span>
          </div>

          {/* List */}
          <div className="divide-y divide-secondary/40">
            {leaders.map((leader) => (
              <div
                key={leader.rank}
                className={`px-6 py-4 flex items-center gap-4 transition-colors hover:bg-secondary/20 ${
                  leader.highlight ? "bg-secondary/30" : ""
                }`}
              >
                {/* Rank */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    leader.rank === 1
                      ? "bg-primary text-white"
                      : leader.rank === 2
                      ? "bg-secondary text-primary"
                      : leader.rank === 3
                      ? "bg-secondary/60 text-primary"
                      : "bg-secondary/30 text-text/40"
                  }`}
                >
                  {leader.rank}
                </div>

                {/* Avatar */}
                <div className="w-9 h-9 bg-secondary/50 rounded-full flex items-center justify-center text-lg shrink-0">
                  {leader.avatar}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-text">
                      {leader.name}
                    </span>
                    <span className="text-xs text-text/40 hidden sm:inline">
                      {leader.location}
                    </span>
                  </div>
                  <span className="text-xs text-primary font-medium">
                    {leader.badge}
                  </span>
                </div>

                {/* Stats */}
                <div className="hidden sm:flex items-center gap-6 text-xs text-text/50">
                  <span className="flex items-center gap-1" title="Pollution reports">
                    <MapPin className="h-3 w-3" strokeWidth={1.5} />
                    {leader.reports}
                  </span>
                  <span className="flex items-center gap-1" title="Cleanups">
                    <Trash2 className="h-3 w-3" strokeWidth={1.5} />
                    {leader.cleanups}
                  </span>
                </div>

                {/* Points */}
                <div className="text-right shrink-0">
                  <div className="text-sm font-bold text-primary flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {leader.points.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-text/30">points</div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-secondary/40 bg-secondary/15 text-center">
            <p className="text-xs text-text/40">
              Points are earned by reporting pollution, completing cleanups, and helping verify community data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
