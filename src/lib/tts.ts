import { useCallback, useEffect, useRef, useState } from "react";

export type TtsStatus = "idle" | "speaking" | "paused" | "unsupported";

interface UseTtsOptions {
  voiceURI?: string | null;
  rate?: number;
}

export function useTextToSpeech({ voiceURI, rate = 1 }: UseTtsOptions) {
  const supported =
    typeof window !== "undefined" && "speechSynthesis" in window;
  const [status, setStatus] = useState<TtsStatus>(
    supported ? "idle" : "unsupported"
  );
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!supported) return;
    const load = () => setVoices(window.speechSynthesis.getVoices());
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () =>
      window.speechSynthesis.removeEventListener("voiceschanged", load);
  }, [supported]);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setStatus("idle");
  }, [supported]);

  const speak = useCallback(
    (text: string, onEnd?: () => void) => {
      if (!supported) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = 1;
      const chosen = voices.find((v) => v.voiceURI === voiceURI);
      if (chosen) utterance.voice = chosen;
      utterance.onstart = () => setStatus("speaking");
      utterance.onpause = () => setStatus("paused");
      utterance.onresume = () => setStatus("speaking");
      utterance.onend = () => {
        setStatus("idle");
        onEnd?.();
      };
      utterance.onerror = () => setStatus("idle");
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [supported, voices, voiceURI, rate]
  );

  const pause = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.pause();
  }, [supported]);

  const resume = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.resume();
  }, [supported]);

  useEffect(() => stop, [stop]);

  return { supported, status, voices, speak, pause, resume, stop };
}
