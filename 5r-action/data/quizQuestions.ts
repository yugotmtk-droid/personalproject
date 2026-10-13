export type QuizQuestion = {
  id: number;
  category: "recycle" | "field";
  questionJa: string;
  questionEn: string;
  optionsJa: string[];
  optionsEn: string[];
  answer: number;
  explanationJa: string;
  explanationEn: string;
};

const base: Omit<QuizQuestion, "id">[] = [
  { category: "recycle", questionJa: "Recycleのために最初に大切なことは？", questionEn: "What is an important first step for recycling?", optionsJa: ["地域のルールに従って分別する", "全部同じ袋に入れる", "中身を残したまま出す", "回収場所の外に置く"], optionsEn: ["Sort by local rules", "Put everything in one bag", "Leave contents inside", "Leave it outside the collection point"], answer: 0, explanationJa: "正しく分けることが、回収後の選別や再資源化につながります。", explanationEn: "Correct sorting supports later sorting and material recovery." },
  { category: "recycle", questionJa: "古紙として回収しやすいものは？", questionEn: "Which item is generally easier to recycle as waste paper?", optionsJa: ["きれいな段ボール", "強い匂いのついた紙箱", "ロウ引き段ボール", "油で汚れた紙"], optionsEn: ["Clean cardboard", "Strongly scented paper box", "Wax-coated cardboard", "Oil-stained paper"], answer: 0, explanationJa: "きれいな段ボールは古紙として再資源化しやすい一方、加工や汚れのある紙は禁忌品になることがあります。", explanationEn: "Clean cardboard is easier to recover, while coated or contaminated paper may be unsuitable." },
  { category: "recycle", questionJa: "ペットボトルを回収に出す前に望ましいことは？", questionEn: "What should you do before putting a PET bottle out for recycling?", optionsJa: ["中を空にし、地域ルールに合わせて出す", "中身を残して出す", "他のごみを詰める", "汚れたまま密封する"], optionsEn: ["Empty it and follow local rules", "Leave liquid inside", "Fill it with other waste", "Seal it while dirty"], answer: 0, explanationJa: "中身を空にして地域ルールに従うことで、回収後の再資源化につながりやすくなります。", explanationEn: "Emptying the bottle and following local rules makes recovery easier." },
  { category: "recycle", questionJa: "新聞紙を正しく分けると、何に再生されることがある？", questionEn: "What can correctly sorted newspaper become?", optionsJa: ["新聞紙や印刷用紙", "金属部品", "ガラスびん", "木材"], optionsEn: ["Newspaper or printing paper", "Metal parts", "Glass bottles", "Lumber"], answer: 0, explanationJa: "取材レポートでは、新聞紙は新聞紙や印刷用紙へ再生される例が紹介されています。", explanationEn: "The report gives newspaper and printing paper as examples of recycled outputs." },
  { category: "recycle", questionJa: "牛乳パックを正しく回収すると、何に再生されることがある？", questionEn: "What can properly recycled milk cartons become?", optionsJa: ["トイレットペーパーやティッシュ", "アルミ缶", "ガラス板", "乾電池"], optionsEn: ["Toilet paper or tissues", "Aluminum cans", "Glass panels", "Batteries"], answer: 0, explanationJa: "牛乳パックは家庭紙へ再生される例が紹介されています。", explanationEn: "Milk cartons can be recycled into household paper products." },
  { category: "recycle", questionJa: "リサイクルで分別が必要な大きな理由は？", questionEn: "Why is sorting important in recycling?", optionsJa: ["品目ごとに再生後の用途が違うから", "すべて同じ製品になるから", "分別すると必ず燃えるから", "回収車が色を判断できないから"], optionsEn: ["Different materials have different recycled uses", "Everything becomes the same product", "Sorting always causes burning", "Collection trucks cannot see colors"], answer: 0, explanationJa: "紙でも新聞・雑誌・段ボールなどで再生後の用途が異なるため、分別が重要です。", explanationEn: "Even among paper, different types have different recycled uses, so sorting matters." },
  { category: "recycle", questionJa: "紙マークについて正しい説明は？", questionEn: "Which statement about the paper mark is correct?", optionsJa: ["紙が原料であることを示すが、リサイクル可否とは別", "必ず古紙回収できることを示す", "燃やしてよいことだけを示す", "海外製品だけにつく"], optionsEn: ["It shows paper is used as material, not whether it is recyclable", "It always means recyclable as waste paper", "It only means the item may be burned", "It is only used on imported products"], answer: 0, explanationJa: "紙マークは原料が紙であることを示すもので、古紙としてのリサイクル適性とは同じではありません。", explanationEn: "The paper mark indicates paper content; it does not by itself guarantee recyclability as waste paper." },
  { category: "recycle", questionJa: "リサイクル工程で禁忌品を混ぜないことが重要なのはなぜ？", questionEn: "Why should prohibited contaminants be kept out of paper recycling?", optionsJa: ["機械トラブルや再生紙の品質低下を防ぐため", "紙の色を濃くするため", "回収袋を重くするため", "回収回数を増やすため"], optionsEn: ["To prevent machine trouble and poor recycled-paper quality", "To make paper darker", "To make bags heavier", "To increase collection frequency"], answer: 0, explanationJa: "禁忌品は再生工程のトラブルや完成した紙の品質低下につながることがあります。", explanationEn: "Contaminants can disrupt recycling equipment and reduce recycled-paper quality." },
  { category: "recycle", questionJa: "回収された古紙を圧縮する目的として適切なのは？", questionEn: "Why is collected waste paper compressed?", optionsJa: ["運びやすくして輸送効率を高めるため", "紙をすぐ燃やすため", "紙に香りをつけるため", "紙を水に溶かすため"], optionsEn: ["To make it easier and more efficient to transport", "To burn it immediately", "To add fragrance", "To dissolve it in water"], answer: 0, explanationJa: "古紙を大きな塊に圧縮することで、運搬しやすくなり輸送効率が上がります。", explanationEn: "Compressing paper into dense bales improves handling and transport efficiency." },
  { category: "recycle", questionJa: "Recycleを実践的な解決方法として学ぶとき、重要な視点は？", questionEn: "What is important when learning Recycle as a practical solution?", optionsJa: ["捨てた後の回収・選別・加工まで知る", "リサイクルという言葉だけ覚える", "商品の名前だけ暗記する", "分別ルールを無視する"], optionsEn: ["Understand collection, sorting, and processing after disposal", "Only memorize the word recycle", "Only memorize product names", "Ignore sorting rules"], answer: 0, explanationJa: "このサイトでは、知識だけでなく、廃棄物が資源へ戻る具体的な仕組みを知ることを重視しています。", explanationEn: "This site focuses on understanding the real process that turns discarded materials back into resources." },
];

