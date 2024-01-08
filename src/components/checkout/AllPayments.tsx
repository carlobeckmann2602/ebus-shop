import { PaymentType } from "../../constants/PaymentTypes";
import Payment from "./Payment";
import PayPalIcon from "../../assets/images/payments/paypal.png";
import AmexIcon from "../../assets/images/payments/amex.png";
import ApplePayIcon from "../../assets/images/payments/apple-pay.png";
import GooglePayIcon from "../../assets/images/payments/google-pay.png";
import MastercardIcon from "../../assets/images/payments/mastercard.png";
import MaestroIcon from "../../assets/images/payments/mastero.png";
import VisaIcon from "../../assets/images/payments/visa.png";
import CreditCardPaymentForm from "./CreditCardPaymentForm";

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
            url: PayPalIcon,
          },
        ]}
        selectedContent={
          <div className="text-center">
            Um die interaktive Simulation eines Bezahlvorgangs über PayPal zu
            starten und mehr über das Verfahren zu lernen, klicken Sie auf
            "Bezahlen".
          </div>
        }
        selected={selectedPayment === PaymentType.PayPal}
        onSelected={() => onPaymentSelected(PaymentType.PayPal)}
      />
      <Payment
        type={PaymentType.CreditCard}
        icons={[
          {
            url: AmexIcon,
            backgroundColor: "#006DBE",
          },
          {
            url: VisaIcon,
          },
          {
            url: MastercardIcon,
          },
          {
            url: MaestroIcon,
          },
        ]}
        selectedContent={<CreditCardPaymentForm />}
        selected={selectedPayment === PaymentType.CreditCard}
        onSelected={() => onPaymentSelected(PaymentType.CreditCard)}
      />

      <Payment
        type={PaymentType.ApplePay}
        icons={[
          {
            url: ApplePayIcon,
          },
        ]}
        selectedContent={
          <div className="text-center">
            Um die interaktive Simulation eines Bezahlvorgangs über Apple Pay zu
            starten und mehr über das Verfahren zu lernen, klicken Sie auf
            "Bezahlen".
          </div>
        }
        selected={selectedPayment === PaymentType.ApplePay}
        onSelected={() => onPaymentSelected(PaymentType.ApplePay)}
      />
      <Payment
        type={PaymentType.GooglePay}
        icons={[
          {
            url: GooglePayIcon,
          },
        ]}
        selectedContent={
          <div className="text-center">
            Um die interaktive Simulation eines Bezahlvorgangs über Google Pay
            zu starten und mehr über das Verfahren zu lernen, klicken Sie auf
            "Bezahlen".
          </div>
        }
        selected={selectedPayment === PaymentType.GooglePay}
        onSelected={() => onPaymentSelected(PaymentType.GooglePay)}
      />
    </div>
  );
}
