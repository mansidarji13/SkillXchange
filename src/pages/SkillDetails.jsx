import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Clock,
  BookOpen,
  Users,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

const skills = {
  1: {
    title: "Python Programming",
    category: "Programming",
    level: "Intermediate",
    teacher: "Aarav Patel",
    initials: "AP",
    rating: "4.9",
    sessions: "32",
    experience: "2+ years",
    availability: "Weekends",
    description:
      "Learn Python fundamentals, problem solving, object-oriented programming, and practical development through hands-on learning sessions.",
    teaches: [
      "Python fundamentals",
      "Object-oriented programming",
      "Problem solving",
      "Django basics",
    ],
    wantsToLearn: "UI/UX Design",
  },

  2: {
    title: "UI/UX Design",
    category: "Design",
    level: "Beginner",
    teacher: "Riya Shah",
    initials: "RS",
    rating: "4.8",
    sessions: "24",
    experience: "1+ years",
    availability: "Evenings",
    description:
      "Learn modern UI/UX principles, wireframing, user research, design systems, and how to create beautiful and usable digital experiences.",
    teaches: [
      "UI design",
      "UX fundamentals",
      "Wireframing",
      "Design systems",
    ],
    wantsToLearn: "Python Programming",
  },

  3: {
    title: "React Development",
    category: "Programming",
    level: "Intermediate",
    teacher: "Dev Mehta",
    initials: "DM",
    rating: "4.9",
    sessions: "41",
    experience: "2+ years",
    availability: "Weekday evenings",
    description:
      "Build responsive React applications using components, hooks, modern JavaScript, and practical frontend development techniques.",
    teaches: [
      "React fundamentals",
      "Components",
      "React Hooks",
      "Frontend development",
    ],
    wantsToLearn: "Graphic Design",
  },

  4: {
    title: "Digital Marketing",
    category: "Marketing",
    level: "Intermediate",
    teacher: "Neha Shah",
    initials: "NS",
    rating: "4.7",
    sessions: "18",
    experience: "2+ years",
    availability: "Weekends",
    description:
      "Learn the fundamentals of digital marketing, social media strategy, content planning, and online audience growth.",
    teaches: [
      "Social media marketing",
      "Content strategy",
      "SEO basics",
      "Audience research",
    ],
    wantsToLearn: "Web Development",
  },

  5: {
    title: "Graphic Design",
    category: "Creative",
    level: "Beginner",
    teacher: "Karan Joshi",
    initials: "KJ",
    rating: "4.8",
    sessions: "27",
    experience: "2+ years",
    availability: "Flexible",
    description:
      "Explore graphic design principles, typography, visual composition, branding, and creative design workflows.",
    teaches: [
      "Typography",
      "Visual design",
      "Branding",
      "Creative composition",
    ],
    wantsToLearn: "Digital Marketing",
  },

  6: {
    title: "Communication Skills",
    category: "Communication",
    level: "Intermediate",
    teacher: "Ananya Patel",
    initials: "AP",
    rating: "4.9",
    sessions: "36",
    experience: "3+ years",
    availability: "Evenings",
    description:
      "Improve your communication, presentation, confidence, interview skills, and ability to express ideas clearly.",
    teaches: [
      "Public speaking",
      "Presentation skills",
      "Interview preparation",
      "Professional communication",
    ],
    wantsToLearn: "UI/UX Design",
  },
};

function SkillDetails() {
  const { id } = useParams();

  const skill = skills[id] || skills[1];

  return (
    <div className="min-h-screen bg-[#f8f7fc] text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-10">
          <Link
            to="/browse-skills"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-violet-600"
          >
            <ArrowLeft size={18} />
            Back to Browse Skills
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        {/* Top section */}
        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
          {/* Main information */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            {/* Category */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
                {skill.category}
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                {skill.level}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {skill.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              {skill.description}
            </p>

            {/* Teacher */}
            <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-7 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-lg font-bold text-white">
                {skill.initials}
              </div>

              <div>
                <p className="text-sm text-slate-500">Can teach this skill</p>

                <h2 className="mt-1 text-lg font-bold text-slate-900">
                  {skill.teacher}
                </h2>
              </div>

              <div className="flex items-center gap-1 sm:ml-auto">
                <Star
                  size={18}
                  className="fill-amber-400 text-amber-400"
                />

                <span className="font-bold text-slate-900">
                  {skill.rating}
                </span>

                <span className="text-sm text-slate-500">
                  rating
                </span>
              </div>
            </div>

            {/* What you'll learn */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-slate-900">
                What you'll learn
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {skill.teaches.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                  >
                    <CheckCircle
                      size={19}
                      className="mt-0.5 shrink-0 text-violet-600"
                    />

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Profile / Request Card */}
          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xl font-bold text-white">
                {skill.initials}
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Skill mentor
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  {skill.teacher}
                </h2>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-violet-600">
                  <BookOpen size={18} />
                  <span className="text-sm font-semibold">
                    Sessions
                  </span>
                </div>

                <p className="mt-2 text-xl font-bold text-slate-900">
                  {skill.sessions}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-violet-600">
                  <Clock size={18} />
                  <span className="text-sm font-semibold">
                    Experience
                  </span>
                </div>

                <p className="mt-2 text-sm font-bold text-slate-900">
                  {skill.experience}
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-4 rounded-xl bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <Clock
                  size={19}
                  className="text-violet-600"
                />

                <div>
                  <p className="text-xs text-slate-500">
                    Availability
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {skill.availability}
                  </p>
                </div>
              </div>
            </div>

            {/* Exchange */}
            <div className="mt-7 rounded-2xl bg-violet-50 p-5">
              <p className="text-sm font-semibold text-violet-700">
                They want to learn
              </p>

              <p className="mt-2 text-lg font-bold text-slate-900">
                {skill.wantsToLearn}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Offer a skill you know in exchange for learning{" "}
                {skill.title}.
              </p>
            </div>

            {/* Request button */}
            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5"
            >
              <MessageCircle size={19} />
              Request Skill Exchange
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              Send a request and explain what you'd like to learn
              and what you can teach in return.
            </p>
          </aside>
        </div>

        {/* Bottom information */}
        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <Users size={21} />
            </div>

            <h3 className="mt-5 font-bold text-slate-900">
              Peer Learning
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Learn directly from another student who has practical
              experience with this skill.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <BookOpen size={21} />
            </div>

            <h3 className="mt-5 font-bold text-slate-900">
              Learn by Doing
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Exchange knowledge through practical sessions and
              real learning activities.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <Star size={21} />
            </div>

            <h3 className="mt-5 font-bold text-slate-900">
              Build Your Reputation
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Complete exchanges, receive ratings, and build your
              reputation in the SkillXchange community.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SkillDetails;