type PaymentProps = {
  name: string;
  icons: {
    url: string;
    backgroundColor?: string;
  }[];
};

export default function Payment({ name, icons }: PaymentProps) {
  return (
    <div className="bg-white border-2 rounded-sm ">
      <div className="flex flex-row justify-between items-center mr-2">
        <div className="flex flex-row gap-2 p-2">
          <input type="radio" name="payment" value={name} />
          <h1 className="text-xl font-bold">{name}</h1>
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
  );
}
