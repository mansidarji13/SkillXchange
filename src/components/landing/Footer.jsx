function Footer() {
  return (
    <footer
      id="about"
      className="border-t border-white/5 bg-[#0d0920] text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">

              {/* Logo */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xl font-bold shadow-lg shadow-violet-500/20">
                X
              </div>

              {/* Brand Name */}
              <span className="text-xl font-bold">
                Skill
                <span className="text-violet-400">X</span>
                change
              </span>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              A peer-to-peer skill exchange platform where students
              can learn from each other, share knowledge, and grow
              together.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <button
                type="button"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
              >
                GH
              </button>

              <button
                type="button"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
              >
                IG
              </button>

              <button
                type="button"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
              >
                in
              </button>

              <button
                type="button"
                aria-label="Website"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
              >
                ↗
              </button>

            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-white">
              Platform
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">

              <a
                href="#skills"
                className="transition hover:text-violet-400"
              >
                Browse Skills
              </a>

              <a
                href="#how-it-works"
                className="transition hover:text-violet-400"
              >
                How It Works
              </a>

              <a
                href="#home"
                className="transition hover:text-violet-400"
              >
                Find Matches
              </a>

              <a
                href="#home"
                className="transition hover:text-violet-400"
              >
                Community
              </a>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">

              <a
                href="#about"
                className="transition hover:text-violet-400"
              >
                About Us
              </a>

              <a
                href="#about"
                className="transition hover:text-violet-400"
              >
                Contact
              </a>

              <a
                href="#about"
                className="transition hover:text-violet-400"
              >
                Privacy Policy
              </a>

              <a
                href="#about"
                className="transition hover:text-violet-400"
              >
                Terms of Service
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-7 text-center text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p>
            © {new Date().getFullYear()} SkillXchange. All rights reserved.
          </p>

          <p>
            Built to{" "}
            <span className="text-violet-400">
              learn, teach & grow
            </span>{" "}
            together.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;