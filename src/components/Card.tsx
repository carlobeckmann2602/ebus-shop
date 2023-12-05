import { Product } from "../commons.ts";

export type CardProps = Product;

export default function Card(props: CardProps) {
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
          <label htmlFor="amount" style={{ alignSelf: "center" }}>
            Anzahl:{" "}
          </label>
          <input
            id="amount"
            min={0}
            max={10}
            type="number"
            className="input input-bordered w-16 max-w-xs"
          />
          <button className="btn btn-primary">in den Warenkorb</button>
        </div>
      </div>
    </div>
  );
}
