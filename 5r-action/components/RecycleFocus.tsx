"use client";

import type { Language } from "@/app/page";
import JapaneseText from "./JapaneseText";

type Props = { language: Language; furigana: boolean };

export default function RecycleFocus({ language, furigana }: Props) {
  const ja = language === "ja";
  const J = ({ children }: { children: string }) => (
    <JapaneseText text={children} enabled={furigana} />
  );

  const fiveRs = ja
    ? [
        ["01", "リフューズ", "必要のない袋や使い捨て容器を断り、ごみを生むきっかけを減らす。", "✋"],
        ["02", "リデュース", "必要なものを必要な分だけ選び、出てくるごみの量を減らす。", "➖"],
        ["03", "リユース", "使えるものをすぐに捨てず、繰り返し使って寿命を延ばす。", "🔁"],
        ["04", "リペア", "壊れたものを修理して使い続け、捨てるまでの時間を延ばす。", "🛠️"],
        ["05", "リサイクル", "使い終わったものを資源として生かし、新たな利用につなげる。", "♻️"],
      ]
    : [
        ["01", "Refuse", "Refuse unnecessary bags and disposable containers to reduce opportunities for waste to be created.", "✋"],
        ["02", "Reduce", "Choose only what you need, in the amount you need, to reduce the amount of waste produced.", "➖"],
        ["03", "Reuse", "Keep using things that still work instead of throwing them away, extending their useful life.", "🔁"],
        ["04", "Repair", "Repair broken items and keep using them, extending the time before they are discarded.", "🛠️"],
        ["05", "Recycle", "Use finished items as resources and connect them to new uses.", "♻️"],
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
          ) : "Learn more about recycling."}
        </h2>
        <p className="focus-purpose-copy">
          {ja ? (
            <J>リサイクルとは以下の5つの5Rと呼ばれる5つの社会問題を解決する考え方の一つです。</J>
          ) : (
            "Recycling is one of the five ideas known as the 5Rs for addressing social and environmental problems related to waste."
          )}
        </p>
        <h3 className="five-r-heading">{ja ? <J>5Rとは</J> : "What are the 5Rs?"}</h3>
      </div>

      <div className="focus-reason-grid five-r-card-grid">
        {fiveRs.map(([number, title, detail, emoji]) => (
          <article key={number} className="focus-reason-card five-r-card">
            <div className="focus-reason-top">
              <span className="focus-number">{number}</span>
              <span className="focus-emoji" aria-hidden="true">{emoji}</span>
            </div>
            <h3>{ja ? <J>{title}</J> : title}</h3>
            <p>{ja ? <J>{detail}</J> : detail}</p>
          </article>
        ))}
      </div>

      <a
        className="five-r-source-link"
        href="https://www.erca.go.jp/jfge/greenfriends/keywords.html"
        target="_blank"
        rel="noreferrer"
      >
        {ja ? <J>環境再生保全機構「環境キーワード一覧」内の「5R」</J> : "Environmental Restoration and Conservation Agency: 5R in Environmental Keywords"}
        <span aria-hidden="true">↗</span>
      </a>

      <div className="recycle-definition-panel">
        <div className="recycle-definition-copy">
          <p className="eyebrow">{ja ? <J>リサイクルの工程</J> : "RECYCLE IN PRACTICE"}</p>
          <h3 className="one-line-title">
            {ja ? <J>捨てるで終わるのではなく、次に繋げる。</J> : "From used item to next resource."}
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
