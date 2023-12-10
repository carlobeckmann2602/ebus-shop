import { Trash2 } from "lucide-react";
import { CartItem } from "../../commons";

type CartSummaryProps = {
  cartItems: CartItem[];
  removeFromCart: (product: CartItem) => void;
};

export default function CartSummary(props: CartSummaryProps) {
  if (props.cartItems.length === 0) return <span>Dein Warenkorb ist leer</span>;
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Anzahl</th>
            <th>Gesamtpreis</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.cartItems.map((item) => {
            return (
              <tr>
                <th>{item.name}</th>
                <td>{item.quantity}</td>
                <td>{(parseFloat(item.price) * item.quantity).toFixed(2)} €</td>
                <td className="content-center">
                  <button
                    onClick={() => props.removeFromCart(item)}
                    className="btn btn-ghost"
                  >
                    <Trash2 size={15} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>Summe</th>
            <th>
              {props.cartItems.reduce(
                (accumulator, item) => accumulator + item.quantity,
                0
              )}
            </th>
            <th>
              {props.cartItems
                .reduce(
                  (accumulator, item) =>
                    accumulator + parseFloat(item.price) * item.quantity,
                  0
                )
                .toFixed(2)}{" "}
              €
            </th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
