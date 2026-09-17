"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { Language } from "@/app/page";
import JapaneseText from "./JapaneseText";

type Props = { language: Language; furigana: boolean };
type Side = "left" | "right";
type Phase = "waiting" | "open" | "hidden";

const facts = [
    { ja: "ペットボトルは、中を空にして軽くすすぐとリサイクルしやすくなるよ。", en: "Emptying and lightly rinsing a bottle makes it easier to recycle." },
  { ja: "キャップとラベルの分け方は、住んでいる地域のルールを確認しよう。", en: "Check your local rules for sorting caps and labels." },
    { ja: "つぶして回収すると運びやすくなる地域もあるけれど、必ず自治体のルールを確認しよう。", en: "Some areas ask you to flatten bottles, but always follow your municipality's rules." },
  { ja: "ペットボトルから、服や文房具などの新しい製品が作られることもあるよ。", en: "Recycled plastic bottles can become clothing, stationery, and other new products." },
];

const randomPosition = (): { side: Side; top: number } => ({ side: Math.random() < 0.5 ? "left" : "right", top: 22 + Math.floor(Math.random() * 55) });

export default function BottleFact({ language, furigana }: Props) {
  const [position, setPosition] = useState<{ side: Side; top: number }>({ side: "right", top: 56 });
  const [factIndex, setFactIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("waiting");
  const [hasTouched, setHasTouched] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const timers = useRef<number[]>([]);

  const addTimer = (callback: () => void, delay: number) => { const timer = window.setTimeout(callback, delay); timers.current.push(timer); };
  const clearTimers = () => { timers.current.forEach((timer) => window.clearTimeout(timer)); timers.current = []; };

  useEffect(() => { setPosition(randomPosition()); return clearTimers; }, []);
  useEffect(() => {
    if (hasTouched || phase !== "waiting") return;
    const attentionTimer = window.setTimeout(() => {
      setIsShaking(true);
      const stopTimer = window.setTimeout(() => setIsShaking(false), 900);
      timers.current.push(stopTimer);
    }, 10000);
    timers.current.push(attentionTimer);
  }, [hasTouched, phase]);

  const chooseNewFact = () => setFactIndex((previous) => {
    if (facts.length <= 1) return 0;
    let next = Math.floor(Math.random() * facts.length);
    while (next === previous) next = Math.floor(Math.random() * facts.length);
    return next;
  });

  const resetBottle = () => {
    clearTimers(); setPhase("hidden"); setIsShaking(false);
    addTimer(() => { setPosition(randomPosition()); chooseNewFact(); }, 180);
    addTimer(() => setPhase("waiting"), 420);
  };

  const openFact = () => {
    if (phase !== "waiting") return;
    clearTimers(); setHasTouched(true); setIsShaking(false); chooseNewFact(); setPhase("open"); addTimer(resetBottle, 4000);
  };

  const widgetStyle: CSSProperties = position.side === "left" ? { top: `${position.top}%`, left: "8px", right: "auto" } : { top: `${position.top}%`, right: "8px", left: "auto" };

  return (
    <aside className={`bottle-widget ${position.side} phase-${phase}`} style={widgetStyle} aria-live="polite">
      {phase === "open" && (
        <div className="fact-bubble" role="status">
          <button type="button" className="fact-close" onClick={resetBottle} aria-label={language === "ja" ? "豆知識を閉じる" : "Close the fact"}>×</button>
          <span className="rarity-label">RECYCLE FACT</span>
          <p>{language === "ja" ? <JapaneseText text={facts[factIndex].ja} enabled={furigana} /> : facts[factIndex].en}</p>
        </div>
      )}
      <button type="button" className={`bottle-button ${isShaking ? "is-shaking" : ""}`} onClick={openFact} disabled={phase !== "waiting"} aria-label={language === "ja" ? "ペットボトルの豆知識を開く" : "Open a bottle fact"}>
        <img src="/pet-bottle.png" alt="" draggable={false} />
      </button>
      {!hasTouched && phase === "waiting" && <span className="touch-label">{language === "ja" ? <JapaneseText text="タッチしてね！" enabled={furigana} /> : "Touch me!"}</span>}
    </aside>
  );
}
