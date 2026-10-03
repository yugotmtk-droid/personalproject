"use client";

import { useEffect, useState } from "react";
import type { Language } from "@/app/page";
import {
  generalQuizQuestions,
  interviewQuizQuestions,
  type QuizQuestion,
} from "@/data/quizQuestions";
import JapaneseText from "./JapaneseText";

type Props = { language: Language; furigana: boolean };
type AnswerRecord = { questionId: number; selected: number; correct: boolean };

function shuffle<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}

function createQuizSet(): QuizQuestion[] {
  // 毎回10問のうち3問を取材レポート、残り7問をRecycle問題から出題する。
  const interview = shuffle(interviewQuizQuestions).slice(0, 3);
  const general = shuffle(generalQuizQuestions).slice(0, 7);
  return shuffle([...interview, ...general]);
}

export default function Quiz({ language, furigana }: Props) {
  // SSRと初回クライアント描画を一致させてHydration Errorを防ぐ。
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => [
    ...interviewQuizQuestions.slice(0, 3),
    ...generalQuizQuestions.slice(0, 7),
  ]);

  useEffect(() => {
    setQuestions(createQuizSet());
  }, []);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [records, setRecords] = useState<AnswerRecord[]>([]);
  const [finished, setFinished] = useState(false);
  const J = ({ children }: { children: string }) => (
    <JapaneseText text={children} enabled={furigana} />
  );

  const question = questions[current];
  const score = records.filter((record) => record.correct).length;
  const rank =
    score === 10 ? "S" : score >= 8 ? "A" : score >= 6 ? "B" : score >= 4 ? "C" : "D";

  const answer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setRecords((previous) => [
      ...previous,
      {
        questionId: question.id,
        selected: index,
        correct: index === question.answer,
      },
    ]);
  };

  const next = () => {
    if (current === questions.length - 1) {
      setFinished(true);
      return;
    }
    setCurrent((value) => value + 1);
    setSelected(null);
  };

  const restart = () => {
    setQuestions(createQuizSet());
    setCurrent(0);
    setSelected(null);
    setRecords([]);
    setFinished(false);
  };

  return (
    <section id="quiz" className="section-shell quiz-section">
      <div className="section-heading light-heading">
        <p className="eyebrow">QUIZ</p>
      </div>

      {!finished ? (
        <div className="quiz-card">
          <div className="quiz-topline">
            <span>
              {language === "ja" ? (
                <J>{`問題 ${current + 1} / 10`}</J>
              ) : (
                `Question ${current + 1} / 10`
              )}
            </span>
            <span>{question.category === "field" ? "FIELD REPORT" : question.category.toUpperCase()}</span>
          </div>

          <div className="progress">
            <span style={{ width: `${((current + 1) / 10) * 100}%` }} />
          </div>

          <h3>{language === "ja" ? <J>{question.questionJa}</J> : question.questionEn}</h3>

          <div className="quiz-options">
            {(language === "ja" ? question.optionsJa : question.optionsEn).map(
              (option, index) => {
                const state =
                  selected === null
                    ? ""
                    : index === question.answer
                    ? "correct"
                    : selected === index
                    ? "incorrect"
                    : "muted";

                return (
                  <button
                    key={option}
                    className={state}
                    onClick={() => answer(index)}
                    disabled={selected !== null}
                  >
                    {language === "ja" ? <J>{option}</J> : option}
                  </button>
                );
              }
            )}
          </div>

          {selected !== null && (
            <div
              className={`explanation ${
                selected === question.answer ? "correct-box" : "incorrect-box"
              }`}
            >
              <strong>
                {selected === question.answer
                  ? language === "ja"
                    ? <J>正解！</J>
                    : "Correct!"
                  : language === "ja"
                  ? <J>おしい！</J>
                  : "Almost!"}
              </strong>
              <p>
                {language === "ja" ? (
                  <J>{question.explanationJa}</J>
                ) : (
                  question.explanationEn
                )}
              </p>
              <button className="primary-button compact" onClick={next}>
                {language === "ja" ? (
                  <J>{current === 9 ? "結果を見る" : "次の問題へ"}</J>
                ) : current === 9 ? (
                  "See result"
                ) : (
                  "Next question"
                )}{" "}
                →
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="result-card">
          <p className="eyebrow">RESULT</p>
          <div className="rank-circle">{rank}</div>
          <h3>
            {language === "ja" ? <J>{`${score} / 10 正解`}</J> : `${score} / 10 correct`}
          </h3>
          <p>
            {language === "ja" ? (
              <J>
                {score >= 8
                  ? "すばらしい！身近な行動に変えてみよう。"
                  : "もう一度挑戦して、Recycleと資源回収の知識を増やそう。"}
              </J>
            ) : score >= 8 ? (
              "Great job! Turn your knowledge into action."
            ) : (
              "Try again and learn more about Recycle and resource collection."
            )}
          </p>
          <button className="primary-button" onClick={restart}>
            {language === "ja" ? <J>もう一度挑戦する</J> : "Try again"}
          </button>
        </div>
      )}
    </section>
  );
}
