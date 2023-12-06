import { useState } from "react";
import Payment, { PaymentType } from "./Payment";

export default function AllPayments() {
  const [selectedPayment, setSelectedPayment] = useState<PaymentType | null>(
    null
  );
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
        onSelected={() => setSelectedPayment(PaymentType.PayPal)}
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
          <div className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder="Card Number"
              className="border-2 rounded-md p-2 w-full"
            />
            <div className="flex flex-row gap-2">
              <input
                type="text"
                placeholder="Expiration Date (MM/YY)"
                className="border-2 rounded-md p-2 w-full"
              />
              <input
                type="text"
                placeholder="Security Code"
                className="border-2 rounded-md p-2 w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Name on Card"
              className="border-2 rounded-md p-2 w-full"
            />
          </div>
        }
        selected={selectedPayment === PaymentType.CreditCard}
        onSelected={() => setSelectedPayment(PaymentType.CreditCard)}
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
        onSelected={() => setSelectedPayment(PaymentType.Klarna)}
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
        onSelected={() => setSelectedPayment(PaymentType.ApplePay)}
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
        onSelected={() => setSelectedPayment(PaymentType.GooglePay)}
      />
    </div>
  );
}
