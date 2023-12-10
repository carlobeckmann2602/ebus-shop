import Header from "../components/Header.tsx";
import { ReactNode, useEffect } from "react";
import { CartItem } from "../commons.ts";
import Modal from "../components/Modal.tsx";
import {
  disclaimerText_1,
  disclaimerText_2,
  disclaimerText_3,
} from "../constants/DisclaimerText.ts";

type LayoutProps = {
  children: ReactNode;
  cartItems: CartItem[];
  removeFromCart: (product: CartItem) => void;
  resetShop: () => void;
};

export default function Layout(props: LayoutProps) {
  useEffect(() => {
    const _startModal = window.sessionStorage.getItem("startModal");
    if (!_startModal)
      (
        document?.getElementById("start_modal") as HTMLDialogElement
      ).showModal();
  }, []);
  return (
    <>
      <Modal
        id="start_modal"
        content={
          <div className="flex flex-col gap-4">
            <h1 className="text-center font-bold text-2xl">E-Bus Shop</h1>
            <span className="text-center">{disclaimerText_1}</span>
            <span className="text-center">{disclaimerText_2}</span>
            <span className="text-center">{disclaimerText_3}</span>
          </div>
        }
      />
      <Header
        cartItems={props.cartItems}
        removeFromCart={props.removeFromCart}
        resetShop={props.resetShop}
      />
      <div className="content">{props.children}</div>
    </>
  );
}
