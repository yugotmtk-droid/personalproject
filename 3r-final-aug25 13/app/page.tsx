"use client";

import { useEffect, useMemo, useState } from "react";
import HeroSection from "@/components/HeroSection";
import RecycleFocus from "@/components/RecycleFocus";
import FieldReport from "@/components/FieldReport";
import Quiz from "@/components/Quiz";
import BottleFact from "@/components/BottleFact";
import PostQuizConclusion from "@/components/PostQuizConclusion";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export type Language = "ja" | "en";

export default function Home() {
  const [language, setLanguage] = useState<Language>("ja");
  const [furigana, setFurigana] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("3r-language") as Language | null;
    const savedFurigana = window.localStorage.getItem("3r-furigana");
    if (savedLanguage === "ja" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    } else if (navigator.language.toLowerCase().startsWith("en")) {
      setLanguage("en");
    }
    if (savedFurigana === "true") setFurigana(true);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("3r-language", language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem("3r-furigana", String(furigana));
  }, [furigana]);

  const context = useMemo(() => ({ language, furigana }), [language, furigana]);

  return (
    <main className={furigana && language === "ja" ? "furigana-enabled" : ""}>
      <SiteHeader
        language={language}
        furigana={furigana}
        onLanguageChange={setLanguage}
        onFuriganaChange={setFurigana}
      />
      <HeroSection {...context} />
      <RecycleFocus {...context} />
      <FieldReport {...context} />
      <Quiz {...context} />
      <PostQuizConclusion {...context} />
      <BottleFact {...context} />
      <Footer {...context} />
    </main>
  );
}
