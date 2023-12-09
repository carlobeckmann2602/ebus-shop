import Layout from "./_layout.tsx";
import { CartItem } from "../commons.ts";

type CartProps = {
  cartItems: CartItem[];
  removeFromCart: (product: CartItem) => void;
  resetShop: () => void;
};

export default function Cart(props: CartProps) {
  return (
    <Layout
      cartItems={props.cartItems}
      removeFromCart={props.removeFromCart}
      resetShop={props.resetShop}
    >
      <h1>Einkaufswagen</h1>
    </Layout>
  );
}
