"use client";

import type { Language } from "@/app/page";
import JapaneseText from "./JapaneseText";

type Props = {
  language: Language;
  furigana: boolean;
  onLanguageChange: (language: Language) => void;
  onFuriganaChange: (value: boolean) => void;
};

export default function SiteHeader({ language, furigana, onLanguageChange, onFuriganaChange }: Props) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="3R ACTION Recycle Focus home"><span className="brand-mark">3R</span><span>ACTION</span></a>
      <nav className="header-controls" aria-label="Display controls">
        <div className="segmented" role="group" aria-label="Language">
          <button className={language === "ja" ? "active" : ""} onClick={() => onLanguageChange("ja")}><JapaneseText text="日本語" enabled={furigana} /></button>
          <button className={language === "en" ? "active" : ""} onClick={() => onLanguageChange("en")}>EN</button>
        </div>
        {language === "ja" && (
          <label className="toggle-label">
            <span>ふりがな</span>
            <input type="checkbox" checked={furigana} onChange={(event) => onFuriganaChange(event.target.checked)} />
            <span className="toggle-track" aria-hidden="true"><span /></span>
          </label>
        )}
      </nav>
    </header>
  );
}
