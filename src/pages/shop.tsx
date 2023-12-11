import Layout from "./_layout.tsx";
import Card from "../components/Card.tsx";
import { ALL_PRODUCTS, CartItem } from "../commons.ts";
import { disclaimerText_1 } from "../constants/DisclaimerText.ts";
import { useState } from "react";
import CustomAlert, { Alert } from "../components/CustomAlert.tsx";

type ShopProps = {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (product: CartItem) => void;
  resetShop: () => void;
};

export default function Shop(props: ShopProps) {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  function addToCart(cartItem: CartItem) {
    props.addToCart(cartItem);
    addAlert({
      text: `Ihr Produkt "${cartItem.name}" wurde ${
        cartItem.quantity > 1 ? cartItem.quantity + " mal" : " einmal"
      } in den Warenkorb gelegt`,
      type: "alert-success",
      id: Date.now().toString(),
    });
  }

  function addAlert(alert: Alert) {
    const _alerts = [...alerts];
    _alerts.push(alert);
    setAlerts([..._alerts]);
  }

  return (
    <Layout
      cartItems={props.cartItems}
      removeFromCart={props.removeFromCart}
      resetShop={props.resetShop}
    >
      <div className="flex flex-col gap-6">
        <span className="text-center">{disclaimerText_1}</span>
        <div className="flex flex-col gap-8">
          {ALL_PRODUCTS.map((product) => {
            return (
              <Card
                key={"card" + product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                imageAlt={product.imageAlt}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </div>
      <div className="toast toast-end">
        {alerts.map((alert) => {
          return (
            <CustomAlert
              key={alert.id}
              text={alert.text}
              type={alert.type}
              id={alert.id}
            ></CustomAlert>
          );
        })}
      </div>
    </Layout>
  );
}
