import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { STAGES, allLessons } from "../data/curriculum";

const STORAGE_KEY = "torque-progress-v2";

interface QuizResult {
  correct: boolean;
  attempts: number;
}

interface ProgressState {
  xp: number;
  streak: number;
  lastActiveDate: string | null;
  completed: Record<string, boolean>;
  quizResults: Record<string, QuizResult>;
  ttsVoiceURI: string | null;
  ttsRate: number;
}

const DEFAULT_STATE: ProgressState = {
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  completed: {},
  quizResults: {},
  ttsVoiceURI: null,
  ttsRate: 1,
};

function loadState(): ProgressState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_STATE, ...parsed };
  } catch {
    return DEFAULT_STATE;
  }
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  const da = new Date(a + "T00:00:00Z").getTime();
  const db = new Date(b + "T00:00:00Z").getTime();
  return Math.round((db - da) / msPerDay);
}

interface ProgressContextValue {
  state: ProgressState;
  totalLessons: number;
  completedCount: number;
  percentComplete: number;
  isLessonUnlocked: (lessonId: string) => boolean;
  isLessonComplete: (lessonId: string) => boolean;
  completeLesson: (lessonId: string, xp: number, quizCorrect: boolean) => void;
  touchStreak: () => void;
  setTtsVoice: (voiceURI: string | null) => void;
  setTtsRate: (rate: number) => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(loadState);
  const order = useMemo(() => allLessons(STAGES).map((l) => l.id), []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const touchStreak = useCallback(() => {
    setState((prev) => {
      const today = todayISO();
      if (prev.lastActiveDate === today) return prev;
      if (!prev.lastActiveDate) {
        return { ...prev, streak: 1, lastActiveDate: today };
      }
      const gap = daysBetween(prev.lastActiveDate, today);
      if (gap === 1) {
        return { ...prev, streak: prev.streak + 1, lastActiveDate: today };
      }
      if (gap <= 0) {
        return { ...prev, lastActiveDate: today };
      }
      return { ...prev, streak: 1, lastActiveDate: today };
    });
  }, []);

  const isLessonUnlocked = useCallback(
    (lessonId: string) => {
      const idx = order.indexOf(lessonId);
      if (idx <= 0) return true;
      const prevId = order[idx - 1];
      return !!state.completed[prevId];
    },
    [order, state.completed]
  );

  const isLessonComplete = useCallback(
    (lessonId: string) => !!state.completed[lessonId],
    [state.completed]
  );

  const completeLesson = useCallback(
    (lessonId: string, xp: number, quizCorrect: boolean) => {
      setState((prev) => {
        const alreadyDone = !!prev.completed[lessonId];
        const today = todayISO();
        let streak = prev.streak;
        let lastActiveDate = prev.lastActiveDate;
        if (prev.lastActiveDate !== today) {
          if (!prev.lastActiveDate) {
            streak = 1;
          } else {
            const gap = daysBetween(prev.lastActiveDate, today);
            streak = gap === 1 ? prev.streak + 1 : 1;
          }
          lastActiveDate = today;
        }
        return {
          ...prev,
          xp: alreadyDone ? prev.xp : prev.xp + xp,
          streak,
          lastActiveDate,
          completed: { ...prev.completed, [lessonId]: true },
          quizResults: {
            ...prev.quizResults,
            [lessonId]: {
              correct: quizCorrect,
              attempts: (prev.quizResults[lessonId]?.attempts ?? 0) + 1,
            },
          },
        };
      });
    },
    []
  );

  const setTtsVoice = useCallback((voiceURI: string | null) => {
    setState((prev) => ({ ...prev, ttsVoiceURI: voiceURI }));
  }, []);

  const setTtsRate = useCallback((rate: number) => {
    setState((prev) => ({ ...prev, ttsRate: rate }));
  }, []);

  const resetProgress = useCallback(() => {
    setState(DEFAULT_STATE);
  }, []);

  const totalLessons = order.length;
  const completedCount = Object.values(state.completed).filter(Boolean).length;
  const percentComplete =
    totalLessons === 0 ? 0 : Math.round((completedCount / totalLessons) * 100);

  const value: ProgressContextValue = {
    state,
    totalLessons,
    completedCount,
    percentComplete,
    isLessonUnlocked,
    isLessonComplete,
    completeLesson,
    touchStreak,
    setTtsVoice,
    setTtsRate,
    resetProgress,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
