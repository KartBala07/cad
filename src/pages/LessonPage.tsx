import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { findLesson, lessonNeighbors } from "../data/curriculum";
import { useProgress } from "../lib/progress";
import { useTextToSpeech } from "../lib/tts";
import { Icon } from "../components/Icon";
import { ProgressBar } from "../components/ProgressBar";
import { TtsControls } from "../components/TtsControls";

type Step = { kind: "slide"; index: number } | { kind: "quiz" } | { kind: "done" };

export function LessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const found = lessonId ? findLesson(lessonId) : null;
  const { state, completeLesson, isLessonComplete } = useProgress();
  const tts = useTextToSpeech({ voiceURI: state.ttsVoiceURI, rate: state.ttsRate });

  const [step, setStep] = useState<Step>({ kind: "slide", index: 0 });
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [wasAlreadyComplete, setWasAlreadyComplete] = useState(false);

  useEffect(() => {
    setStep({ kind: "slide", index: 0 });
    setSelected(null);
    setSubmitted(false);
    tts.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

  useEffect(() => {
    tts.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const neighbors = useMemo(
    () => (lessonId ? lessonNeighbors(lessonId) : { prev: null, next: null }),
    [lessonId]
  );

  if (!found) {
    return (
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        <p className="text-ink-300">Lesson not found.</p>
        <Link to="/" className="text-lime-400 underline mt-2 inline-block">
          Back to path
        </Link>
      </div>
    );
  }

  const { stage, lesson } = found;
  const totalSteps = lesson.slides.length + 1;

  function stepIndexForProgress(): number {
    if (step.kind === "slide") return step.index;
    return lesson.slides.length;
  }

  function goToSlide(i: number) {
    if (i < 0) return;
    if (i >= lesson.slides.length) {
      setStep({ kind: "quiz" });
      return;
    }
    setStep({ kind: "slide", index: i });
  }

  function handleQuizSubmit() {
    if (selected === null) return;
    setSubmitted(true);
  }

  function handleQuizContinue() {
    const correct = selected === lesson.quiz.correctIndex;
    setWasAlreadyComplete(isLessonComplete(lesson.id));
    completeLesson(lesson.id, lesson.xp, correct);
    setStep({ kind: "done" });
  }

  function handleClose() {
    tts.stop();
    navigate("/");
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close lesson"
          className="text-ink-400 hover:text-ink-100 text-2xl leading-none px-1"
        >
          ×
        </button>
        <ProgressBar
          percent={(stepIndexForProgress() / totalSteps) * 100}
          className="flex-1"
        />
      </div>

      {step.kind === "slide" && (
        <SlideView
          key={step.index}
          heading={lesson.slides[step.index].heading}
          body={lesson.slides[step.index].body}
          caption={lesson.slides[step.index].caption}
          icon={lesson.slides[step.index].icon}
          stageLabel={stage.title}
          slideNum={step.index + 1}
          slideTotal={lesson.slides.length}
          tts={tts}
          onBack={() => goToSlide(step.index - 1)}
          onNext={() => goToSlide(step.index + 1)}
          showBack={step.index > 0}
        />
      )}

      {step.kind === "quiz" && (
        <QuizView
          question={lesson.quiz.question}
          options={lesson.quiz.options}
          correctIndex={lesson.quiz.correctIndex}
          explanation={lesson.quiz.explanation}
          selected={selected}
          submitted={submitted}
          onSelect={(i) => !submitted && setSelected(i)}
          onSubmit={handleQuizSubmit}
          onContinue={handleQuizContinue}
          onBack={() => goToSlide(lesson.slides.length - 1)}
        />
      )}

      {step.kind === "done" && (
        <DoneView
          lessonTitle={lesson.title}
          xp={lesson.xp}
          alreadyCompleted={wasAlreadyComplete}
          resource={lesson.resource}
          nextLessonId={neighbors.next?.id ?? null}
          nextLessonTitle={neighbors.next?.title ?? null}
        />
      )}
    </div>
  );
}

interface SlideViewProps {
  heading: string;
  body: string;
  caption: string;
  icon: Parameters<typeof Icon>[0]["kind"];
  stageLabel: string;
  slideNum: number;
  slideTotal: number;
  tts: ReturnType<typeof useTextToSpeech>;
  onBack: () => void;
  onNext: () => void;
  showBack: boolean;
}

function SlideView({
  heading,
  body,
  caption,
  icon,
  stageLabel,
  slideNum,
  slideTotal,
  tts,
  onBack,
  onNext,
  showBack,
}: SlideViewProps) {
  return (
    <div className="animate-pop">
      <p className="text-xs uppercase tracking-wider text-lime-400 font-semibold mb-2">
        {stageLabel} · Slide {slideNum} of {slideTotal}
      </p>

      <div className="rounded-2xl border border-ink-700 bg-ink-850 overflow-hidden mb-5">
        <div className="h-40 sm:h-48 flex items-center justify-center bg-gradient-to-br from-ink-800 to-ink-900 relative">
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(166,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(166,255,0,0.5) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <span className="relative w-24 h-24 rounded-2xl bg-lime-400/10 border border-lime-400/25 flex items-center justify-center text-lime-300">
            <Icon kind={icon} className="w-14 h-14" />
          </span>
        </div>
        <div className="px-5 pt-3 pb-2 text-center">
          <p className="text-xs text-ink-400 italic">{caption}</p>
        </div>
      </div>

      <h1 className="font-display text-xl sm:text-2xl font-bold text-ink-100 mb-3">
        {heading}
      </h1>
      <p className="text-ink-200 leading-relaxed mb-5">{body}</p>

      <div className="mb-6">
        <TtsControls
          status={tts.status}
          voices={tts.voices}
          onPlay={() => tts.speak(body)}
          onPause={tts.pause}
          onResume={tts.resume}
          onStop={tts.stop}
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={!showBack}
          className="px-4 py-2.5 rounded-xl text-sm font-semibold text-ink-300 border border-ink-600 disabled:opacity-0 disabled:pointer-events-none hover:border-ink-400"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex-1 sm:flex-none sm:px-10 py-2.5 rounded-xl text-sm font-bold bg-lime-400 text-ink-900 hover:bg-lime-300 transition-colors shadow-node"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

interface QuizViewProps {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  selected: number | null;
  submitted: boolean;
  onSelect: (i: number) => void;
  onSubmit: () => void;
  onContinue: () => void;
  onBack: () => void;
}

function QuizView({
  question,
  options,
  correctIndex,
  explanation,
  selected,
  submitted,
  onSelect,
  onSubmit,
  onContinue,
  onBack,
}: QuizViewProps) {
  const isCorrect = selected === correctIndex;
  return (
    <div className="animate-pop">
      <p className="text-xs uppercase tracking-wider text-lime-400 font-semibold mb-2">
        Quick check
      </p>
      <h1 className="font-display text-xl sm:text-2xl font-bold text-ink-100 mb-5">
        {question}
      </h1>

      <div className="space-y-2.5 mb-5">
        {options.map((opt, i) => {
          const isSelected = selected === i;
          let style =
            "border-ink-600 hover:border-ink-400 bg-ink-850 text-ink-100";
          if (submitted && isSelected && isCorrect) {
            style = "border-lime-400 bg-lime-400/10 text-lime-200";
          } else if (submitted && isSelected && !isCorrect) {
            style = "border-red-500 bg-red-500/10 text-red-200";
          } else if (submitted && i === correctIndex) {
            style = "border-lime-400 bg-lime-400/10 text-lime-200";
          } else if (isSelected) {
            style = "border-lime-400 bg-lime-400/5 text-ink-100";
          }
          return (
            <button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              disabled={submitted}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-colors text-sm font-medium ${style}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {submitted && (
        <div
          className={`rounded-xl border p-4 mb-5 text-sm ${
            isCorrect
              ? "border-lime-400/30 bg-lime-400/5 text-lime-100"
              : "border-red-500/30 bg-red-500/5 text-red-100"
          }`}
        >
          <p className="font-semibold mb-1">
            {isCorrect ? "Correct!" : "Not quite."}
          </p>
          <p className="text-ink-200">{explanation}</p>
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2.5 rounded-xl text-sm font-semibold text-ink-300 border border-ink-600 hover:border-ink-400"
        >
          Back
        </button>
        {submitted ? (
          <button
            type="button"
            onClick={onContinue}
            className="flex-1 sm:flex-none sm:px-10 py-2.5 rounded-xl text-sm font-bold bg-lime-400 text-ink-900 hover:bg-lime-300 transition-colors shadow-node"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={onSubmit}
            disabled={selected === null}
            className="flex-1 sm:flex-none sm:px-10 py-2.5 rounded-xl text-sm font-bold bg-lime-400 text-ink-900 hover:bg-lime-300 transition-colors shadow-node disabled:opacity-40 disabled:pointer-events-none"
          >
            Check
          </button>
        )}
      </div>
    </div>
  );
}

interface DoneViewProps {
  lessonTitle: string;
  xp: number;
  alreadyCompleted: boolean;
  resource: { label: string; url: string };
  nextLessonId: string | null;
  nextLessonTitle: string | null;
}

function DoneView({
  lessonTitle,
  xp,
  alreadyCompleted,
  resource,
  nextLessonId,
  nextLessonTitle,
}: DoneViewProps) {
  return (
    <div className="animate-pop text-center py-6">
      <p className="text-6xl mb-4">🎉</p>
      <h1 className="font-display text-2xl font-bold text-ink-100 mb-1">
        Lesson complete!
      </h1>
      <p className="text-ink-300 mb-5">{lessonTitle}</p>

      <div className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 border border-lime-400/30 px-5 py-2.5 mb-6">
        <span className="text-lime-300">⚡</span>
        <span className="font-display font-bold text-lime-300">
          {alreadyCompleted ? "Already earned" : `+${xp} XP`}
        </span>
      </div>

      <div className="rounded-2xl border border-ink-700 bg-ink-850 p-4 mb-6 text-left">
        <p className="text-xs uppercase tracking-wider text-ink-400 font-semibold mb-1">
          Go deeper
        </p>
        <a
          href={resource.url}
          target="_blank"
          rel="noreferrer"
          className="text-lime-400 hover:underline text-sm font-medium"
        >
          {resource.label} ↗
        </a>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/"
          className="px-6 py-2.5 rounded-xl text-sm font-semibold text-ink-200 border border-ink-600 hover:border-ink-400"
        >
          Back to path
        </Link>
        {nextLessonId && (
          <Link
            to={`/lesson/${nextLessonId}`}
            className="px-6 py-2.5 rounded-xl text-sm font-bold bg-lime-400 text-ink-900 hover:bg-lime-300 transition-colors shadow-node"
          >
            Next: {nextLessonTitle}
          </Link>
        )}
      </div>
    </div>
  );
}
