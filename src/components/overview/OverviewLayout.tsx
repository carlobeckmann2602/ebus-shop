import { ReactNode } from "react";

type OverviewProps = {
  title: ReactNode;
  content: ReactNode;
};

export default function OverviewLayout({ title, content }: OverviewProps) {
  return (
    <>
      <h1 className="text-center text-4xl font-bold py-6">Fazit: {title}</h1>
      <div className="max-w-3xl mx-auto">{content}</div>
    </>
  );
}
