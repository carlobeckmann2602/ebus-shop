import AllPayments from "../components/checkout/AllPayments.tsx";
import Layout from "./_layout.tsx";
import { CartItem } from "../commons.ts";

type CheckoutProps = {
  cartItems: CartItem[];
  removeFromCart: (product: CartItem) => void;
};

export default function Checkout(props: CheckoutProps) {
  return (
    <Layout cartItems={props.cartItems} removeFromCart={props.removeFromCart}>
      <h1>Bezahlverfahren</h1>
      <AllPayments />
    </Layout>
  );
}
