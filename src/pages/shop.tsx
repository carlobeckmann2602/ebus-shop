import Layout from "./_layout.tsx";
import Card from "../components/Card.tsx";
import { ALL_PRODUCTS } from "../commons.ts";

export default function Shop() {
  return (
    <Layout>
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
            />
          );
        })}
      </div>
    </Layout>
  );
}
