import {
  Search,
  Star,
  Clock3,
  ArrowRight,
  MessageCircle,
  SlidersHorizontal,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import StudentNavbar from "../components/StudentNavbar";

const matches = [
  {
    id: 1,
    name: "Rahul Sharma",
    initials: "RS",
    role: "Full Stack Developer",
    rating: "4.9",
    skill: "Python Programming",
    category: "Programming",
    wantsToLearn: "UI/UX Design",
    availability: "Weekends",
    match: 96,
    sessions: 32,
    description:
      "Experienced developer who enjoys teaching Python, Django, and backend development through practical projects.",
    tags: ["Python", "Django", "Backend"],
  },
  {
    id: 2,
    name: "Priya Patel",
    initials: "PP",
    role: "UI/UX Designer",
    rating: "4.8",
    skill: "UI/UX Design",
    category: "Design",
    wantsToLearn: "Python Programming",
    availability: "Evenings",
    match: 93,
    sessions: 24,
    description:
      "UI/UX designer focused on modern interfaces, design systems, wireframes, and user-centered design.",
    tags: ["Figma", "UI/UX", "Design"],
  },
  {
    id: 3,
    name: "Alex Johnson",
    initials: "AJ",
    role: "Data Analyst",
    rating: "4.7",
    skill: "Excel & Data Analysis",
    category: "Data",
    wantsToLearn: "React Development",
    availability: "Weekdays",
    match: 89,
    sessions: 28,
    description:
      "Data analyst who can help you master Excel, dashboards, formulas, and practical data analysis.",
    tags: ["Excel", "Analytics", "Data"],
  },
  {
    id: 4,
    name: "Meera Shah",
    initials: "MS",
    role: "Communication Coach",
    rating: "4.9",
    skill: "Public Speaking",
    category: "Communication",
    wantsToLearn: "Graphic Design",
    availability: "Evenings",
    match: 87,
    sessions: 36,
    description:
      "Helps students improve communication, presentations, confidence, interviews, and public speaking.",
    tags: ["Speaking", "Confidence", "Presentation"],
  },
  {
    id: 5,
    name: "Dev Mehta",
    initials: "DM",
    role: "Frontend Developer",
    rating: "4.9",
    skill: "React Development",
    category: "Programming",
    wantsToLearn: "Graphic Design",
    availability: "Weekday evenings",
    match: 84,
    sessions: 41,
    description:
      "Frontend developer who enjoys building modern React applications and sharing practical development knowledge.",
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    id: 6,
    name: "Karan Joshi",
    initials: "KJ",
    role: "Graphic Designer",
    rating: "4.8",
    skill: "Graphic Design",
    category: "Creative",
    wantsToLearn: "Digital Marketing",
    availability: "Flexible",
    match: 81,
    sessions: 27,
    description:
      "Creative designer specializing in branding, typography, visual composition, and digital design.",
    tags: ["Branding", "Typography", "Creative"],
  },
];

const categories = [
  "All",
  "Programming",
  "Design",
  "Data",
  "Communication",
  "Creative",
];

function Matches() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredMatches = useMemo(() => {
    return matches.filter((person) => {
      const matchesCategory =
        category === "All" || person.category === category;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        person.name.toLowerCase().includes(searchText) ||
        person.skill.toLowerCase().includes(searchText) ||
        person.role.toLowerCase().includes(searchText) ||
        person.wantsToLearn.toLowerCase().includes(searchText) ||
        person.tags.some((tag) =>
          tag.toLowerCase().includes(searchText)
        );

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f7fc] text-slate-900">
      <StudentNavbar />

      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-violet-600">
                <Sparkles size={17} />
                Smart Recommendations
              </div>

              <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Your Matches
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Find students whose skills and learning goals match
                what you're looking for.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Users size={18} className="text-violet-600" />

              <span>
                {filteredMatches.length}{" "}
                {filteredMatches.length === 1
                  ? "match"
                  : "matches"}{" "}
                found
              </span>
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
                placeholder="Search people, Python, UI/UX..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </div>

            {/* Filter button */}
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

      {/* Matches */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
            Recommended for you
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            People You May Connect With
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            These recommendations are based on your skills and
            learning interests.
          </p>
        </div>

        {filteredMatches.length > 0 ? (
          <div className="grid gap-5 lg:grid-cols-2">
            {filteredMatches.map((person) => (
              <MatchCard
                key={person.id}
                person={person}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
              <Search size={24} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              No matches found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-6 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

function MatchCard({ person }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50 sm:p-6">

      {/* Top */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-bold text-white">
            {person.initials}
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {person.name}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {person.role}
            </p>

            <div className="mt-2 flex items-center gap-1.5">
              <Star
                size={14}
                className="fill-amber-400 text-amber-400"
              />

              <span className="text-xs font-semibold text-slate-700">
                {person.rating}
              </span>

              <span className="text-xs text-slate-400">
                rating
              </span>
            </div>
          </div>
        </div>

        {/* Match Score */}
        <div className="w-fit rounded-xl bg-violet-50 px-3 py-2">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-violet-500">
            Match
          </p>

          <p className="mt-0.5 text-lg font-black text-violet-700">
            {person.match}%
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-violet-50 p-4">
          <p className="text-xs font-semibold text-violet-600">
            Can teach you
          </p>

          <p className="mt-1.5 font-bold text-slate-900">
            {person.skill}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-500">
            Wants to learn
          </p>

          <p className="mt-1.5 font-bold text-slate-900">
            {person.wantsToLearn}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 text-sm leading-6 text-slate-500">
        {person.description}
      </p>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {person.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-slate-200 px-2.5 py-1 text-xs text-slate-500"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Info */}
      <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <Clock3 size={15} />
          {person.availability}
        </div>

        <div className="flex items-center gap-1.5">
          <MessageCircle size={15} />
          {person.sessions} sessions
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Link
          to={`/skill/${person.id}`}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
        >
          View Profile
          <ArrowRight size={16} />
        </Link>

        <Link
          to={`/skill/${person.id}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/15 transition hover:bg-violet-700"
        >
          <MessageCircle size={17} />
          Request Exchange
        </Link>
      </div>
    </article>
  );
}

export default Matches;