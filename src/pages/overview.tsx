import Layout from "./_layout.tsx";
import { CartItem } from "../commons.ts";

type OverviewProps = {
  cartItems: CartItem[];
  removeFromCart: (product: CartItem) => void;
};

export default function Overview(props: OverviewProps) {
  return (
    <Layout cartItems={props.cartItems} removeFromCart={props.removeFromCart}>
      <h1>Overview</h1>
    </Layout>
  );
}
