import { useProgress } from "../lib/progress";
import type { TtsStatus } from "../lib/tts";

interface TtsControlsProps {
  status: TtsStatus;
  voices: SpeechSynthesisVoice[];
  onPlay: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
}

export function TtsControls({
  status,
  voices,
  onPlay,
  onPause,
  onResume,
  onStop,
}: TtsControlsProps) {
  const { state, setTtsVoice, setTtsRate } = useProgress();

  if (status === "unsupported") {
    return (
      <p className="text-xs text-ink-400 italic">
        Text-to-speech isn't supported in this browser.
      </p>
    );
  }

  const englishVoices = voices.filter((v) => v.lang.startsWith("en"));
  const voiceList = englishVoices.length > 0 ? englishVoices : voices;

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {status === "speaking" ? (
        <button
          type="button"
          onClick={onPause}
          className="flex items-center gap-2 rounded-full bg-lime-400 text-ink-900 font-semibold text-sm px-4 py-2 hover:bg-lime-300 transition-colors"
        >
          ⏸ Pause
        </button>
      ) : status === "paused" ? (
        <button
          type="button"
          onClick={onResume}
          className="flex items-center gap-2 rounded-full bg-lime-400 text-ink-900 font-semibold text-sm px-4 py-2 hover:bg-lime-300 transition-colors"
        >
          ▶ Resume
        </button>
      ) : (
        <button
          type="button"
          onClick={onPlay}
          className="flex items-center gap-2 rounded-full bg-lime-400 text-ink-900 font-semibold text-sm px-4 py-2 hover:bg-lime-300 transition-colors"
        >
          🔊 Listen
        </button>
      )}

      {status !== "idle" && (
        <button
          type="button"
          onClick={onStop}
          className="text-xs text-ink-300 hover:text-ink-100 underline underline-offset-2"
        >
          Stop
        </button>
      )}

      <select
        value={state.ttsVoiceURI ?? ""}
        onChange={(e) => setTtsVoice(e.target.value || null)}
        className="text-xs bg-ink-800 border border-ink-600 rounded-lg px-2 py-1.5 text-ink-200 max-w-[10rem]"
      >
        <option value="">Default voice</option>
        {voiceList.map((v) => (
          <option key={v.voiceURI} value={v.voiceURI}>
            {v.name}
          </option>
        ))}
      </select>

      <label className="flex items-center gap-1.5 text-xs text-ink-300">
        Speed
        <input
          type="range"
          min={0.7}
          max={1.4}
          step={0.1}
          value={state.ttsRate}
          onChange={(e) => setTtsRate(Number(e.target.value))}
          className="accent-lime-400"
        />
      </label>
    </div>
  );
}
