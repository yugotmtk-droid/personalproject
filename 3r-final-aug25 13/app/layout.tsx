import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3R ACTION | Recycle Focus",
  description: "大量廃棄に対する実践的な解決方法としてRecycleを深く学ぶウェブサイト。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
