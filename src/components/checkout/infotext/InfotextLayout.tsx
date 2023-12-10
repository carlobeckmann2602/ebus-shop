import { ReactNode } from "react";

type InfotextProps = {
  title: ReactNode;
  content: ReactNode;
};

export default function InfotextLayout({ title, content }: InfotextProps) {
  return (
    <>
      <h1 className="w-full flex flex-row justify-center items-center text-4xl font-bold">
        {title}
      </h1>
      {content}
    </>
  );
}
