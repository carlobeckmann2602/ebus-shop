import Layout from "./_layout.tsx";
import Card from "../components/Card.tsx";
import { ALL_PRODUCTS, CartItem } from "../commons.ts";

type ShopProps = {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (product: CartItem) => void;
};

export default function Shop(props: ShopProps) {
  return (
    <Layout cartItems={props.cartItems} removeFromCart={props.removeFromCart}>
      <h1>Shop</h1>
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
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </Layout>
  );
}
