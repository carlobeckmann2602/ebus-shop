import { Product, CartItem } from "../commons.ts";
import { useState } from "react";
import dieKunstDesEbus from "../assets/images/products/die-kunst-des-ebus.jpeg";
import ebusFuerFortgeschrittene from "../assets/images/products/ebus-fuer-fortgeschrittene.jpeg";
import ebusUndDieWeltVonMorgen from "../assets/images/products/ebus-und-die-welt-von-morgen.jpeg";
import einstiegEbus from "../assets/images/products/einstieg-ebus.jpeg";

export type CardProps = Product & {
  addToCart: (product: CartItem) => void;
};

export default function Card(props: CardProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const IMAGES = {
    "die-kunst-des-ebus.jpeg": dieKunstDesEbus,
    "ebus-fuer-fortgeschrittene.jpeg": ebusFuerFortgeschrittene,
    "ebus-und-die-welt-von-morgen.jpeg": ebusUndDieWeltVonMorgen,
    "einstieg-ebus.jpeg": einstiegEbus,
  };

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
      <figure className="w-1/4">
        <img
          className="h-full"
          src={
            // @ts-expect-error -- easiest workaround here
            IMAGES[props.imageUrl]
          }
          alt={props.imageAlt}
        />
      </figure>
      <div className="card-body w-3/4">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.description}</p>
        <div className="flex flex-row justify-between">
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
    </div>
  );
}
