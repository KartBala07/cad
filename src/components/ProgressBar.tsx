interface ProgressBarProps {
  percent: number;
  className?: string;
  trackClassName?: string;
}

export function ProgressBar({
  percent,
  className = "",
  trackClassName = "h-2.5",
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div
      className={`w-full rounded-full bg-ink-700 overflow-hidden ${trackClassName} ${className}`}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-lime-600 via-lime-400 to-lime-300 transition-[width] duration-500 ease-out"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
