import { NavLink, Outlet } from "react-router-dom";
import { useProgress } from "../lib/progress";
import { Icon } from "./Icon";

function StreakBadge() {
  const { state } = useProgress();
  return (
    <div className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-ink-800 border border-ink-600 px-2 sm:px-3 py-1 sm:py-1.5">
      <span className="text-orange-400 text-sm sm:text-base leading-none">🔥</span>
      <span className="font-display font-semibold text-xs sm:text-sm tabular-nums">
        {state.streak}
      </span>
    </div>
  );
}

function XpBadge() {
  const { state } = useProgress();
  return (
    <div className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-ink-800 border border-ink-600 px-2 sm:px-3 py-1 sm:py-1.5">
      <span className="text-lime-400 text-sm sm:text-base leading-none">⚡</span>
      <span className="font-display font-semibold text-xs sm:text-sm tabular-nums text-lime-300 whitespace-nowrap">
        {state.xp} XP
      </span>
    </div>
  );
}

function navClass(isActive: boolean) {
  return [
    "px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap",
    isActive
      ? "bg-lime-400/10 text-lime-300 border border-lime-400/30"
      : "text-ink-300 hover:text-ink-100 border border-transparent hover:border-ink-600",
  ].join(" ");
}

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 backdrop-blur bg-ink-900/85 border-b border-ink-700">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 py-2.5 sm:py-0 sm:h-16 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2">
            <NavLink to="/" className="flex items-center gap-2 shrink-0">
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-lime-400 text-ink-900 flex items-center justify-center shadow-glow">
                <Icon kind="trophy" className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <span className="font-display font-bold text-base sm:text-lg tracking-tight">
                Torque
              </span>
            </NavLink>
            <div className="flex items-center gap-1.5 sm:hidden">
              <StreakBadge />
              <XpBadge />
            </div>
          </div>

          <nav className="flex items-center gap-1 sm:gap-1.5">
            <NavLink to="/" end className={({ isActive }) => navClass(isActive)}>
              Path
            </NavLink>
            <NavLink to="/resources" className={({ isActive }) => navClass(isActive)}>
              Resources
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => navClass(isActive)}>
              Profile
            </NavLink>
          </nav>

          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <StreakBadge />
            <XpBadge />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-ink-700 py-6 text-center text-xs text-ink-400">
        Built for FRC students learning Onshape · Independent project, not
        affiliated with Onshape or FIRST · Further reading via{" "}
        <a
          href="https://frcdesign.org/"
          target="_blank"
          rel="noreferrer"
          className="text-lime-400 hover:underline"
        >
          FRCDesign.org
        </a>
      </footer>
    </div>
  );
}
