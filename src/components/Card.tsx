import { Product, CartItem } from "../commons.ts";
import { useState } from "react";

export type CardProps = Product & {
  addToCart: (product: CartItem) => void;
};

export default function Card(props: CardProps) {
  const [quantity, setQuantity] = useState<number>(1);

  function addToCart() {
    props.addToCart({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      imageAlt: props.imageAlt,
      imageUrl: props.imageUrl,
      quantity: quantity,
    });
  }

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-full" src={props.imageUrl} alt={props.imageAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.description}</p>
        <span className="stat-value text-primary">{props.price} €</span>
        <div className="card-actions justify-end align-center">
          <label htmlFor="quantity" style={{ alignSelf: "center" }}>
            Anzahl
          </label>
          <input
            id="quantity"
            min={1}
            max={10}
            type="number"
            value={quantity ?? 1}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="input input-bordered w-16 max-w-xs"
          />
          <button onClick={() => addToCart()} className="btn btn-primary">
            in den Warenkorb
          </button>
        </div>
      </div>
    </div>
  );
}
