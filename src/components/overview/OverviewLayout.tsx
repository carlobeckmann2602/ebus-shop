import { ReactNode } from "react";

type OverviewProps = {
  title: ReactNode;
  content: ReactNode;
};

export default function OverviewLayout({ title, content }: OverviewProps) {
  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto">
      <h1 className="text-center text-4xl font-bold py-6">Fazit: {title}</h1>
      <div>{content}</div>
      <a href="/checkout" className="btn btn-primary">
        Zurück zum Bezahlvorgang (Andere Zahlungsmethode)
      </a>
    </div>
  );
}
