import AllPayments from "../components/checkout/AllPayments.tsx";
import Layout from "./_layout.tsx";
import { CartItem } from "../commons.ts";
import DeliveryInformationForm from "../components/checkout/DeliveryInformationForm.tsx";
import Guide from "../components/Guide.tsx";
import CartSummary from "../components/checkout/CartSummary.tsx";
import PaymentSummary from "../components/checkout/PaymentSummary.tsx";
import { useState } from "react";
import { PaymentType } from "../constants/PaymentTypes.ts";
import PaypalInfotext from "../components/checkout/infotext/PaypalInfotext.tsx";
import CreditCardInfotext from "../components/checkout/infotext/CreditCardInfotext.tsx";
import GooglePayInfotext from "../components/checkout/infotext/GooglePayInfotext.tsx";
import ApplePayInfotext from "../components/checkout/infotext/ApplePayInfotext.tsx";
import KlarnaInfotext from "../components/checkout/infotext/KlarnaInfotext.tsx";
import IntroText from "../components/checkout/infotext/IntroText.tsx";

type CheckoutProps = {
  cartItems: CartItem[];
  removeFromCart: (product: CartItem) => void;
  resetShop: () => void;
};

export default function Checkout(props: CheckoutProps) {
  const [selectedPayment, setSelectedPayment] = useState<PaymentType | null>(
    null
  );

  function onPaymentSelected(type: PaymentType) {
    setSelectedPayment((value) => (value === type ? null : type));
  }

  const infotext = () => {
    switch (selectedPayment) {
      case PaymentType.CreditCard:
        return <CreditCardInfotext />;
        break;

      case PaymentType.PayPal:
        return <PaypalInfotext />;
        break;

      case PaymentType.Klarna:
        return <KlarnaInfotext />;
        break;

      case PaymentType.ApplePay:
        return <ApplePayInfotext />;
        break;

      case PaymentType.GooglePay:
        return <GooglePayInfotext />;
        break;

      default:
        return <IntroText />;
        break;
    }
  };

  return (
    <Layout
      cartItems={props.cartItems}
      removeFromCart={props.removeFromCart}
      resetShop={props.resetShop}
    >
      <Guide
        content={
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">Bezahlvorgang</h1>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">Bestellzusammenfassung</h2>
              <CartSummary
                cartItems={props.cartItems}
                removeFromCart={props.removeFromCart}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">Lieferinformationen</h2>
              <DeliveryInformationForm />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">Bezahlverfahren</h2>
              <AllPayments
                selectedPayment={selectedPayment}
                onPaymentSelected={onPaymentSelected}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">Rechnungsübersicht</h2>
              <PaymentSummary cartItems={props.cartItems} />
            </div>
            <div className="flex flex-row items-center justify-center">
              <button className="bg-black text-white font-bold p-2 text-center w-10/12 rounded-md hover:bg-gray-900 text-xl">
                Bezahlen
              </button>
            </div>
          </div>
        }
        explanation={<div className="flex flex-col gap-4">{infotext()}</div>}
      />
    </Layout>
  );
}