const variants = [
  ["家庭で", "At home"], ["学校で", "At school"], ["地域で", "In your community"], ["ごみを出すとき", "When taking out waste"], ["回収場所で", "At a collection point"],
  ["毎日の生活で", "In daily life"], ["買い物のあとに", "After shopping"], ["飲み物を飲んだあとに", "After finishing a drink"], ["大掃除で", "During a big clean-up"], ["引っ越しで", "When moving"],
  ["文化祭のあとに", "After a school festival"], ["イベントのあとに", "After an event"], ["教室で", "In the classroom"], ["オフィスで", "At an office"], ["マンションで", "At an apartment building"],
  ["週末に", "On the weekend"], ["資源回収の日に", "On recycling day"], ["段ボールを捨てるとき", "When disposing of cardboard"], ["古紙をまとめるとき", "When bundling waste paper"], ["ペットボトルを出すとき", "When recycling a PET bottle"],
  ["新聞を処分するとき", "When disposing of newspaper"], ["牛乳パックを出すとき", "When recycling a milk carton"], ["紙箱を捨てるとき", "When disposing of a paper box"], ["資源を分けるとき", "When sorting resources"], ["回収について考えるとき", "When thinking about collection"],
  ["リサイクルを学ぶとき", "When learning about recycling"], ["家族と分別するとき", "When sorting with family"], ["友達と片づけるとき", "When cleaning up with friends"], ["地域の回収ルールを見るとき", "When checking local recycling rules"], ["使い終わった物を手放すとき", "When letting go of used items"],
];

