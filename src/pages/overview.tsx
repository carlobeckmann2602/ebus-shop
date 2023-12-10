import Layout from "./_layout.tsx";
import { CartItem } from "../commons.ts";
import { useSearchParams } from "react-router-dom";

type OverviewProps = {
  cartItems: CartItem[];
  removeFromCart: (product: CartItem) => void;
  resetShop: () => void;
};

export default function Overview(props: OverviewProps) {
  const [searchParams] = useSearchParams();
  return (
    <Layout
      cartItems={props.cartItems}
      removeFromCart={props.removeFromCart}
      resetShop={props.resetShop}
    >
      <h1>Overview for {searchParams.get("method")}</h1>
    </Layout>
  );
}
