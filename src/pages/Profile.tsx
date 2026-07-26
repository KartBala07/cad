import { useState } from "react";
import { STAGES } from "../data/curriculum";
import { useProgress } from "../lib/progress";
import { Icon } from "../components/Icon";
import { ProgressBar } from "../components/ProgressBar";

function StatCard({
  label,
  value,
  emoji,
}: {
  label: string;
  value: string | number;
  emoji: string;
}) {
  return (
    <div className="rounded-2xl border border-ink-700 bg-ink-850 p-4 text-center">
      <p className="text-2xl mb-1">{emoji}</p>
      <p className="font-display text-xl font-bold text-ink-100">{value}</p>
      <p className="text-xs text-ink-400 mt-0.5">{label}</p>
    </div>
  );
}

export function Profile() {
  const {
    state,
    completedCount,
    totalLessons,
    percentComplete,
    isLessonComplete,
    resetProgress,
  } = useProgress();
  const [confirmingReset, setConfirmingReset] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-100 mb-6">
        Your progress
      </h1>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <StatCard label="Total XP" value={state.xp} emoji="⚡" />
        <StatCard label="Day streak" value={state.streak} emoji="🔥" />
        <StatCard
          label="Lessons done"
          value={`${completedCount}/${totalLessons}`}
          emoji="✅"
        />
      </div>

      <div className="rounded-2xl border border-ink-700 bg-ink-850 p-5 mb-8">
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold text-sm text-ink-100">
            Overall course progress
          </p>
          <p className="text-sm text-lime-300 font-semibold">
            {percentComplete}%
          </p>
        </div>
        <ProgressBar percent={percentComplete} trackClassName="h-3" />
      </div>

      <h2 className="font-display font-bold text-lg text-ink-100 mb-3">
        All lessons
      </h2>
      <div className="space-y-6 mb-10">
        {STAGES.map((stage) => (
          <div key={stage.id}>
            <p className="text-xs uppercase tracking-wider text-ink-400 font-semibold mb-2">
              {stage.title}
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {stage.lessons.map((lesson) => {
                const done = isLessonComplete(lesson.id);
                return (
                  <div
                    key={lesson.id}
                    className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
                      done
                        ? "border-lime-400/30 bg-lime-400/5"
                        : "border-ink-700 bg-ink-850"
                    }`}
                  >
                    <span
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        done
                          ? "bg-lime-400 text-ink-900"
                          : "bg-ink-800 text-ink-400"
                      }`}
                    >
                      <Icon kind={lesson.icon} className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink-100 truncate">
                        {lesson.title}
                      </p>
                      <p className="text-xs text-ink-400">
                        {done ? "Completed" : `${lesson.xp} XP`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-ink-700 pt-6">
        {confirmingReset ? (
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm text-ink-300">
              Reset all progress? This can't be undone.
            </p>
            <button
              type="button"
              onClick={() => {
                resetProgress();
                setConfirmingReset(false);
              }}
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-500/10 text-red-300 border border-red-500/30 hover:bg-red-500/20"
            >
              Yes, reset
            </button>
            <button
              type="button"
              onClick={() => setConfirmingReset(false)}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-ink-300 border border-ink-600"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setConfirmingReset(true)}
            className="text-sm text-ink-400 hover:text-red-300 underline underline-offset-2"
          >
            Reset progress
          </button>
        )}
      </div>
    </div>
  );
}
