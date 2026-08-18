import { Link } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  Star,
  Users,
  Clock3,
  ArrowRight,
} from "lucide-react";
import { useMemo, useState } from "react";

const skills = [
  {
    id: 1,
    title: "Python Programming",
    category: "Programming",
    level: "Intermediate",
    teacher: "Aarav Patel",
    initials: "AP",
    rating: "4.9",
    learners: 24,
    availability: "Weekends",
    description:
      "Learn Python fundamentals, problem solving, and build practical projects.",
    color: "violet",
    tags: ["Python", "Programming", "Django"],
  },
  {
    id: 2,
    title: "UI/UX Design",
    category: "Design",
    level: "Beginner",
    teacher: "Riya Shah",
    initials: "RS",
    rating: "4.8",
    learners: 18,
    availability: "Evenings",
    description:
      "Learn modern UI/UX principles, wireframing, user flows, and Figma.",
    color: "pink",
    tags: ["Figma", "UI/UX", "Design"],
  },
  {
    id: 3,
    title: "React Development",
    category: "Programming",
    level: "Intermediate",
    teacher: "Dev Mehta",
    initials: "DM",
    rating: "4.9",
    learners: 31,
    availability: "Weekdays",
    description:
      "Build responsive React applications using components, hooks, and APIs.",
    color: "blue",
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    id: 4,
    title: "Digital Marketing",
    category: "Marketing",
    level: "Beginner",
    teacher: "Ananya Joshi",
    initials: "AJ",
    rating: "4.7",
    learners: 15,
    availability: "Evenings",
    description:
      "Understand social media marketing, content strategy, SEO, and analytics.",
    color: "orange",
    tags: ["SEO", "Marketing", "Social Media"],
  },
  {
    id: 5,
    title: "Photography",
    category: "Creative",
    level: "Beginner",
    teacher: "Kabir Singh",
    initials: "KS",
    rating: "4.8",
    learners: 12,
    availability: "Weekends",
    description:
      "Learn composition, lighting, camera settings, and creative photography.",
    color: "emerald",
    tags: ["Photography", "Camera", "Creative"],
  },
  {
    id: 6,
    title: "Public Speaking",
    category: "Communication",
    level: "Beginner",
    teacher: "Meera Shah",
    initials: "MS",
    rating: "4.9",
    learners: 20,
    availability: "Weekdays",
    description:
      "Build confidence, improve communication, and become a better speaker.",
    color: "indigo",
    tags: ["Speaking", "Communication", "Confidence"],
  },
];

const categories = [
  "All",
  "Programming",
  "Design",
  "Marketing",
  "Creative",
  "Communication",
];
import StudentNavbar from "../components/StudentNavbar";
function BrowseSkills() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory =
        category === "All" || skill.category === category;

      const searchText = search.toLowerCase();

      const matchesSearch =
        skill.title.toLowerCase().includes(searchText) ||
        skill.category.toLowerCase().includes(searchText) ||
        skill.teacher.toLowerCase().includes(searchText) ||
        skill.tags.some((tag) =>
          tag.toLowerCase().includes(searchText)
        );

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-[#f8f7fc]">
      <StudentNavbar />
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-violet-600">
                Skill Marketplace
              </p>

              <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Browse Skills
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Discover students who can teach what you want to learn
                and exchange your own skills along the way.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Users size={18} className="text-violet-600" />
              <span>{skills.length} skills available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Search */}
            <div className="relative w-full lg:max-w-xl">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Python, UI/UX, React..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </div>

            {/* Filter icon */}
            <button
              type="button"
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-600 lg:w-auto"
            >
              <SlidersHorizontal size={18} />
              Filters
            </button>
          </div>

          {/* Categories */}
          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                  category === item
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                    : "bg-slate-100 text-slate-600 hover:bg-violet-50 hover:text-violet-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Skills you may like
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredSkills.length}{" "}
              {filteredSkills.length === 1 ? "skill" : "skills"} found
            </p>
          </div>
        </div>

        {filteredSkills.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 text-violet-600">
              <Search size={24} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              No skills found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another search term or select a different category.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

function SkillCard({ skill }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50 sm:p-6">
      {/* Top */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-bold text-white">
            {skill.initials}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">
              {skill.teacher}
            </p>

            <p className="text-xs text-slate-400">
              Can teach this skill
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-600">
          <Star size={13} fill="currentColor" />
          {skill.rating}
        </div>
      </div>

      {/* Skill */}
      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600">
            {skill.category}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
            {skill.level}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-900">
          {skill.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {skill.description}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-slate-200 px-2.5 py-1 text-xs text-slate-500"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-auto pt-6">
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Users size={15} />
            {skill.learners} learners
          </div>

          <div className="flex items-center gap-1.5">
            <Clock3 size={15} />
            {skill.availability}
          </div>
        </div>

       <Link
  to={`/skill/${skill.id}`}
  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
>
  View Skill
  <ArrowRight
    size={17}
    className="transition-transform group-hover:translate-x-1"
  />
</Link>
      </div>
    </article>
  );
}

export default BrowseSkills;