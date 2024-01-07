type PaymentIconProps = {
  url: string;
  backgroundColor?: string;
};

export default function PaymentIcon({
  url,
  backgroundColor,
}: PaymentIconProps) {
  return (
    <div
      className="px-3 py-1 border bg-white rounded-md h-8 aspect-video flex flex-col justify-center items-center"
      style={backgroundColor ? { backgroundColor: backgroundColor } : {}}
      key={url}
    >
      <img src={url} className="object-fill" />
    </div>
  );
}
