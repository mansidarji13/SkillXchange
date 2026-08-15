import { ArrowRight, Sparkles } from "lucide-react";

function CTA() {
  return (
    <section className="bg-white px-5 pb-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-600 px-6 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                <Sparkles size={16} />
                Your next skill is waiting
              </div>

              <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Learn something new.
                <br />
                Teach something valuable.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-violet-100">
                Join a community where everyone has something to teach
                and something new to learn.
              </p>
            </div>

            <button className="group flex w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-violet-700 shadow-xl transition hover:-translate-y-1 sm:w-auto">
              Join SkillXchange

              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;