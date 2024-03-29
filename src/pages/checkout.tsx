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
import IntroText from "../components/checkout/infotext/IntroText.tsx";
import { useNavigate } from "react-router-dom";
import PaypalDemoModal from "../components/checkout/demoModals/PaypalDemoModal.tsx";
import ApplePayDemoModal from "../components/checkout/demoModals/ApplePayDemoModal.tsx";
import GooglePayDemoModal from "../components/checkout/demoModals/GooglePayDemoModal.tsx";
import CreditCardDemoModal from "../components/checkout/demoModals/CreditCardDemoModal.tsx";

type CheckoutProps = {
  cartItems: CartItem[];
  removeFromCart: (product: CartItem) => void;
  resetShop: () => void;
};

export default function Checkout(props: CheckoutProps) {
  const [selectedPayment, setSelectedPayment] = useState<PaymentType | null>(
    null
  );
  const [showPaypalDemoModal, setShowPaypalDemoModal] = useState(false);
  const [showApplePayDemoModal, setShowApplePayDemoModal] = useState(false);
  const [showGooglePayDemoModal, setShowGooglePayDemoModal] = useState(false);
  const [showCreditCardDemoModal, setShowCreditCardDemoModal] = useState(false);

  const [totalCartValue] = useState(
    props.cartItems
      .reduce(
        (accumulator, item) =>
          accumulator + parseFloat(item.price) * item.quantity,
        0
      )
      .toFixed(2) + " €"
  );

  const navigate = useNavigate();

  function onPaymentSelected(type: PaymentType) {
    setSelectedPayment((value) => (value === type ? null : type));
  }

  function initDemoModalsIfExists() {
    console.log("selectedPayment", selectedPayment);
    switch (selectedPayment) {
      case PaymentType.PayPal:
        console.log("Paypal");
        setShowPaypalDemoModal(true);
        break;
      case PaymentType.ApplePay:
        console.log("Apple Pay");
        setShowApplePayDemoModal(true);
        break;
      case PaymentType.GooglePay:
        console.log("Google Pay");
        setShowGooglePayDemoModal(true);
        break;
      case PaymentType.CreditCard:
        console.log("Credit Card");
        setShowCreditCardDemoModal(true);
        break;
      default:
        continueToOverview();
        break;
    }
  }

  function continueToOverview(alternativeUrl?: string) {
    if (alternativeUrl) {
      navigate(alternativeUrl);
    } else {
      navigate(`/overview?method=${selectedPayment}`);
    }
  }

  const infotext = () => {
    switch (selectedPayment) {
      case PaymentType.CreditCard:
        return <CreditCardInfotext />;
        break;

      case PaymentType.PayPal:
        return <PaypalInfotext />;
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
              <button
                className="btn btn-primary w-full"
                onClick={() => {
                  console.log("initDemoModalsIfExists()");
                  initDemoModalsIfExists();
                }}
                disabled={!selectedPayment || props.cartItems.length === 0}
              >
                Bezahlen
              </button>
            </div>
            {showPaypalDemoModal ? (
              <PaypalDemoModal
                setShowPaypalDemoModal={setShowPaypalDemoModal}
                afterModal={continueToOverview}
                totalCartValue={totalCartValue}
              />
            ) : (
              ""
            )}
            {showApplePayDemoModal ? (
              <ApplePayDemoModal
                setShowApplePayDemoModal={setShowApplePayDemoModal}
                afterModal={continueToOverview}
                totalCartValue={totalCartValue}
              />
            ) : (
              ""
            )}
            {showGooglePayDemoModal ? (
              <GooglePayDemoModal
                setShowGooglePayDemoModal={setShowGooglePayDemoModal}
                afterModal={continueToOverview}
                totalCartValue={totalCartValue}
              />
            ) : (
              ""
            )}
            {showCreditCardDemoModal ? (
              <CreditCardDemoModal
                setShowDemoModal={setShowCreditCardDemoModal}
                afterModal={continueToOverview}
                totalCartValue={totalCartValue}
              />
            ) : (
              ""
            )}
          </div>
        }
        explanation={<div className="flex flex-col gap-4">{infotext()}</div>}
      />
    </Layout>
  );
}
