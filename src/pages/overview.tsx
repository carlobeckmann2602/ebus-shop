import Layout from "./_layout.tsx";
import { CartItem } from "../commons.ts";
import { useSearchParams } from "react-router-dom";
import { PaymentType } from "../constants/PaymentTypes.ts";
import ApplePayOverview from "../components/overview/ApplePayOverview.tsx";
import CreditCardOverview from "../components/overview/CreditCardOverview.tsx";
import GooglePayOverview from "../components/overview/GooglePayOverview.tsx";
import PaypalOverview from "../components/overview/PaypalOverview.tsx";

type OverviewProps = {
  cartItems: CartItem[];
  removeFromCart: (product: CartItem) => void;
  resetShop: () => void;
};

export default function Overview(props: OverviewProps) {
  const [searchParams] = useSearchParams();

  const content = () => {
    switch (searchParams.get("method")) {
      case PaymentType.ApplePay:
        return <ApplePayOverview />;
        break;

      case PaymentType.CreditCard:
        return <CreditCardOverview />;
        break;

      case PaymentType.GooglePay:
        return <GooglePayOverview />;
        break;

      case PaymentType.PayPal:
        return <PaypalOverview />;
        break;

      default:
        return (
          <div
            className="flex flex-col gap-10 justify-center align-middle items-center"
            style={{ height: "calc(100vh - 7rem)" }}
          >
            <span className="text-center font-medium text-xl">
              Es wurde keine Bezahlungsmethode ausgewählt!
            </span>
            <a href="/" className="btn btn-primary max-w-sm w-full text-lg">
              Zurück zur Startseite!
            </a>
          </div>
        );
        break;
    }
  };

  return (
    <Layout
      cartItems={props.cartItems}
      removeFromCart={props.removeFromCart}
      resetShop={props.resetShop}
    >
      {content()}
    </Layout>
  );
}
