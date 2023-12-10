import { ReactNode } from "react";

type GuideProps = {
  content: ReactNode;
  explanation: ReactNode;
};

export default function Guide({ content, explanation }: GuideProps) {
  return (
    <div className="flex flex-row max-md:flex-col gap-2 w-full">
      <div className="w-1/2 max-md:w-auto p-6">{content}</div>
      <div className="w-1/2 max-md:w-auto sticky py-4 top-0 h-screen -m-4">
        <div className="bg-accent rounded-md px-8 py-6 shadow-lg h-full">
          {explanation}
        </div>
      </div>
    </div>
  );
}
