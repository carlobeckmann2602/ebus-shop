import Layout from "./_layout.tsx";
import { CartItem } from "../commons.ts";

type OverviewProps = {
  cartItems: CartItem[];
  removeFromCart: (product: CartItem) => void;
  resetShop: () => void;
};

export default function Overview(props: OverviewProps) {
  return (
    <Layout
      cartItems={props.cartItems}
      removeFromCart={props.removeFromCart}
      resetShop={props.resetShop}
    >
      <h1>Overview</h1>
    </Layout>
  );
}
