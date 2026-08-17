import { ArrowLeft, Sparkles } from "lucide-react";

function AuthLayout({ children, title, subtitle }) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0920] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="pointer-events-none fixed -right-40 bottom-20 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />

      {/* Grid background */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Back to home */}
      <div className="absolute left-4 top-4 z-20 sm:left-8 sm:top-7">
        <a
          href="/"
          className="group flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
        >
          <ArrowLeft
            size={17}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span className="hidden sm:inline">Back to Home</span>
        </a>
      </div>

      {/* Main */}
      <div className="relative flex min-h-screen items-center justify-center px-4 py-20 sm:px-6">
        <div className="w-full max-w-md">
          {/* Brand */}
          <div className="mb-8 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xl font-black shadow-lg shadow-violet-500/20">
                X
              </div>

              <span className="text-xl font-bold tracking-tight">
                Skill<span className="text-violet-400">X</span>change
              </span>
            </a>
          </div>

          {/* Auth Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl sm:p-8">
            {/* Header */}
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                <Sparkles size={21} />
              </div>

              <h1 className="mt-5 text-2xl font-black tracking-tight sm:text-3xl">
                {title}
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {subtitle}
              </p>
            </div>

            {/* Page content */}
            <div className="mt-8">
              {children}
            </div>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} SkillXchange. Learn, teach & grow
            together.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;