import { PaymentType } from "../../constants/PaymentTypes";
import Payment from "./Payment";

type Props = {
  selectedPayment: PaymentType | null;
  onPaymentSelected: (paymentType: PaymentType) => void;
};

export default function AllPayments({
  selectedPayment,
  onPaymentSelected,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <Payment
        type={PaymentType.PayPal}
        icons={[
          {
            url: "/src/assets/images/payments/paypal.png",
          },
        ]}
        selectedContent={
          <div className="text-center">
            After clicking "Pay with PayPal" you will be redirected to PayPal to
            complete your purchase securely.
          </div>
        }
        selected={selectedPayment === PaymentType.PayPal}
        onSelected={() => onPaymentSelected(PaymentType.PayPal)}
      />
      <Payment
        type={PaymentType.CreditCard}
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
        selectedContent={
          <div className="flex flex-col gap-2 w-full form-control">
            <label className="w-full">
              <div className="label">
                <span className="label-text">Kartennummer</span>
              </div>
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                className="input input-bordered w-full"
              />
            </label>
            <div className="flex flex-row gap-2">
              <label className="w-full">
                <div className="label">
                  <span className="label-text">Ablaufdatum</span>
                </div>
                <input
                  type="text"
                  placeholder="MM /YY"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="w-full">
                <div className="label">
                  <span className="label-text">Sicherheitsnummer</span>
                </div>
                <input
                  type="text"
                  placeholder="XXX"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <label className="w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Name auf der Kreditkarte"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        }
        selected={selectedPayment === PaymentType.CreditCard}
        onSelected={() => onPaymentSelected(PaymentType.CreditCard)}
      />
      <Payment
        type={PaymentType.Klarna}
        icons={[
          {
            url: "/src/assets/images/payments/klarna.svg",
            backgroundColor: "#F3B7C7",
          },
        ]}
        selectedContent={
          <div className="text-center">
            After clicking "Pay with Klarna" you will be redirected to Klarna to
            complete your purchase securely.
          </div>
        }
        selected={selectedPayment === PaymentType.Klarna}
        onSelected={() => onPaymentSelected(PaymentType.Klarna)}
      />
      <Payment
        type={PaymentType.ApplePay}
        icons={[
          {
            url: "/src/assets/images/payments/apple-pay.png",
          },
        ]}
        selectedContent={
          <div className="text-center">
            After clicking "Pay with Apple Pay" you will be redirected to Apple
            Pay to complete your purchase securely.
          </div>
        }
        selected={selectedPayment === PaymentType.ApplePay}
        onSelected={() => onPaymentSelected(PaymentType.ApplePay)}
      />
      <Payment
        type={PaymentType.GooglePay}
        icons={[
          {
            url: "/src/assets/images/payments/google-pay.png",
          },
        ]}
        selectedContent={
          <div className="text-center">
            After clicking "Pay with Google Pay" you will be redirected to
            Google Pay to complete your purchase securely.
          </div>
        }
        selected={selectedPayment === PaymentType.GooglePay}
        onSelected={() => onPaymentSelected(PaymentType.GooglePay)}
      />
    </div>
  );
}
