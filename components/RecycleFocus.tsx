"use client";

import type { Language } from "@/app/page";
import JapaneseText from "./JapaneseText";

type Props = { language: Language; furigana: boolean };

export default function RecycleFocus({ language, furigana }: Props) {
  const ja = language === "ja";
  const J = ({ children }: { children: string }) => (
    <JapaneseText text={children} enabled={furigana} />
  );

  const reasons = ja
    ? [
        ["01", "社会問題", "大量処分", "実態を知るだけではなく、対策を実践していくことに繋げる。", "🗑️"],
        ["02", "選択", "より詳細に", "リサイクルに対しての仕組みや企業など詳細に認知を広げていこう。", "🔎"],
        ["03", "焦点", "リサイクル", "リサイクルに対しての実態を取材を通して視覚的に認知する。", "♻️"],
      ]
    : [
        ["01", "PROBLEM", "Mass disposal", "Move beyond awareness and toward practical action that reduces what gets thrown away.", "🗑️"],
        ["02", "CHOICE", "Go deeper", "Rather than covering all 3Rs broadly, follow one method through systems, products, and companies.", "🔎"],
        ["03", "FOCUS", "Recycle", "Make the transformation from waste to resources visible through real examples and an interview.", "♻️"],
      ];

  return (
    <section id="recycle-focus" className="section-shell recycle-focus-section">
      <div className="section-heading recycle-focus-heading">
        <p className="eyebrow">{ja ? <J>なぜリサイクルなのか</J> : "WHY RECYCLE"}</p>
        <h2 className="one-line-title">
          {ja ? (
            <>
              <span className="type-katakana"><J>リサイクル</J></span><J>について詳しく知ろう。</J>
            </>
          ) : "Go deep on Recycle instead of covering all 3Rs broadly."}
        </h2>
        <p className="focus-purpose-copy desktop-one-line-copy">
          {ja ? (
            <J>このサイトの趣旨は5Rの認知だけではなく、大量廃棄という5Rの中にある社会問題の実践的な解決方法の行動を促すことです。</J>
          ) : (
            "The goal is not to memorize the 3Rs, but to understand a practical response to mass disposal and turn that knowledge into action."
          )}
        </p>
        <div className="five-r-list" aria-label={ja ? "5R" : "Five Rs"}>
          {(ja
            ? ["リフューズ", "リデュース", "リユース", "リペア", "リサイクル"]
            : ["Refuse", "Reduce", "Reuse", "Repair", "Recycle"]
          ).map((item) => (
            <span key={item}>{ja ? <J>{item}</J> : item}</span>
          ))}
        </div>
      </div>

      <div className="focus-reason-grid">
        {reasons.map(([number, label, title, detail, emoji]) => (
          <article key={number} className="focus-reason-card">
            <div className="focus-reason-top">
              <span className="focus-number">{number}</span>
              <span className="focus-emoji" aria-hidden="true">{emoji}</span>
            </div>
            <p className="focus-label">{label}</p>
            <h3>{ja ? <J>{title}</J> : title}</h3>
            <p>{ja ? <J>{detail}</J> : detail}</p>
          </article>
        ))}
      </div>

      <div className="recycle-definition-panel">
        <div className="recycle-definition-copy">
          <p className="eyebrow">{ja ? <J>リサイクルの工程</J> : "RECYCLE IN PRACTICE"}</p>
          <h3 className="one-line-title">
            {ja ? (
              <>
                <J>捨てるで終わるのではなく、次に繋げる。</J>
              </>
            ) : (
              "From used item to next resource."
            )}
          </h3>
          <p className="recycle-definition-sentence desktop-one-line-copy">
            {ja ? (
              <J>捨てたものを正しく分別し、回収、加工を通して次に繋げるこの工程こそが、リサイクルです。</J>
            ) : (
              "Sort used materials correctly, then connect collection, sorting and processing so they can become resources again."
            )}
          </p>
        </div>
        <div className="recycle-loop" aria-label={ja ? "リサイクルの流れ" : "Recycle flow"}>
          <div><span>🗑️</span><b>{ja ? <J>使い終わる</J> : "Used"}</b></div>
          <i>→</i>
          <div><span>🧺</span><b>{ja ? <J>分ける</J> : "Sort"}</b></div>
          <i>→</i>
          <div><span>🚚</span><b>{ja ? <J>回収</J> : "Collect"}</b></div>
          <i>→</i>
          <div><span>🏭</span><b>{ja ? <J>加工</J> : "Process"}</b></div>
          <i>→</i>
          <div><span>♻️</span><b>{ja ? <J>次の資源</J> : "Resource"}</b></div>
        </div>
      </div>

      <a className="next-section-link" href="#field-report">
        {ja ? <J>じゃあ実際にリサイクルの現場を見てみよう</J> : "Next, see how recycling works in the real world"}<span>→</span>
      </a>
    </section>
  );
}
