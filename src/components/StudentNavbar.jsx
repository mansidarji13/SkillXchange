import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function StudentNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Browse Skills", path: "/browse-skills" },
    { label: "Matches", path: "/matches" },
    { label: "Requests", path: "/requests" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        
        {/* Logo */}
        <Link
          to="/dashboard"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xl font-black text-white shadow-lg shadow-violet-500/20">
            X
          </div>

          <div className="text-xl font-black tracking-tight text-slate-900">
            Skill<span className="text-violet-600">X</span>change
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? "text-violet-600"
                    : "text-slate-500 hover:text-violet-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Profile + Mobile Menu */}
        <div className="flex items-center gap-3">
          
          {/* Profile */}
          <Link
            to="/profile"
            onClick={closeMenu}
            className="hidden items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-slate-50 sm:flex"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-base font-bold text-white">
              M
            </div>

            <div className="hidden text-left md:block">
              <p className="text-sm font-semibold text-slate-800">
                Mansi
              </p>

              <p className="text-xs text-slate-400">
                Learner
              </p>
            </div>
          </Link>
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-violet-50 text-violet-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-violet-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Profile */}
          <Link
            to="/profile"
            onClick={closeMenu}
            className="mt-3 flex items-center gap-3 border-t border-slate-100 px-4 pt-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-bold text-white">
              M
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-800">
                Mansi
              </p>

              <p className="text-xs text-slate-400">
                Learner
              </p>
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}

export default StudentNavbar;