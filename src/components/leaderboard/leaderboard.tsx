type Cleaner = {
  name: string;
  area: string;
  time: string;
  points: number;
};

const cleaners: Cleaner[] = [
  { name: "Rahul K", area: "1.8 km²", time: "42 min", points: 9765 },
  { name: "Jia S", area: "1.4 km²", time: "1h 5m", points: 7567 },
  { name: "Manish P", area: "1.1 km²", time: "56 min", points: 6674 },
];

export default function Leaderboard() {
  return (
    <div className="glass p-6 rounded-2xl shadow-xl">
      <h3 className="text-2xl font-bold text-center mb-4">🏆 Leaderboard</h3>
      <div className="space-y-4">
        {cleaners.map((c, i) => (
          <div
            key={c.name}
            className="flex justify-between items-center bg-white/70 rounded-xl p-4 hover:scale-[1.02] transition-all"
          >
            <div>
              <p className="font-bold">{i + 1}. {c.name}</p>
              <p className="text-sm text-gray-600">
                🧹 {c.area} • ⏱ {c.time}
              </p>
            </div>
            <span className="font-bold text-eco">{c.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}