export const generalQuizQuestions: QuizQuestion[] = Array.from({ length: 300 }, (_, index) => {
  const source = base[index % base.length];
  const variant = variants[Math.floor(index / base.length) % variants.length];
  return {
    ...source,
    id: index + 1,
    questionJa: `${variant[0]}、${source.questionJa}`,
    questionEn: `${variant[1]}, ${source.questionEn.charAt(0).toLowerCase()}${source.questionEn.slice(1)}`,
  };
});

export const interviewQuizQuestions: QuizQuestion[] = [
  {
    id: 301,
    category: "field",
    questionJa: "奥山商店が回収した資源に対して行っている仕事は？",
    questionEn: "What does Okuyama Shoten do with the resources it collects?",
    optionsJa: ["選別・圧縮加工・出荷まで行う", "すべてそのまま焼却する", "新品の紙だけを販売する", "ペットボトルだけを製造する"],
    optionsEn: ["Sorts, compresses, and ships them", "Burns everything as-is", "Only sells new paper", "Only manufactures plastic bottles"],
    answer: 0,
    explanationJa: "奥山商店は回収だけでなく、選別・圧縮加工・出荷まで一貫して行っています。",
    explanationEn: "Okuyama Shoten handles collection as well as sorting, compression, and shipment."
  },
  {
    id: 302,
    category: "field",
    questionJa: "取材で紹介された3つの回収方法の組み合わせは？",
    questionEn: "Which three collection methods were introduced in the interview?",
    optionsJa: ["行政回収・集団回収・事業所回収", "行政回収・海外回収・店舗回収", "学校回収・工場回収・個人回収", "宅配回収・駅前回収・行政回収"],
    optionsEn: ["Municipal, group, and business collection", "Municipal, overseas, and store collection", "School, factory, and personal collection", "Delivery, station, and municipal collection"],
    answer: 0,
    explanationJa: "取材では行政回収・集団回収・事業所回収の3種類が紹介されています。",
    explanationEn: "The report describes municipal, group, and business collection."
  },
  {
    id: 303,
    category: "field",
    questionJa: "古紙に混ぜない代表的な禁忌品は？",
    questionEn: "Which is an example of paper that should not be mixed into waste paper?",
    optionsJa: ["感熱性発泡紙", "一般的な新聞紙", "きれいな段ボール", "一般的な雑誌"],
    optionsEn: ["Heat-sensitive foaming paper", "Ordinary newspaper", "Clean cardboard", "Ordinary magazine"],
    answer: 0,
    explanationJa: "感熱性発泡紙は、再生工程でトラブルにつながる代表的な禁忌品の一つです。",
    explanationEn: "Heat-sensitive foaming paper is one of the prohibited paper items that can cause recycling problems."
  },
  {
    id: 304,
    category: "field",
    questionJa: "古紙を高圧で圧縮して塊にする機械は？",
    questionEn: "Which machine compresses waste paper into dense bales?",
    optionsJa: ["ベーラー", "クランプリフト", "プレスパッカー車", "回収ボックス"],
    optionsEn: ["Baler", "Clamp lift", "Press packer truck", "Collection box"],
    answer: 0,
    explanationJa: "ベーラーは回収した古紙を高圧で圧縮し、大きな塊にする機械です。",
    explanationEn: "A baler compresses collected paper into dense bales."
  },
  {
    id: 305,
    category: "field",
    questionJa: "クランプリフトの主な役割は？",
    questionEn: "What is the main role of a clamp lift?",
    optionsJa: ["圧縮した古紙を左右から挟んで運ぶ", "古紙を細かく裁断する", "古紙を高温で溶かす", "古紙を水で洗浄する"],
    optionsEn: ["Carry compressed paper by clamping it from both sides", "Shred waste paper", "Melt waste paper with heat", "Wash waste paper with water"],
    answer: 0,
    explanationJa: "クランプリフトは圧縮された古紙の塊を左右から挟んで運びます。",
    explanationEn: "A clamp lift carries compressed paper bales by gripping them from both sides."
  },
  {
    id: 306,
    category: "field",
    questionJa: "プレスパッカー車を使う利点は？",
    questionEn: "What is an advantage of using a press packer truck?",
    optionsJa: ["押し潰しながら積み、より多く運べる", "紙をその場で新品にできる", "紙を自動で印刷できる", "紙を燃やして容量を減らせる"],
    optionsEn: ["It compresses material while loading so more can be carried", "It turns paper into new products on the spot", "It automatically prints paper", "It burns paper to reduce volume"],
    answer: 0,
    explanationJa: "押し潰しながら積み込むことで、通常のトラックより多く運べます。",
    explanationEn: "Compressing material while loading allows the truck to carry more than a normal truck."
  },
  {
    id: 307,
    category: "field",
    questionJa: "取材で紹介されたペットボトル回収で望ましい出し方は？",
    questionEn: "How should plastic bottles be prepared for the collection system introduced in the interview?",
    optionsJa: ["ラベルを外し、汚れを少なくして出す", "中身を残したまま出す", "他のごみを詰めて出す", "色付きボトルだけを出す"],
    optionsEn: ["Remove the label and keep the bottle clean", "Leave liquid inside", "Fill it with other waste", "Only submit colored bottles"],
    answer: 0,
    explanationJa: "紹介された回収機は、ラベルを外し、汚れの少ないペットボトルを集める仕組みです。",
    explanationEn: "The collection system accepts bottles with labels removed and little contamination."
  },
  {
    id: 308,
    category: "field",
    questionJa: "取材で回収量が変動する要因として挙げられたものは？",
    questionEn: "Which factor was mentioned as affecting collection volume?",
    optionsJa: ["天候", "紙の文字のフォント", "ウェブサイトの背景色", "会社ロゴの大きさ"],
    optionsEn: ["Weather", "The font used on paper", "Website background color", "Company logo size"],
    answer: 0,
    explanationJa: "雨の日は紙を出す人が減り、翌週に回収量が増えるなど、天候が回収量に影響します。",
    explanationEn: "Weather affects when residents put paper out, so collection volume can fluctuate."
  },
  {
    id: 309,
    category: "field",
    questionJa: "取材で紹介された資源回収業界の課題は？",
    questionEn: "Which challenge in the resource collection industry was introduced in the interview?",
    optionsJa: ["運転人材の不足", "回収する紙が一切存在しない", "回収車を使えない", "分別する必要がない"],
    optionsEn: ["A shortage of drivers", "There is no paper to collect at all", "Collection trucks cannot be used", "Sorting is unnecessary"],
    answer: 0,
    explanationJa: "パッカー車やトラックを運転できる人材の不足が、業界の課題として挙げられています。",
    explanationEn: "A shortage of people able to drive collection trucks was identified as an industry challenge."
  },
  {
    id: 310,
    category: "field",
    questionJa: "資源を正しく分別することが大切な理由は？",
    questionEn: "Why is correct sorting of resources important?",
    optionsJa: ["再び材料として利用しやすくするため", "すべて同じ方法で処理するため", "すべて焼却するため", "回収後の選別を完全になくすため"],
    optionsEn: ["To make materials easier to recover and reuse", "To process everything in exactly the same way", "To burn everything", "To eliminate all sorting after collection"],
    answer: 0,
    explanationJa: "紙の種類ごとに再生後の用途が異なるため、正しく分けることが再資源化につながります。",
    explanationEn: "Different paper types have different recycling uses, so correct sorting supports material recovery."
  }
];

export const quizQuestions: QuizQuestion[] = [
  ...generalQuizQuestions,
  ...interviewQuizQuestions,
];
