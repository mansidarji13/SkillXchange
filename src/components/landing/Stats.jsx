import { Users, BookOpen, CheckCircle, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Active Learners",
  },
  {
    icon: BookOpen,
    value: "120+",
    label: "Skills Available",
  },
  {
    icon: CheckCircle,
    value: "980+",
    label: "Sessions Completed",
  },
  {
    icon: Star,
    value: "4.8",
    label: "Average Rating",
  },
];

function Stats() {
  return (
    <section className="border-y border-white/5 bg-[#0d0920]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-6 min-[400px]:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
               className="group flex items-center justify-center gap-3 sm:gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500/20">
                  <Icon size={20} />
                </div>

                <div>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    {stat.value}
                  </p>

                  <p className="text-xs text-slate-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;