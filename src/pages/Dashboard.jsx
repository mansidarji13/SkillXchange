import {
  BookOpen,
  Users,
  Clock3,
  Star,
  Search,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import StudentNavbar from "../components/StudentNavbar";

function Dashboard() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f7fc] text-slate-900">
      <StudentNavbar />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">

        {/* Welcome */}
        <section>
          <p className="text-sm font-semibold text-violet-600">
            Student Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Good morning, Mansi 👋
          </h1>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Ready to learn something new today?
          </p>
        </section>

        {/* Stats */}
        <section className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <BookOpen size={20} />
            </div>

            <p className="mt-4 text-2xl font-black">
              12
            </p>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Skills Learning
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-600">
              <Clock3 size={20} />
            </div>

            <p className="mt-4 text-2xl font-black">
              8
            </p>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Sessions Completed
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Users size={20} />
            </div>

            <p className="mt-4 text-2xl font-black">
              5
            </p>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Active Requests
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
              <Star size={20} />
            </div>

            <p className="mt-4 text-2xl font-black">
              4.8
            </p>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Your Rating
            </p>
          </div>

        </section>

        {/* Search + Progress */}
        <section className="mt-6 grid gap-6 lg:grid-cols-5">

          {/* Search */}
          <div className="rounded-2xl bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-600 p-6 text-white sm:p-8 lg:col-span-3">

            <p className="text-sm font-semibold text-violet-200">
              Discover
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Find Your Next Skill
            </h2>

            <p className="mt-2 max-w-lg text-sm leading-6 text-violet-100">
              Search for skills you want to learn and find people who can
              teach you.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-white px-4 py-3 text-slate-400">
                <Search size={18} />

                <span className="text-sm">
                  Search Python, UI/UX, Excel...
                </span>
              </div>

              <Link
                to="/browse-skills"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0d0920] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                Browse
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Progress */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-violet-600">
                  Your Progress
                </p>

                <h2 className="mt-1 text-xl font-black">
                  Keep Growing
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <BookOpen size={19} />
              </div>
            </div>

            <div className="mt-7 space-y-5">

              <div>
                <div className="mb-2 flex justify-between text-xs">
                  <span className="font-medium text-slate-600">
                    Python
                  </span>

                  <span className="font-semibold text-violet-600">
                    70%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[70%] rounded-full bg-violet-600" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-xs">
                  <span className="font-medium text-slate-600">
                    UI/UX Design
                  </span>

                  <span className="font-semibold text-fuchsia-600">
                    45%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[45%] rounded-full bg-fuchsia-500" />
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* Recommended Matches */}
        <section className="mt-10">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
                Recommended
              </p>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                People You May Learn From
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Based on the skills you're interested in.
              </p>
            </div>

            <Link
              to="/matches"
              className="self-start text-sm font-semibold text-violet-600 hover:text-violet-700 sm:self-auto"
            >
              View All →
            </Link>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {/* Match 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 text-xl">
                  👨‍💻
                </div>

                <div>
                  <h3 className="font-bold">
                    Rahul Sharma
                  </h3>

                  <p className="text-xs text-slate-400">
                    Developer
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-600">
                  Python
                </span>

                <span className="text-xs font-semibold text-amber-500">
                  ★ 4.9
                </span>
              </div>

              <Link
                to="/skill/1"
                className="mt-5 flex w-full items-center justify-center rounded-xl bg-violet-50 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-600 hover:text-white"
              >
                Connect
              </Link>
            </div>

            {/* Match 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-500 text-xl">
                  👩‍🎨
                </div>

                <div>
                  <h3 className="font-bold">
                    Priya Patel
                  </h3>

                  <p className="text-xs text-slate-400">
                    UI/UX Designer
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-fuchsia-50 px-3 py-1.5 text-xs font-semibold text-fuchsia-600">
                  UI/UX
                </span>

                <span className="text-xs font-semibold text-amber-500">
                  ★ 4.8
                </span>
              </div>

              <Link
                to="/skill/2"
                className="mt-5 flex w-full items-center justify-center rounded-xl bg-violet-50 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-600 hover:text-white"
              >
                Connect
              </Link>
            </div>

            {/* Match 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 text-xl">
                  👨‍💼
                </div>

                <div>
                  <h3 className="font-bold">
                    Alex Johnson
                  </h3>

                  <p className="text-xs text-slate-400">
                    Data Analyst
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
                  Excel
                </span>

                <span className="text-xs font-semibold text-amber-500">
                  ★ 4.7
                </span>
              </div>

              <Link
                to="/skill/3"
                className="mt-5 flex w-full items-center justify-center rounded-xl bg-violet-50 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-600 hover:text-white"
              >
                Connect
              </Link>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}

export default Dashboard;