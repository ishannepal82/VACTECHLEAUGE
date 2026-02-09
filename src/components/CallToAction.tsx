import { useState } from "react";
import { Wind, ArrowRight, Check } from "lucide-react";

export function CallToAction() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="join" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="bg-gradient-to-b from-secondary/50 to-white rounded-3xl border border-secondary p-10 sm:p-16 relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/10 rounded-full opacity-20 blur-3xl translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary rounded-2xl mb-6">
              <Wind className="h-7 w-7 text-primary" strokeWidth={1.5} />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight mb-4">
              Breathe easier on your next commute
            </h2>

            <p className="text-text/55 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              BreatheMap is coming soon. Join the waitlist and be among the
              first to navigate with your health in mind. No spam — just a
              heads up when we launch.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full sm:flex-1 px-5 py-3.5 rounded-full border border-secondary bg-white text-sm text-text placeholder:text-text/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary text-white px-7 py-3.5 rounded-full text-sm font-medium hover:brightness-110 transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Join waitlist
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-primary bg-secondary rounded-full px-6 py-3.5 max-w-sm mx-auto">
                <Check className="h-5 w-5" />
                <span className="font-medium text-sm">
                  You're on the list. We'll be in touch!
                </span>
              </div>
            )}

            <p className="text-xs text-text/30 mt-6">
              Free to use. Open data. Built for public good.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
