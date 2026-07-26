import { useNavigate } from "react-router-dom";
import { Icon } from "./Icon";
import type { Lesson } from "../data/types";

interface PathNodeProps {
  lesson: Lesson;
  index: number;
  status: "complete" | "current" | "locked";
}

const OFFSETS = [
  "translate-x-0",
  "translate-x-16 sm:translate-x-24",
  "translate-x-24 sm:translate-x-36",
  "translate-x-16 sm:translate-x-24",
  "translate-x-0",
  "-translate-x-16 sm:-translate-x-24",
  "-translate-x-24 sm:-translate-x-36",
  "-translate-x-16 sm:-translate-x-24",
];

export function PathNode({ lesson, index, status }: PathNodeProps) {
  const navigate = useNavigate();
  const offset = OFFSETS[index % OFFSETS.length];
  const locked = status === "locked";

  return (
    <div className={`flex flex-col items-center ${offset} transition-transform`}>
      <button
        type="button"
        disabled={locked}
        onClick={() => navigate(`/lesson/${lesson.id}`)}
        title={lesson.title}
        className={[
          "relative w-20 h-20 rounded-full flex items-center justify-center shrink-0",
          "transition-transform active:translate-y-1 active:shadow-none",
          locked
            ? "bg-ink-800 text-ink-500 border-2 border-ink-600 cursor-not-allowed shadow-none"
            : status === "complete"
            ? "bg-lime-400 text-ink-900 border-2 border-lime-300 shadow-node hover:-translate-y-0.5"
            : "bg-ink-800 text-lime-300 border-2 border-lime-400 shadow-node hover:-translate-y-0.5 animate-pulseGlow",
        ].join(" ")}
      >
        {locked ? (
          <Icon kind="lock-key" className="w-7 h-7" />
        ) : (
          <Icon kind={lesson.icon} className="w-8 h-8" />
        )}
        {status === "complete" && (
          <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-ink-900 border-2 border-ink-900 flex items-center justify-center">
            <span className="w-4 h-4 rounded-full bg-lime-300 flex items-center justify-center text-[10px] text-ink-900 font-bold">
              ✓
            </span>
          </span>
        )}
      </button>
      <div className="mt-2 text-center w-32">
        <p
          className={`text-xs font-semibold leading-tight ${
            locked ? "text-ink-500" : "text-ink-100"
          }`}
        >
          {lesson.title}
        </p>
        {!locked && (
          <p className="text-[11px] text-lime-400 font-medium mt-0.5">
            {status === "complete" ? "Completed" : `${lesson.xp} XP · ${lesson.minutes} min`}
          </p>
        )}
      </div>
    </div>
  );
}
