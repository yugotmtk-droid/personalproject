"use client";

import type { Language } from "@/app/page";
import JapaneseText from "./JapaneseText";

type Props = { language: Language; furigana: boolean };

type JProps = { children: string };

export default function PostQuizConclusion({ language, furigana }: Props) {
  const ja = language === "ja";
  const J = ({ children }: JProps) => <JapaneseText text={children} enabled={furigana} />;

  return (
    <section id="conclusion" className="post-quiz-conclusion-section">
      <div className="section-shell">
        <section className="project-message" aria-labelledby="project-message-title">
          <h3 id="project-message-title">
            {ja ? (
              <>
                <span className="message-line"><J>リサイクルを知るだけで終わらせない。</J></span>
                <span className="message-line"><J>知るだけではなく実践というステップへ。</J></span>
              </>
            ) : (
              "Turn recycling knowledge into practical action."
            )}
          </h3>
          <p>
            {ja ? <J>社会問題である大量廃棄を減らすためには、知識を活かした行動が必要です。</J> : "Reducing mass disposal requires not only knowledge, but practical sorting that keeps materials circulating as resources."}
          </p>
        </section>

        <section className="takeaway-message" aria-labelledby="takeaway-title">
          <p className="eyebrow">WHAT THIS SITE WANTS TO SAY</p>
          <h3 id="takeaway-title" className="takeaway-one-line">
            {ja ? <J>5Rを認知するだけではなく、リサイクルを理解し行動していく。</J> : "Go deeper on Recycle, then change what you do."}
          </h3>
          <p>
            {ja ? <J>このサイトでは、大量廃棄の実態とその解決方法を伝えてきました。しかし、知るだけではなく行動してもらうことがこのサイトで最後に伝えたいことです。</J> : "The final message is simple: reducing mass disposal takes more than knowing the system. Learn from real companies and products, then change how you sort and put materials out."}
          </p>
        </section>
      </div>
    </section>
  );
}
