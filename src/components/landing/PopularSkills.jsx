import {
  Code2,
  Palette,
  Database,
  FileSpreadsheet,
  Video,
  BarChart3,
  Megaphone,
  Languages,
  ArrowUpRight,
} from "lucide-react";

const skills = [
  {
    name: "Python",
    category: "Programming",
    learners: "25 Teachers",
    rating: "4.8",
    icon: Code2,
  },
  {
    name: "UI/UX Design",
    category: "Design",
    learners: "14 Teachers",
    rating: "4.9",
    icon: Palette,
  },
  {
    name: "Django",
    category: "Programming",
    learners: "12 Teachers",
    rating: "4.8",
    icon: Database,
  },
  {
    name: "Excel",
    category: "Productivity",
    learners: "20 Teachers",
    rating: "4.5",
    icon: FileSpreadsheet,
  },
  {
    name: "Video Editing",
    category: "Creative",
    learners: "10 Teachers",
    rating: "4.4",
    icon: Video,
  },
  {
    name: "Data Analysis",
    category: "Data",
    learners: "8 Teachers",
    rating: "4.6",
    icon: BarChart3,
  },
  {
    name: "Public Speaking",
    category: "Life Skills",
    learners: "7 Teachers",
    rating: "4.7",
    icon: Megaphone,
  },
  {
    name: "Languages",
    category: "Communication",
    learners: "18 Teachers",
    rating: "4.8",
    icon: Languages,
  },
];

function PopularSkills() {
  return (
    <section
      id="skills"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-violet-600">
              Explore Skills
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Discover Something New
            </h2>

            <p className="mt-4 max-w-xl text-slate-500">
              Explore skills shared by learners and mentors in the
              SkillXchange community.
            </p>
          </div>

          <button className="group flex w-full items-center justify-center gap-2 rounded-xl border border-violet-200 px-5 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50 sm:w-auto">
            Browse All Skills
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/40"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <div className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-600">
                    ★ {skill.rating}
                  </div>
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {skill.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-violet-600">
                  {skill.category}
                </p>

                <p className="mt-3 text-xs text-slate-400">
                  {skill.learners}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PopularSkills;