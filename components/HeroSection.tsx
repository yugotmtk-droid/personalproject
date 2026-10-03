"use client";

import type { Language } from "@/app/page";
import JapaneseText from "./JapaneseText";

type Props = { language: Language; furigana: boolean };

export default function HeroSection({ language, furigana }: Props) {
  const scrollToFocus = () => {
    const target = document.getElementById("recycle-focus");
    if (!target) return;
    const offset = window.innerWidth < 720 ? 76 : 94;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
  };

  const J = ({ children }: { children: string }) => <JapaneseText text={children} enabled={furigana} />;

  return (
    <section id="top" className="hero section-shell recycle-hero">
      <div className="hero-copy">
        <p className="eyebrow">5R ACTION / RECYCLE FOCUS</p>
        <h1 className="hero-two-line-title">
          {language === "ja" ? (
            <span className="hero-title-line"><J>リサイクルに対する解決方法を知ろう。</J></span>
          ) : (
            <span className="hero-title-line">Learn practical solutions through recycling.</span>
          )}
        </h1>
        <p className="hero-lead hero-lead-two-lines">
          {language === "ja" ? (
            <>
              <span className="hero-lead-line"><J>大量処分という社会的課題に対して</J></span>
              <span className="hero-lead-line"><J>実践的な解決方法としてリサイクルがどれだけ効果的なのか、</J></span>
              <span className="hero-lead-line"><J>実際に紙のリサイクルをお手伝いしている企業の現場から学ぶサイトです。</J></span>
            </>
          ) : (
            "Learn how effective recycling can be as a practical response to mass disposal through a company that works with paper recycling in the real world."
          )}
        </p>
        <button className="primary-button" onClick={scrollToFocus}>
          {language === "ja" ? <J>Recycleを深く見る</J> : "Explore Recycle"}
          <span aria-hidden="true">↓</span>
        </button>
      </div>

      <div className="hero-visual recycle-hero-visual" aria-hidden="true">
        <div className="hero-orbit hero-orbit-outer"><span>WASTE</span></div>
        <div className="hero-orbit hero-orbit-middle"><span>RECYCLE</span></div>
        <div className="hero-orbit hero-orbit-inner"><span>RESOURCE</span></div>
        <div className="hero-recycle-core"><div className="hero-recycle-icon">♻</div></div>
      </div>
    </section>
  );
}
