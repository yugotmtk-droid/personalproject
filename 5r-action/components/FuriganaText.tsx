import type { ReactNode } from "react";

type Props = {
  show: boolean;
  children: ReactNode;
  reading?: string;
};

export default function FuriganaText({ show, children, reading }: Props) {
  if (!show || !reading) return <>{children}</>;
  return (
    <ruby>
      {children}
      <rp>（</rp><rt>{reading}</rt><rp>）</rp>
    </ruby>
  );
}
