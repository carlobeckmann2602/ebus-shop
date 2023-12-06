import AllPayments from "../components/checkout/AllPayments.tsx";
import Layout from "./_layout.tsx";
import { CartItem } from "../commons.ts";
import DeliveryInformationForm from "../components/checkout/DeliveryInformationForm.tsx";

type CheckoutProps = {
  cartItems: CartItem[];
  removeFromCart: (product: CartItem) => void;
};

export default function Checkout(props: CheckoutProps) {
  return (
    <Layout cartItems={props.cartItems} removeFromCart={props.removeFromCart}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Delivery Information</h1>
          <DeliveryInformationForm />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Bezahlverfahren</h1>
          <AllPayments />
        </div>
        <div className="flex flex-row items-center justify-center">
          <button className="bg-black text-white font-bold p-2 text-center w-10/12 rounded-md hover:bg-gray-900 text-xl">
            Pay now
          </button>
        </div>
      </div>
    </Layout>
  );
}
