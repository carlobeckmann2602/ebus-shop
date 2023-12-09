import AllPayments from "../components/checkout/AllPayments.tsx";
import Layout from "./_layout.tsx";
import { CartItem } from "../commons.ts";
import DeliveryInformationForm from "../components/checkout/DeliveryInformationForm.tsx";
import Guide from "../components/Guide.tsx";

type CheckoutProps = {
  cartItems: CartItem[];
  removeFromCart: (product: CartItem) => void;
  resetShop: () => void;
};

export default function Checkout(props: CheckoutProps) {
  return (
    <Layout
      cartItems={props.cartItems}
      removeFromCart={props.removeFromCart}
      resetShop={props.resetShop}
    >
      <Guide
        content={
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
        }
        explanation={
          <div className="flex flex-col gap-4">
            <h1 className="w-full flex flex-row justify-center items-center text-xl font-bold">
              So funktioniert's
            </h1>
            <div>
              Heading 1 Lorem ipsum dolor sit amet consectetur. Ut massa pretium
              nec at tempor massa. Faucibus nulla eget libero ut lorem fusce.
              Aliquam habitant dictumst non semper lectus at dignissim amet
              habitasse. Diam ultrices sapien rhoncus nisl massa interdum in a.
              Amet dolor cursus dolor quam diam. Molestie quis ac non iaculis.
              Augue euismod arcu sapien volutpat lobortis. Vulputate tincidunt
              pharetra sagittis nunc. Ut quis odio nisi tellus sit sed sit
              adipiscing. Eros amet est urna lobortis. Odio a id sed proin
              euismod adipiscing. Est velit condimentum consequat integer et
              vitae erat id neque. Odio facilisis iaculis arcu magna nisi
              magnis. Aliquet sit ultrices viverra vitae. Quis suscipit nullam
              vitae facilisis at cras. Adipiscing curabitur eget viverra
              faucibus a enim. Neque malesuada purus ante ipsum euismod natoque.
              Pellentesque velit blandit lectus diam phasellus. Eget eleifend
              mauris pulvinar sapien quam eget. Amet elit accumsan quis
              condimentum placerat venenatis. Massa sed duis egestas id duis
              nibh. Facilisis nunc elit eget cursus elementum. Libero magna amet
              nulla libero viverra sed eget aliquam nisl. Placerat dignissim
              vivamus imperdiet turpis et urna id ullamcorper. Commodo nisi
              faucibus orci convallis viverra nisl imperdiet netus dolor. Proin
              pretium id consequat nisl lectus sed. Amet nunc sit viverra libero
              a sit. A metus aliquam enim morbi sed et molestie pellentesque.
              Aenean pulvinar ac urna amet malesuada convallis. Purus vel velit
              vulputate commodo euismod. Sollicitudin eget orci morbi gravida.
              Dignissim sociis elit purus eleifend nibh. Id tristique sagittis
              pharetra lacus duis ornare et.
            </div>
          </div>
        }
      />
    </Layout>
  );
}
