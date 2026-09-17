"use client";

import type { Language } from "@/app/page";
import JapaneseText from "./JapaneseText";

type Props = { language: Language; furigana: boolean };

type JProps = { children: string };

export default function FieldReport({ language, furigana }: Props) {
  const ja = language === "ja";
  const J = ({ children }: JProps) => <JapaneseText text={children} enabled={furigana} />;

  const collectionMethods = ja
    ? [
        ["行政回収", "市区町村から委託を受けて回収"],
        ["集団回収", "マンションや市民団体と契約して回収"],
        ["事業所回収", "事業所と直接契約して回収"],
      ]
    : [
        ["Municipal", "Collected under contracts with municipalities"],
        ["Group", "Collected for apartments and community groups"],
        ["Business", "Collected directly from businesses"],
      ];

  const paperLoop = ja
    ? [
        ["新聞紙", "新聞紙・印刷用紙"],
        ["雑誌", "白板紙"],
        ["段ボール", "段ボール"],
        ["牛乳パック", "家庭紙"],
      ]
    : [
        ["Newspaper", "Newspaper / printing paper"],
        ["Magazines", "White paperboard"],
        ["Cardboard", "Cardboard"],
        ["Milk cartons", "Household paper"],
      ];

  const hazards = ja
    ? [
        ["昇華転写紙", "特殊なインクやコーティングがリサイクルの過程で除去できないため品質低下につながる。アイロンプリント紙など。"],
        ["感熱性発泡紙", "熱で簡単に膨らむため、機械の故障につながる恐れがある。点字印刷物など。"],
        ["強い匂いの紙", "リサイクルプロセスをへても匂いは残り続けるため、再生紙の品質低下になる恐れがある。洗剤の箱など。"],
        ["ロウ引き段ボール", "簡単に水で溶けないため、溶け残った物が機械に付着すると、機械の故障原因につながります。水産物の輸送箱など。"],
      ]
    : [
        ["Sublimation paper", "Heat-transfer paper can lower recycled-paper quality."],
        ["Heat-foaming paper", "Tactile paper expands with heat and can disrupt recycling."],
        ["Strongly scented paper", "Soap and incense boxes can be difficult to detect."],
        ["Wax-coated cardboard", "Water-resistant produce boxes need separate handling."],
      ];

  return (
    <section id="field-report" className="field-report-section">
      <div className="section-shell">
        <header className="field-report-hero field-report-hero-v2">
          <div>
            <p className="eyebrow">{ja ? <J>取材内容 / 奥山商店さん</J> : "FIELD REPORT / OKUYAMA SHOTEN"}</p>
            <h2 className="field-report-main-title desktop-one-line-title">
              {ja ? <J>ゴミの先には、人の未来がある。</J> : "Behind every piece of waste is someone's work."}
            </h2>
            <p className="field-report-lead field-report-lead-one-line">
              {ja ? (
                <J>資源が再び材料になるまでの構図を、奥山商店株式会社さんへの取材をもとに理解しよう。</J>
              ) : (
                "Based on an interview with Okuyama Shoten Co., Ltd., this visual report follows materials from collection to sorting, compression, and reuse."
              )}
            </p>
            <div className="report-source-chips">
              <span>{ja ? <J>取材レポート</J> : "Interview report"}</span>
              <span>{ja ? <J>公式情報で補足</J> : "Official sources added"}</span>
            </div>
          </div>
          <aside className="report-purpose-card" aria-label={ja ? "このレポートの目的" : "Purpose of this report"}>
            <p className="report-purpose-kicker">
              {ja ? <J>このレポートで分かること</J> : "WHAT THIS REPORT SHOWS"}
            </p>
            <h3 className="report-purpose-title">
              {ja ? <J>ゴミを出した後の工程</J> : "What happens after we put waste out?"}
            </h3>
            <div className="report-purpose-list">
              <div><span aria-hidden="true">🚚</span><p>{ja ? <J>回収する人</J> : "Collectors"}</p></div>
              <div><span aria-hidden="true">♻️</span><p>{ja ? <J>資源の行方</J> : "Resource journey"}</p></div>
              <div><span aria-hidden="true">⚠️</span><p>{ja ? <J>現場の課題</J> : "Field challenges"}</p></div>
            </div>
            <p className="report-purpose-note">
              {ja ? <J>回収の先を、図と数字で短く理解します。</J> : "A concise visual guide to what happens after collection."}
            </p>
          </aside>
        </header>

        <section className="report-company-intro" aria-labelledby="company-intro-title">
          <div className="report-company-intro-copy">
            <p className="eyebrow">INTERVIEW / COMPANY</p>
            <h3 id="company-intro-title" className="one-line-title">{ja ? <J>奥山商店株式会社さんについて</J> : "First, meet Okuyama Shoten Co., Ltd."}</h3>
            <p>{ja ? (<>
              <J>奥山商店は日頃から私たちが普段何気なく捨てているゴミを資源として活用できるようにする会社です。</J><br />
              <J>下の数字はそれぞれ会社を象徴する三つの数字です。</J>
            </>) : "The three figures below are a quick company introduction so you know whose work this report follows before exploring the recycling process."}</p>
          </div>
          <a className="report-company-badge" href="https://okuyama-syouten.co.jp/" target="_blank" rel="noreferrer">
            <span aria-hidden="true">🏢</span>
            <div><strong>{ja ? <J>奥山商店株式会社</J> : "Okuyama Shoten Co., Ltd."}</strong><small>{ja ? <J>資源回収・古紙加工</J> : "Resource collection & waste-paper processing"}</small></div>
          </a>
        </section>

        <div className="report-metric-strip" aria-label={ja ? "奥山商店株式会社を知る3つの数字" : "Three figures about Okuyama Shoten"}>
          <article>
            <span className="metric-label">{ja ? <J>地域との歴史</J> : "HISTORY"}</span>
            <strong>50+</strong>
            <p>{ja ? <J>年以上、地域に根ざす</J> : "years rooted in the community"}</p>
            <small>{ja ? <J>会社の歩みを示す数字</J> : "A snapshot of the company's history"}</small>
          </article>
          <article>
            <span className="metric-label">{ja ? <J>行政回収</J> : "MUNICIPAL"}</span>
            <strong>3</strong>
            <p>{ja ? <J>市の行政回収を担当</J> : "municipal collection areas"}</p>
            <small>{ja ? <J>西東京・東久留米・東村山</J> : "Nishitokyo / Higashikurume / Higashimurayama"}</small>
          </article>
          <article>
            <span className="metric-label">{ja ? <J>対応エリア</J> : "SERVICE AREA"}</span>
            <strong>7</strong>
            <p>{ja ? <J>市を対応エリアとして掲載</J> : "cities listed in its service area"}</p>
            <small>{ja ? <J>会社が地域で担う範囲を示す数字</J> : "A snapshot of the service footprint"}</small>
          </article>
        </div>

        <div className="report-context-bridge">
          <span aria-hidden="true">↓</span>
          <p>{ja ? <J>会社を知ったら、次は「回収した資源がどこへ行くのか」を見てみよう。</J> : "Now follow what happens to resources after collection."}</p>
        </div>

        <section className="report-visual-block">
          <div className="report-block-heading">
            <p className="eyebrow">01 / FLOW</p>
            <h3>{ja ? <J>資源がどう扱われるかの工程を知ろう。</J> : "Collection is only the beginning."}</h3>
          </div>

          <div className="process-flow" aria-label={ja ? "資源回収の流れ" : "Recycling flow"}>
            <div className="process-node node-home"><span className="emoji-visual" aria-hidden="true">🏠</span><b>{ja ? <J>家庭・事業所</J> : "Homes & businesses"}</b></div>
            <span className="process-arrow">→</span>
            <div className="process-node node-truck"><span className="emoji-visual" aria-hidden="true">🚚</span><b>{ja ? <J>回収</J> : "Collect"}</b></div>
            <span className="process-arrow">→</span>
            <div className="process-node node-sort"><span className="emoji-visual" aria-hidden="true">✋</span><b>{ja ? <J>手選別</J> : "Sort"}</b></div>
            <span className="process-arrow">→</span>
            <div className="process-node node-press"><span className="emoji-visual" aria-hidden="true">🗜️</span><b>{ja ? <J>圧縮</J> : "Press"}</b></div>
            <span className="process-arrow">→</span>
            <div className="process-node node-paper"><span className="emoji-visual" aria-hidden="true">📄</span><b>{ja ? <J>新しい紙へ</J> : "New paper"}</b></div>
          </div>

          <div className="collection-method-grid">
            {collectionMethods.map(([title, detail], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h4>{ja ? <J>{title}</J> : title}</h4>
                <p>{ja ? <J>{detail}</J> : detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="report-visual-block report-paper-block">
          <div className="report-block-heading">
            <p className="eyebrow">02 / SORT</p>
            <h3>{ja ? (
              <>
                <J>紙は種類によってリサイクルされて</J><br />
                <J>出てくるものが違う。</J>
              </>
            ) : "How you sort paper changes what it can become."}</h3>
          </div>
          <div className="paper-transform-grid">
            {paperLoop.map(([before, after]) => (
              <article key={before}>
                <div className="paper-shape" aria-hidden="true"><span /></div>
                <b>{ja ? <J>{before}</J> : before}</b>
                <span className="transform-arrow">→</span>
                <strong>{ja ? <J>{after}</J> : after}</strong>
              </article>
            ))}
          </div>
          <div className="report-callout visual-callout">
            <span className="callout-symbol">!</span>
            <div>
              <strong>{ja ? <J>紙マークがついてても、リサイクルできるものとできないものがあります。</J> : "A paper mark does not always mean the item can be recycled."}</strong>
              <p>{ja ? <J>次に進んでリサイクルできるものとできないものを見極めてみよう‼</J> : "The Paper Recycling Promotion Center warns that prohibited contaminants can cause machine trouble and defective products."}</p>
            </div>
          </div>
        </section>

        <section className="report-visual-block">
          <div className="report-block-heading">
            <p className="eyebrow">03 / DO NOT MIX</p>
            <h3>{ja ? <J>リサイクルできない4つの代表例</J> : "Four common materials that should stay out of waste paper."}</h3>
          </div>
          <div className="hazard-grid">
            {hazards.map(([title, detail], index) => (
              <article key={title}>
                <div className="hazard-emoji" aria-hidden="true">{["📄", "♨️", "🧼", "📦"][index]}</div>
                <span className="hazard-index">0{index + 1}</span>
                <h4>{ja ? <J>{title}</J> : title}</h4>
                <p>{ja ? <J>{detail}</J> : detail}</p>
              </article>
            ))}
          </div>
          <a className="report-inline-link" href="https://www.prpc.or.jp/recycle/diagnosis/" target="_blank" rel="noreferrer">
            {ja ? <J>古紙再生促進センターの「古紙分別チェッカー」で確認する</J> : "Check the Paper Recycling Promotion Center sorting checker"} <span>↗</span>
          </a>
        </section>

        <section className="report-visual-block report-challenges-v2">
          <div className="report-block-heading">
            <p className="eyebrow">04 / REALITY</p>
            <h3>{ja ? <J>現場で見えた、数字の重さ。</J> : "The numbers reveal the pressure on the industry."}</h3>
            <p>{ja ? <J>以下は取材で聞いた数値で表せる古紙、再生紙の現状とみられる問題などです。</J> : "These figures were reported in the interview and are shown here to make their impact easier to grasp."}</p>
          </div>
          <div className="challenge-number-grid">
            <article className="challenge-number-card decline"><span>{ja ? <J>新聞の回収量</J> : "Newspaper collection"}</span><strong>約 -20%</strong><p>{ja ? <J>毎年の減少と取材で説明</J> : "reported annual decline"}</p></article>
            <article className="challenge-number-card decline"><span>{ja ? <J>雑誌・雑紙</J> : "Magazines / mixed paper"}</span><strong>約 -10%</strong><p>{ja ? <J>毎年の減少と取材で説明</J> : "reported annual decline"}</p></article>
            <article className="challenge-number-card fire"><span>{ja ? <J>全焼したパッカー車</J> : "Burned-out packer truck"}</span><strong className="packer-price">{ja ? "約1,000万円" : "about ¥10M"}</strong><p>{ja ? <J>新車価格の目安</J> : "approximate replacement cost"}</p></article>
          </div>
          <div className="mini-challenge-row">
            <div><span className="mini-emoji" aria-hidden="true">📦</span><p>{ja ? <J>置き配の誤回収</J> : "Parcel pickup mistakes"}</p></div>
            <div><span className="mini-emoji" aria-hidden="true">🚛</span><p>{ja ? <J>運転人材の不足</J> : "Driver shortages"}</p></div>
            <div><span className="mini-emoji" aria-hidden="true">🌧️</span><p>{ja ? <J>天候で回収量が変動</J> : "Weather changes volume"}</p></div>
          </div>
        </section>

        <section className="report-visual-block">
          <div className="report-block-heading">
            <p className="eyebrow">05 / TOKYO</p>
            <h3>{ja ? <J>場所によって回収される方法は様々。</J> : "Even within Tokyo, collection looks different."}</h3>
            <p className="tokyo-summary-one-line">{ja ? <J>取材から見えた23区と多摩地域の回収についての違いです。もっと詳しく知りたかったり、実際に出す時は各自治体での詳細なルールを再確認してください。</J> : "This comparison summarizes representative differences described in the interview. Always check current municipal rules before disposal."}</p>
          </div>
          <div className="versus-board">
            <div className="versus-side wards"><span>23 WARDS</span><h4>{ja ? <J>東京23区</J> : "Tokyo 23 wards"}</h4><ul><li>{ja ? <J>ステーション回収が中心</J> : "Station collection is common"}</li><li>{ja ? <J>指定袋なしが一般的</J> : "Designated paid bags are less common"}</li></ul></div>
            <div className="versus-mark">VS</div>
            <div className="versus-side tama"><span>TAMA</span><h4>{ja ? <J>多摩地域</J> : "Tama area"}</h4><ul><li>{ja ? <J>戸別回収が中心</J> : "Door-to-door collection is common"}</li><li>{ja ? <J>指定の有料袋が多い</J> : "Designated paid bags are common"}</li></ul></div>
          </div>
        </section>

        <section className="report-action-section">
          <p className="eyebrow">RECYCLE ACTION</p>
          <h3 className="one-line-title">{ja ? <J>今日から守れる3つの古紙回収におけるルール</J> : "Three actions that make recycling work."}</h3>
          <div className="action-card-grid">
            <article><span>01</span><strong>{ja ? <J>禁忌品を混ぜない</J> : "Keep contaminants out"}</strong></article>
            <article><span>02</span><strong>{ja ? <J>段ボールと雑紙を分ける</J> : "Separate cardboard and mixed paper"}</strong></article>
            <article><span>03</span><strong>{ja ? <J>置き配を回収物から離す</J> : "Keep deliveries away from collection items"}</strong></article>
          </div>
          <blockquote className="report-final-quote desktop-one-line-copy">
            {ja ? <J>リサイクルは捨てる前で全てが決まる‼</J> : "Recycling begins not after disposal, but with how we use and sort things before collection."}
          </blockquote>
        </section>

        <details className="report-sources-panel report-collapsible">
          <summary>{ja ? <J>出典・補足情報を見る</J> : "View sources and notes"}</summary>
          <p className="eyebrow">SOURCES</p>
          <p>{ja ? <J>取材レポートを中心に、奥山商店株式会社の公式サイトと古紙再生促進センターの公開情報を補足に使用しています。取材時点の数値や地域ルールは変わる可能性があります。</J> : "This section is based mainly on the supplied interview report, with supporting information from Okuyama Shoten's official website and the Paper Recycling Promotion Center. Interview figures and local rules may change."}</p>
          <div className="report-source-links">
            <a href="https://okuyama-syouten.co.jp/" target="_blank" rel="noreferrer">{ja ? <J>奥山商店株式会社 公式サイト</J> : "Okuyama Shoten official site"} ↗</a>
            <a href="https://www.prpc.or.jp/recycle/waste_paper/" target="_blank" rel="noreferrer">{ja ? <J>古紙再生促進センター 禁忌品情報</J> : "Paper Recycling Promotion Center"} ↗</a>
          </div>
        </details>

        <a className="next-section-link" href="#quiz">
          {ja ? <J>取材で知った情報を、クイズで確認してみよう</J> : "Now test what you learned in the quiz"}<span>→</span>
        </a>
      </div>
    </section>
  );
}
