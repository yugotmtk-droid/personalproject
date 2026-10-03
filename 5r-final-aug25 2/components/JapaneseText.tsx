"use client";

import { Fragment, useEffect, useState } from "react";

type Token = {
  surface_form: string;
  reading?: string;
};

type Props = {
  text: string;
  enabled: boolean;
  className?: string;
};

let tokenizerPromise: Promise<{ tokenize: (text: string) => Token[] }> | null = null;

function katakanaToHiragana(value: string) {
  return value.replace(/[ァ-ヶ]/g, (character) =>
    String.fromCharCode(character.charCodeAt(0) - 0x60),
  );
}

function containsKanji(value: string) {
  return /[一-龯々〆ヶ]/.test(value);
}

async function getTokenizer() {
  if (!tokenizerPromise) {
    tokenizerPromise = import("kuromoji").then(
      (module) =>
        new Promise((resolve, reject) => {
          const kuromoji = module.default ?? module;
          kuromoji
            .builder({ dicPath: "/kuromoji-dict/" })
            .build((error: Error | null, tokenizer: { tokenize: (text: string) => Token[] }) => {
              if (error) reject(error);
              else resolve(tokenizer);
            });
        }),
    );
  }

  return tokenizerPromise;
}

export default function JapaneseText({ text, enabled, className = "" }: Props) {
  const [tokens, setTokens] = useState<Token[] | null>(null);

  useEffect(() => {
    let active = true;

    if (!enabled) {
      setTokens(null);
      return () => {
        active = false;
      };
    }

    getTokenizer()
      .then((tokenizer) => {
        if (active) setTokens(tokenizer.tokenize(text));
      })
      .catch(() => {
        if (active) setTokens(null);
      });

    return () => {
      active = false;
    };
  }, [text, enabled]);

  if (!enabled || !tokens) {
    return <span className={`jp-text ${className}`.trim()}>{text}</span>;
  }

  return (
    <span className={`jp-text ${className}`.trim()}>
      {tokens.map((token, index) => {
        const reading = token.reading && token.reading !== "*" ? katakanaToHiragana(token.reading) : "";

        if (!containsKanji(token.surface_form) || !reading) {
          return <Fragment key={`${token.surface_form}-${index}`}>{token.surface_form}</Fragment>;
        }

        return (
          <ruby key={`${token.surface_form}-${index}`}>
            {token.surface_form}
            <rp>（</rp>
            <rt>{reading}</rt>
            <rp>）</rp>
          </ruby>
        );
      })}
    </span>
  );
}
