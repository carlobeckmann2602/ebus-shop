import { PaymentType } from "../../constants/PaymentTypes.ts";
import PaymentIcon from "./PaymentIcon.tsx";

type PaymentProps = {
  type: PaymentType;
  icons: {
    url: string;
    backgroundColor?: string;
  }[];
  selectedContent: React.ReactNode;
  selected: boolean;
  onSelected: () => void;
};

export default function Payment({
  type,
  icons,
  selectedContent,
  selected,
  onSelected,
}: PaymentProps) {
  return (
    <div className="collapse border input-bordered">
      <input type="radio" name="my-accordion-1" onChange={onSelected} />
      <div className="collapse-title text-xl font-medium flex flex-row gap-4 justify-between pe-4">
        <div className="flex flex-row gap-3 align-middle items-center">
          <input
            type="radio"
            className="radio radio-primary"
            checked={selected}
          />
          {type}
        </div>
        <div className="flex flex-row gap-1">
          {icons.map((icon) => (
            <PaymentIcon {...icon} />
          ))}
        </div>
      </div>
      <div
        className={
          "collapse-content bg-primary-content" + (selected ? " pt-4" : "")
        }
      >
        <p>{selectedContent}</p>
      </div>
    </div>
  );
}
