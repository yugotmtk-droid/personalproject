"use client";

import type { Language } from "@/app/page";
import JapaneseText from "./JapaneseText";

type Props = { language: Language; furigana: boolean };

export default function Footer({ language, furigana }: Props) {
  const J = ({ children }: { children: string }) => <JapaneseText text={children} enabled={furigana} />;
  return (
    <footer className="footer section-shell">
      <div><span className="brand-mark">3R</span><h2 className="one-line-title">{language === "ja" ? <J>あなたの行動が、次の資源へ。</J> : "The next resource begins with sorting."}</h2></div>
      <a href="#top">{language === "ja" ? <J>ページ上部へ</J> : "Back to top"} ↑</a>
    </footer>
  );
}
