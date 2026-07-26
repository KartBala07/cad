import { useEffect } from "react";
import { STAGES } from "../data/curriculum";
import { useProgress } from "../lib/progress";
import { PathNode } from "../components/PathNode";
import { ProgressBar } from "../components/ProgressBar";
import { Icon } from "../components/Icon";

export function Home() {
  const {
    completedCount,
    totalLessons,
    percentComplete,
    isLessonComplete,
    isLessonUnlocked,
    touchStreak,
    state,
  } = useProgress();

  useEffect(() => {
    touchStreak();
  }, [touchStreak]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <section className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-3">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-100">
              Learn Onshape for FRC
            </h1>
            <p className="text-ink-300 text-sm mt-1">
              Bite-sized lessons, basics to pro — build the CAD skills your
              robot actually needs.
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-sm text-ink-300">
              <span className="text-lime-300 font-semibold">
                {completedCount}
              </span>{" "}
              / {totalLessons} lessons
            </p>
          </div>
        </div>
        <ProgressBar percent={percentComplete} trackClassName="h-3" />
        <div className="flex items-center gap-4 mt-3 text-sm">
          <span className="flex items-center gap-1 text-ink-300">
            🔥 <span className="text-ink-100 font-semibold">{state.streak}</span>{" "}
            day streak
          </span>
          <span className="flex items-center gap-1 text-ink-300">
            ⚡{" "}
            <span className="text-lime-300 font-semibold">{state.xp} XP</span>
          </span>
        </div>
      </section>

      <div className="space-y-16">
        {STAGES.map((stage, stageIdx) => {
          const stageCompleted = stage.lessons.filter((l) =>
            isLessonComplete(l.id)
          ).length;
          const stagePercent = Math.round(
            (stageCompleted / stage.lessons.length) * 100
          );
          return (
            <section key={stage.id}>
              <div className="flex items-start gap-3 mb-6 rounded-2xl border border-ink-700 bg-ink-850/60 p-4 sm:p-5">
                <span className="w-11 h-11 rounded-xl bg-lime-400/10 text-lime-300 flex items-center justify-center shrink-0 border border-lime-400/20">
                  <Icon kind={stage.icon} className="w-6 h-6" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-wider text-ink-400 font-semibold">
                    Stage {stageIdx + 1}
                  </p>
                  <h2 className="font-display font-bold text-lg text-ink-100">
                    {stage.title}
                  </h2>
                  <p className="text-sm text-ink-300 mt-0.5">
                    {stage.subtitle}
                  </p>
                  <ProgressBar percent={stagePercent} className="mt-3" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-10 py-2">
                {stage.lessons.map((lesson, idx) => {
                  const complete = isLessonComplete(lesson.id);
                  const unlocked = isLessonUnlocked(lesson.id);
                  const status = complete
                    ? "complete"
                    : unlocked
                    ? "current"
                    : "locked";
                  return (
                    <PathNode
                      key={lesson.id}
                      lesson={lesson}
                      index={idx}
                      status={status}
                    />
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {percentComplete === 100 && (
        <div className="mt-12 text-center rounded-2xl border border-lime-400/30 bg-lime-400/5 p-8">
          <p className="text-4xl mb-2">🏆</p>
          <h3 className="font-display text-xl font-bold text-lime-300">
            You've completed the whole path!
          </h3>
          <p className="text-ink-300 text-sm mt-1">
            Basics to pro — you've covered it all. Time to put it to work on
            your team's robot.
          </p>
        </div>
      )}
    </div>
  );
}
