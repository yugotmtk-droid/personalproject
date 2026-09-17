# 3R ACTION - Recycle Focus

This version restructures the website around Recycle as the project's practical response to mass disposal.

## Main structure
1. Hero: Recycle-focused project message
2. Why Recycle: explains why the project narrowed from all 3Rs to one practical method
3. Recycle in practice: visual loop from used item to new resource/product
4. Field report: Okuyama Shoten interview-based recycling workflow and industry realities
5. Quiz: 10 questions per attempt (3 interview questions + 7 Recycle questions), drawn from a 300-question Recycle bank

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000


## 2026-08-25 update
- Kept the packer-truck replacement price on one line on desktop: 約1,000万円.
- Moved the final project-message and site takeaway sections to after the quiz.
- Kept the Japanese takeaway headline on one line on desktop while allowing responsive wrapping on mobile.

## 2026-09-16 PDF revision
- Removed the right-side recycling orbit/logo from the hero to prevent title overlap.
- Broke the Japanese hero lead at Japanese commas for cleaner line layout.
- Kept all four paper-recycling outcomes on one line (e.g. 新聞紙 → 新聞紙・印刷用紙).
- Forced the field-report intro sentence to stay on one line on desktop.
- Broke the Okuyama Shoten company explanation at the full stop.
- Reduced the final takeaway headline size so it stays inside its box.
