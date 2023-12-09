import Header from "../components/Header.tsx";
import { ReactNode } from "react";
import { CartItem } from "../commons.ts";

type LayoutProps = {
  children: ReactNode;
  cartItems: CartItem[];
  removeFromCart: (product: CartItem) => void;
  resetShop: () => void;
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header
        cartItems={props.cartItems}
        removeFromCart={props.removeFromCart}
        resetShop={props.resetShop}
      />
      <div className="content">{props.children}</div>
    </>
  );
}
