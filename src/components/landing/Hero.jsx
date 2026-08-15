import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#0d0920]"
    >
      {/* Background glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Main container */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:px-10">
        <div className="grid w-full min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-14">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="min-w-0 max-w-2xl">

            {/* Badge */}
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-2 text-xs font-medium text-violet-300 sm:px-4 sm:text-sm">
              <Sparkles size={16} className="shrink-0" />

              <span className="truncate">
                Learn Together, Grow Together
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-full text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Exchange Skills.
              <br />

              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                Build Future.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 w-full max-w-xl text-sm leading-7 text-slate-300 sm:mt-7 sm:text-lg">
              Find the perfect learning partner, exchange knowledge,
              develop new skills, and grow together with your community.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex w-full flex-col gap-4 sm:mt-9 sm:flex-row">
              
              {/* Get Started */}
              <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-violet-600/20 transition hover:-translate-y-0.5 sm:w-auto">
                Get Started

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              {/* How It Works */}
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto">
                <PlayCircle size={18} />

                How It Works
              </button>

            </div>

            {/* Small trust text */}
            <p className="mt-7 text-xs leading-5 text-slate-400 sm:text-sm">
              Built for students, creators, developers and lifelong learners.
            </p>
          </div>


          {/* =========================
              RIGHT ILLUSTRATION
          ========================== */}
          <div className="relative mx-auto mt-8 w-full max-w-xl min-w-0 lg:mt-0">

            {/* Illustration container */}
            <div className="relative mx-auto aspect-square w-full max-w-[500px]">

              {/* Glow */}
              <div className="absolute inset-10 rounded-full bg-violet-600/20 blur-3xl" />

              {/* Center circle */}
              <div className="absolute inset-[15%] rounded-full border border-violet-400/20 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/10 backdrop-blur-sm" />


              {/* =========================
                  DEVELOPER CARD
              ========================== */}
              <div className="absolute left-[2%] top-[25%] w-36 rounded-2xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-xl sm:left-[5%] sm:w-52 sm:p-4">

                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 text-lg sm:mb-3 sm:h-14 sm:w-14 sm:text-xl">
                  👨‍💻
                </div>

                <p className="text-sm font-semibold text-white sm:text-base">
                  Developer
                </p>

                <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                  Teaches Python
                </p>
              </div>


              {/* =========================
                  DESIGNER CARD
              ========================== */}
              <div className="absolute bottom-[18%] right-[2%] w-36 rounded-2xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-xl sm:right-[3%] sm:w-52 sm:p-4">

                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-500 text-lg sm:mb-3 sm:h-14 sm:w-14 sm:text-xl">
                  👩‍🎨
                </div>

                <p className="text-sm font-semibold text-white sm:text-base">
                  Designer
                </p>

                <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                  Teaches UI/UX
                </p>
              </div>


              {/* =========================
                  CENTER X
              ========================== */}
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-2xl font-black text-white shadow-2xl shadow-violet-600/40 sm:h-20 sm:w-20 sm:rounded-3xl sm:text-3xl">
                X
              </div>


              {/* =========================
                  PYTHON BUBBLE
              ========================== */}
              <div className="absolute right-[5%] top-[10%] rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-semibold text-violet-300 backdrop-blur-md sm:right-[8%] sm:top-[12%] sm:px-4 sm:py-2 sm:text-xs">
                Python
              </div>


              {/* =========================
                  UI/UX BUBBLE
              ========================== */}
              <div className="absolute bottom-[7%] left-[5%] rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-3 py-1.5 text-[10px] font-semibold text-fuchsia-300 backdrop-blur-md sm:bottom-[8%] sm:left-[8%] sm:px-4 sm:py-2 sm:text-xs">
                UI/UX
              </div>


              {/* =========================
                  DJANGO BUBBLE
              ========================== */}
              <div className="absolute left-1/2 top-[3%] -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold text-slate-300 backdrop-blur-md sm:left-[45%] sm:top-[4%] sm:translate-x-0 sm:px-4 sm:py-2 sm:text-xs">
                Django
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;