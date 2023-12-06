export enum PaymentType {
  PayPal = "PayPal",
  CreditCard = "Credit Card",
  Klarna = "Klarna",
  ApplePay = "Apple Pay",
  GooglePay = "Google Pay",
}

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
    <div className="rounded-md bg-accent">
      <div
        className="bg-white border-2 rounded-md cursor-pointer hover:bg-gray-100"
        onClick={onSelected}
      >
        <div className="flex flex-row justify-between items-center mr-2">
          <div className="flex flex-row gap-2 p-2">
            <input
              type="radio"
              name="payment"
              value={type}
              checked={selected}
            />
            <h1 className="text-xl font-bold">{type}</h1>
          </div>
          <div className="flex flex-row gap-1">
            {icons.map((icon) => {
              return (
                <div
                  className="px-3 py-1 border-2 rounded-md h-8 aspect-video flex flex-col justify-center items-center"
                  style={
                    icon.backgroundColor
                      ? { backgroundColor: icon.backgroundColor }
                      : {}
                  }
                >
                  <img src={icon.url} className="object-fill" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {selected && (
        <div className="py-2 px-4 flex flex-col justify-center items-center">
          {selectedContent}
        </div>
      )}
    </div>
  );
}
