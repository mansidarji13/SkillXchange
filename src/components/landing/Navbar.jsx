import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xl font-bold text-white shadow-lg shadow-violet-500/20">
              X
            </div>

            <span className="truncate text-lg font-bold tracking-tight text-white sm:text-xl">
              Skill<span className="text-violet-400">X</span>change
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              Home
            </a>

            <a
              href="#skills"
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              Browse Skills
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              How It Works
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              About Us
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-lg border border-violet-400/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-violet-400 hover:bg-white/5">
              Login
            </button>

            <button className="rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:scale-[1.02]">
              Sign Up
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="shrink-0 rounded-lg border border-white/10 p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="w-full rounded-2xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4">

              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                Home
              </a>

              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                Browse Skills
              </a>

              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                How It Works
              </a>

              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                About Us
              </a>

              <div className="mt-2 flex gap-3 border-t border-white/10 pt-4">
                <button className="flex-1 rounded-lg border border-violet-400/40 px-4 py-2.5 text-sm font-semibold text-white">
                  Login
                </button>

                <button className="flex-1 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white">
                  Sign Up
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;