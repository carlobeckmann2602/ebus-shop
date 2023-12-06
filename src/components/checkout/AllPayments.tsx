import Payment from "./Payment";

export default function AllPayments() {
  return (
    <div className="flex flex-col gap-2">
      <Payment
        name="PayPal"
        icons={[
          {
            url: "/src/assets/images/payments/paypal.png",
          },
        ]}
      />
      <Payment
        name="Credit Card"
        icons={[
          {
            url: "/src/assets/images/payments/amex.png",
            backgroundColor: "#006DBE",
          },
          {
            url: "/src/assets/images/payments/visa.png",
          },
          {
            url: "/src/assets/images/payments/mastercard.png",
          },
          {
            url: "/src/assets/images/payments/mastero.png",
          },
        ]}
      />
      <Payment
        name="Klarna"
        icons={[
          {
            url: "/src/assets/images/payments/klarna.svg",
            backgroundColor: "#F3B7C7",
          },
        ]}
      />
      <Payment
        name="Apple Pay"
        icons={[
          {
            url: "/src/assets/images/payments/apple-pay.png",
          },
        ]}
      />
      <Payment
        name="Google Pay"
        icons={[
          {
            url: "/src/assets/images/payments/google-pay.png",
          },
        ]}
      />
    </div>
  );
}
