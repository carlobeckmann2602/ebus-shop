import { ReactNode } from "react";

type GuideProps = {
  content: ReactNode;
  explanation: ReactNode;
};

export default function Guide({ content, explanation }: GuideProps) {
  return (
    <div className="flex flex-row max-md:flex-col gap-2 w-full">
      <div className="w-1/2 max-md:w-auto">{content}</div>
      <div className="w-1/2 max-md:w-auto bg-accent rounded-md p-2">
        {explanation}
      </div>
    </div>
  );
}
